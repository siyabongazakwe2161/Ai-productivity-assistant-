import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { BookOpen } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ToolShell } from "@/components/tool-shell";

export const Route = createFileRoute("/research")({
  head: () => ({ meta: [{ title: "AI Research Assistant — WorkWise AI" }] }),
  component: ResearchPage,
});

const SYSTEM = `You are an expert business research analyst. Produce a professional research summary using Markdown with these sections:

## Executive Summary
## Key Insights
## Benefits
## Challenges
## Recommendations
## Conclusion

Constraints: Be objective, use bullet points where useful, avoid speculation, do not fabricate statistics.`;

function ResearchPage() {
  const [topic, setTopic] = useState("");
  return (
    <ToolShell
      title="AI Research Assistant"
      description="Extract insights, benefits, and recommendations from any topic or article."
      icon={<BookOpen className="h-6 w-6" />}
      system={SYSTEM}
      buildPrompt={() => (topic.trim().length < 8 ? null : `Topic or article text:\n\n${topic}`)}
      ctaLabel="Generate Research Summary"
      outputLabel="Research Summary"
      inputs={
        <div className="space-y-2">
          <Label>Topic or article text</Label>
          <Textarea rows={12} value={topic} onChange={e => setTopic(e.target.value)} placeholder="Paste an article or describe a topic to research…" />
        </div>
      }
    />
  );
}
