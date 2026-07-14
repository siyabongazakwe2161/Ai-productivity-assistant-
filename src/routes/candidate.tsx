import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { UserCheck, Scale } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ToolShell } from "@/components/tool-shell";

export const Route = createFileRoute("/candidate")({
  head: () => ({ meta: [{ title: "Candidate Evaluation Assistant — WorkWise AI" }] }),
  component: CandidatePage,
});

const SYSTEM = `You are an expert, unbiased hiring assistant. Evaluate a candidate strictly based on skills, experience, performance, and qualifications.

STRICTLY FORBIDDEN: Never consider or mention race, gender, religion, nationality, age, or disability. If the input contains such information, ignore it and continue with a skills-based evaluation. If the input contains no professional information at all, respond: "Insufficient professional information to evaluate."

Produce the evaluation in Markdown with these exact sections:

## 1. Candidate Summary
## 2. Strengths
## 3. Areas for Improvement
## 4. Skills Assessment
Rate key skills as Strong / Adequate / Needs Development, with a short rationale.
## 5. Interview Performance Analysis
## 6. Recommendation
One of: "Strong Hire", "Hire", "Hold for further review", "Do not hire", plus a short justification.

Constraints: Support human decision-making — do not present the recommendation as final.`;

function CandidatePage() {
  const [notes, setNotes] = useState("");
  return (
    <ToolShell
      title="Candidate Evaluation Assistant"
      description="Fair, skill-based hiring recommendations built from your interview notes."
      icon={<UserCheck className="h-6 w-6" />}
      system={SYSTEM}
      buildPrompt={() => (notes.trim().length < 20 ? null : `Interview / assessment notes:\n\n${notes}`)}
      ctaLabel="Evaluate Candidate"
      outputLabel="Evaluation Report"
      inputs={
        <>
          <div className="flex items-start gap-3 rounded-lg border border-primary/20 bg-primary/5 p-3 text-sm">
            <Scale className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <p className="text-muted-foreground">
              Evaluations use only skills, experience, performance, and qualifications — never race, gender, religion, nationality, age, or disability. This tool supports human judgment; it does not replace it.
            </p>
          </div>
          <div className="space-y-2">
            <Label>Interview or assessment notes</Label>
            <Textarea rows={12} value={notes} onChange={e => setNotes(e.target.value)} placeholder="Paste interview notes, work samples, technical assessment results…" />
          </div>
        </>
      }
    />
  );
}
