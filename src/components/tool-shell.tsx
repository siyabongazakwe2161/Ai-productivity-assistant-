import { type ReactNode, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Check, Loader2, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { useServerFn } from "@tanstack/react-start";
import { runAI } from "@/lib/ai.functions";

interface ToolShellProps {
  title: string;
  description: string;
  icon: ReactNode;
  inputs: ReactNode;
  system: string;
  buildPrompt: () => string | null;
  outputLabel?: string;
  ctaLabel?: string;
}

export function ToolShell({
  title,
  description,
  icon,
  inputs,
  system,
  buildPrompt,
  outputLabel = "Result",
  ctaLabel = "Generate",
}: ToolShellProps) {
  const run = useServerFn(runAI);
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  async function onRun() {
    const prompt = buildPrompt();
    if (!prompt) {
      toast.error("Please fill in the required fields");
      return;
    }
    setLoading(true);
    setOutput("");
    try {
      const res = await run({ data: { system, prompt } });
      setOutput(res.text);
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Something went wrong";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  }

  async function onCopy() {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    toast.success("Copied to clipboard");
    setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div className="mx-auto max-w-5xl space-y-6 p-4 md:p-8">
      <header className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-elegant)]">
          {icon}
        </div>
        <div>
          <h1 className="font-display text-2xl font-semibold md:text-3xl">{title}</h1>
          <p className="mt-1 text-sm text-muted-foreground md:text-base">{description}</p>
        </div>
      </header>

      <Card className="shadow-[var(--shadow-card)]">
        <CardHeader>
          <CardTitle className="text-base">Inputs</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {inputs}
          <Button onClick={onRun} disabled={loading} size="lg" className="w-full sm:w-auto">
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating…
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-4 w-4" />
                {ctaLabel}
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {(loading || output) && (
        <Card className="shadow-[var(--shadow-card)]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-base">{outputLabel}</CardTitle>
            {output && (
              <Button variant="outline" size="sm" onClick={onCopy}>
                {copied ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
                {copied ? "Copied" : "Copy"}
              </Button>
            )}
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Loader2 className="h-4 w-4 animate-spin" />
                AI is working on your request…
              </div>
            ) : (
              <pre className="whitespace-pre-wrap break-words rounded-md bg-muted/50 p-4 font-sans text-sm leading-relaxed text-foreground">
                {output}
              </pre>
            )}
          </CardContent>
        </Card>
      )}

      <p className="text-xs text-muted-foreground">
        AI-generated content may contain inaccuracies. Users should verify information before making business or hiring decisions.
      </p>
    </div>
  );
}
