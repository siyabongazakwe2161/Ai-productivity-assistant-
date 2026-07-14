import { createFileRoute, Link } from "@tanstack/react-router";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, FileText, ListChecks, BookOpen, UserCheck, ArrowRight, Zap, Clock, Target, Users } from "lucide-react";
import { Disclaimers } from "@/components/disclaimers";

export const Route = createFileRoute("/")({
  component: Dashboard,
});

const tools = [
  { url: "/email", title: "Smart Email Generator", desc: "Draft polished emails with the right tone in seconds.", icon: Mail },
  { url: "/meetings", title: "Meeting Notes Summarizer", desc: "Turn raw notes into structured summaries and action items.", icon: FileText },
  { url: "/tasks", title: "AI Task Planner", desc: "Prioritize your workload and build a focused daily schedule.", icon: ListChecks },
  { url: "/research", title: "AI Research Assistant", desc: "Extract insights, benefits, and recommendations from any topic.", icon: BookOpen },
  { url: "/candidate", title: "Candidate Evaluation Assistant", desc: "Fair, skill-based hiring recommendations from interview notes.", icon: UserCheck },
];

const benefits = [
  { icon: Clock, title: "Save Hours Weekly", body: "Automate repetitive writing, summarizing, and planning tasks." },
  { icon: Target, title: "Better Decisions", body: "Structured, unbiased outputs to support judgment." },
  { icon: Zap, title: "Faster Execution", body: "Move from raw thoughts to polished deliverables in minutes." },
  { icon: Users, title: "Fairer Hiring", body: "Skill-focused evaluations that reduce bias in recruiting." },
];

function Dashboard() {
  return (
    <div className="mx-auto max-w-6xl space-y-10 p-4 md:p-8">
      <section className="relative overflow-hidden rounded-2xl border border-border bg-[image:var(--gradient-subtle)] p-6 md:p-10">
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative max-w-2xl">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
            <Zap className="h-3 w-3" /> Powered by AI
          </span>
          <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-5xl">
            Your intelligent workplace assistant
          </h1>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            WorkWise AI helps professionals save time, improve productivity, and make better decisions using Artificial Intelligence.
          </p>
        </div>
      </section>

      <section>
        <h2 className="mb-4 font-display text-xl font-semibold">AI Tools</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((t) => (
            <Link key={t.url} to={t.url} className="group">
              <Card className="h-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-elegant)]">
                <CardContent className="flex h-full flex-col gap-4 p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[image:var(--gradient-primary)] text-primary-foreground">
                    <t.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-semibold">{t.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">{t.desc}</p>
                  </div>
                  <div className="flex items-center gap-1 text-sm font-medium text-primary">
                    Open tool <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 font-display text-xl font-semibold">Productivity benefits</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-xl border border-border bg-card p-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                <b.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-3 font-semibold">{b.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 font-display text-xl font-semibold">Responsible AI</h2>
        <Disclaimers />
      </section>
    </div>
  );
}
