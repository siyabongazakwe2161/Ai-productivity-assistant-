import { AlertTriangle, Lock, Scale } from "lucide-react";

export function Disclaimers() {
  const items = [
    {
      icon: AlertTriangle,
      title: "AI Accuracy",
      body: "AI-generated content may contain inaccuracies. Verify information before making business or hiring decisions.",
    },
    {
      icon: Lock,
      title: "Privacy",
      body: "Do not upload confidential company information or sensitive personal data.",
    },
    {
      icon: Scale,
      title: "Bias & Fairness",
      body: "Candidate evaluations are intended to support human decision-making and should not replace professional judgment.",
    },
  ];
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((i) => (
        <div key={i.title} className="rounded-lg border border-border bg-card p-4">
          <div className="flex items-center gap-2">
            <i.icon className="h-4 w-4 text-primary" />
            <h3 className="text-sm font-semibold">{i.title}</h3>
          </div>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{i.body}</p>
        </div>
      ))}
    </div>
  );
}
