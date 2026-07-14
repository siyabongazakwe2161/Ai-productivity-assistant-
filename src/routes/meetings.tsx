import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { FileText } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ToolShell } from "@/components/tool-shell";

export const Route = createFileRoute("/meetings")({
  head: () => ({ meta: [{ title: "Meeting Notes Summarizer — WorkWise AI" }] }),
  component: MeetingsPage,
});

const SYSTEM = `You are an expert meeting analyst. Summarize the provided meeting notes into the exact sections below, using Markdown headings:

## 1. Meeting Overview
Short paragraph describing the meeting purpose and participants (if inferable).

## 2. Key Discussion Points
Bulleted list.

## 3. Decisions Made
Bulleted list of clear decisions.

## 4. Action Items
Bulleted list of concrete actions.

## 5. Responsible Persons
Bulleted list mapping owners → actions (say "Unassigned" when unclear).

## 6. Deadlines
Bulleted list of deadlines mentioned (say "Not specified" when absent).

Constraints: Be faithful to the input, do not invent facts, keep bullets concise.`;

function MeetingsPage() {
  const [notes, setNotes] = useState("");
  return (
    <ToolShell
      title="Meeting Notes Summarizer"
      description="Turn messy meeting notes into a structured summary with owners and deadlines."
      icon={<FileText className="h-6 w-6" />}
      system={SYSTEM}
      buildPrompt={() => (notes.trim().length < 20 ? null : `Meeting notes:\n\n${notes}`)}
      ctaLabel="Summarize Notes"
      outputLabel="Structured Summary"
      inputs={
        <div className="space-y-2">
          <Label>Meeting notes</Label>
          <Textarea rows={14} value={notes} onChange={e => setNotes(e.target.value)} placeholder="Paste your raw meeting notes here…" />
        </div>
      }
    />
  );
}
