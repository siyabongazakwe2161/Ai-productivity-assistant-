import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ListChecks } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { ToolShell } from "@/components/tool-shell";

export const Route = createFileRoute("/tasks")({
  head: () => ({ meta: [{ title: "AI Task Planner — WorkWise AI" }] }),
  component: TasksPage,
});

const SYSTEM = `You are an expert productivity coach. Organize the user's tasks and return a structured plan using Markdown with these sections:

## High Priority Tasks
## Medium Priority Tasks
## Low Priority Tasks
## Daily Schedule
Provide a realistic hour-by-hour plan for a typical workday (09:00–18:00), including breaks.
## Time Blocking Plan
Group tasks into focused blocks (Deep Work, Admin, Communication, etc.).
## Productivity Recommendations
3–5 concrete tips tailored to the workload.

Constraints: Use bullet points, keep it realistic, respect stated due dates and preferences.`;

function TasksPage() {
  const [tasks, setTasks] = useState("");
  const [dueDates, setDueDates] = useState("");
  const [prefs, setPrefs] = useState("");

  return (
    <ToolShell
      title="AI Task Planner"
      description="Prioritize your workload and build a focused daily schedule."
      icon={<ListChecks className="h-6 w-6" />}
      system={SYSTEM}
      buildPrompt={() => (tasks.trim() ? `Tasks:\n${tasks}\n\nDue dates:\n${dueDates || "(none)"}\n\nPriority preferences:\n${prefs || "(none)"}` : null)}
      ctaLabel="Plan My Day"
      outputLabel="Task Plan"
      inputs={
        <>
          <div className="space-y-2">
            <Label>Tasks (one per line)</Label>
            <Textarea rows={8} value={tasks} onChange={e => setTasks(e.target.value)} placeholder={"Prepare Q4 report\nReview candidate CVs\nRespond to client emails"} />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label>Due dates / deadlines</Label>
              <Input value={dueDates} onChange={e => setDueDates(e.target.value)} placeholder="Q4 report — Friday; CVs — today" />
            </div>
            <div className="space-y-2">
              <Label>Priority preferences</Label>
              <Input value={prefs} onChange={e => setPrefs(e.target.value)} placeholder="Focus mornings on deep work" />
            </div>
          </div>
        </>
      }
    />
  );
}
