import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ToolShell } from "@/components/tool-shell";

export const Route = createFileRoute("/email")({
  head: () => ({ meta: [{ title: "Smart Email Generator — WorkWise AI" }] }),
  component: EmailPage,
});

const SYSTEM = `You are an expert workplace communication assistant. Write a professional email based on the user's inputs.
Format your response exactly as:
Subject: <one-line subject>
<blank line>
<Greeting>
<blank line>
<Body — 2 to 4 short paragraphs>
<blank line>
<Clear call to action>
<blank line>
<Professional closing and signature line "[Your Name]">
Constraints: Match the requested tone. Be concise, courteous, and free of jargon. No placeholders except [Your Name].`;

function EmailPage() {
  const [recipient, setRecipient] = useState("Client");
  const [tone, setTone] = useState("Professional");
  const [purpose, setPurpose] = useState("");
  const [details, setDetails] = useState("");

  return (
    <ToolShell
      title="Smart Email Generator"
      description="Draft polished, on-tone emails for clients, managers, teammates, or HR."
      icon={<Mail className="h-6 w-6" />}
      system={SYSTEM}
      buildPrompt={() => {
        if (!purpose.trim()) return null;
        return `Recipient type: ${recipient}
Tone: ${tone}
Email purpose: ${purpose}
Key details:
${details || "(none provided)"}`;
      }}
      ctaLabel="Generate Email"
      outputLabel="Generated Email"
      inputs={
        <>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label>Recipient type</Label>
              <Select value={recipient} onValueChange={setRecipient}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {["Client", "Manager", "Team Member", "HR"].map(v => <SelectItem key={v} value={v}>{v}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Tone</Label>
              <Select value={tone} onValueChange={setTone}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {["Formal", "Friendly", "Persuasive", "Professional"].map(v => <SelectItem key={v} value={v}>{v}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label>Email purpose</Label>
            <Input value={purpose} onChange={e => setPurpose(e.target.value)} placeholder="e.g. Request status update on Q4 proposal" />
          </div>
          <div className="space-y-2">
            <Label>Key details</Label>
            <Textarea rows={5} value={details} onChange={e => setDetails(e.target.value)} placeholder="Context, names, dates, deliverables, links…" />
          </div>
        </>
      }
    />
  );
}
