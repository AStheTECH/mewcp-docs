import { useEffect, useState, type ReactNode } from "react";
import { Head, Link } from "zudoku/components";
import {
  ActivityIcon,
  ArrowRightIcon,
  BookOpenIcon,
  BotIcon,
  KeyRoundIcon,
  LibraryIcon,
  NetworkIcon,
  ShieldCheckIcon,
  UsersIcon,
} from "zudoku/icons";
import { Button } from "zudoku/ui/Button";
import { Card, CardHeader, CardTitle, CardDescription } from "zudoku/ui/Card";

const quickLinks = [
  {
    icon: BookOpenIcon,
    title: "Documentation",
    description:
      "Get from a new account to your first tool call in about 5 minutes.",
    to: "/mewcp/getting-started",
  },
  {
    icon: BotIcon,
    title: "Connect an agent",
    description:
      "Google ADK, CrewAI, LangChain, OpenAI Agents, or the Claude SDK.",
    to: "/mewcp/connect-agents/google-adk",
  },
  {
    icon: KeyRoundIcon,
    title: "Authentication",
    description: "MewCP keys, account API keys, OAuth, and static credentials.",
    to: "/mewcp/authentication/mewcp-key",
  },
  {
    icon: LibraryIcon,
    title: "API Catalog",
    description: "Browse the full MewCP Auth API reference.",
    to: "/mewcp-auth",
  },
];

const features = [
  {
    icon: NetworkIcon,
    title: "One connection, every tool",
    description:
      "Point an agent at MewCP once and it reaches every app you have connected. Connect another and it is available with no config change.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Auth, solved",
    description:
      "OAuth and static credentials are handled for you, no custom auth server or manual token plumbing.",
  },
  {
    icon: ActivityIcon,
    title: "Usage controls & observability",
    description:
      "Rate limits, quotas, and usage logs across every connected agent and server.",
  },
  {
    icon: UsersIcon,
    title: "Built for teams",
    description:
      "Org accounts, shared credentials, and role-based access, so teams roll out agents without duplicating setup.",
  },
];

const clients = [
  { label: "Claude Desktop", to: "/mewcp/connect/claude-desktop" },
  { label: "VS Code & Cursor", to: "/mewcp/connect/vscode-cursor" },
  { label: "Codex", to: "/mewcp/connect/codex" },
  { label: "TypeScript", to: "/mewcp/connect/typescript" },
  { label: "Python", to: "/mewcp/connect/python" },
];

const agentFrameworks = [
  { label: "Google ADK", to: "/mewcp/connect-agents/google-adk" },
  { label: "CrewAI", to: "/mewcp/connect-agents/crewai" },
  { label: "LangChain (Python)", to: "/mewcp/connect-agents/langchain-python" },
  {
    label: "LangChain (TypeScript)",
    to: "/mewcp/connect-agents/langchain-typescript",
  },
  { label: "OpenAI Agents", to: "/mewcp/connect-agents/openai-agents" },
  { label: "Claude SDK", to: "/mewcp/connect-agents/claude-sdk" },
];

// The head and tail never change. Only the three lines between them do, which is
// the whole pitch: one endpoint, every app.
const CODE_HEAD = `from fastmcp import Client

client = Client(
    "https://gateway.mewcp.com/personal/mcp",
    headers={"Authorization": f"Bearer {MEWCP_KEY}"},
)

async with client:
    # One MCP endpoint. Any connected app. Any tool.
    result = await client.call_tool("call_tool", {
`;

const CODE_TAIL = `    })`;

const CALLS = [
  {
    label: "Calendar",
    server: "google-calendar",
    tool: "list_events",
    args: `{"calendar_id": "primary"}`,
  },
  {
    label: "Gmail",
    server: "google-gmail",
    tool: "list_messages",
    args: `{"max_results": 10}`,
  },
  {
    label: "Notion",
    server: "notion",
    tool: "search_notion",
    args: `{"query": "Q3 planning"}`,
  },
  {
    label: "Slack",
    server: "slack",
    tool: "send_message",
    args: `{"channel": "#design", "text": "Review at 2pm"}`,
  },
];

const callBody = (call: (typeof CALLS)[number]): string =>
  `        "server_maskedId": "${call.server}",\n` +
  `        "tool_name": "${call.tool}",\n` +
  `        "args": ${call.args},\n`;

const HERO_ANIM_CSS = `
@keyframes mewcp-call-in {
  from { opacity: 0; transform: translateY(5px); }
  to   { opacity: 1; transform: none; }
}
.mewcp-call { animation: mewcp-call-in 400ms ease-out both; }
@media (prefers-reduced-motion: reduce) {
  .mewcp-call { animation: none; }
}
`;

// `com` must come first: a comment swallows the rest of its line, so capitalised
// words inside it never fall through to `cls`. A "#" inside a string is safe,
// since the scan reaches the opening quote first and `str` takes the whole span.
const PY_TOKEN_RE =
  /(?<com>#[^\n]*)|(?<str>f?"(?:[^"\\]|\\.)*")|(?<kw>\b(?:from|import)\b)|(?<cls>\b[A-Z][A-Za-z0-9]*\b)|(?<kwarg>\b[a-z_][a-z0-9_]*(?=\s*=))/g;

const PY_TOKEN_STYLES: Record<string, string> = {
  com: "text-zinc-500",
  str: "text-amber-300",
  kw: "text-pink-400",
  cls: "text-sky-300",
  kwarg: "text-blue-300",
};

const highlightPython = (code: string): ReactNode[] => {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let key = 0;

  for (const match of code.matchAll(PY_TOKEN_RE)) {
    const text = match[0];
    const index = match.index ?? 0;
    if (index > lastIndex) nodes.push(code.slice(lastIndex, index));

    const group = Object.entries(match.groups ?? {}).find(([, v]) => v)?.[0];
    nodes.push(
      <span key={key++} className={group ? PY_TOKEN_STYLES[group] : undefined}>
        {text}
      </span>,
    );
    lastIndex = index + text.length;
  }
  if (lastIndex < code.length) nodes.push(code.slice(lastIndex));

  return nodes;
};

const LinkPill = ({ label, to }: { label: string; to: string }) => (
  <Link
    to={to}
    className="group flex items-center justify-between rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground/90 transition-colors hover:border-primary/40 hover:text-foreground"
  >
    {label}
    <ArrowRightIcon className="size-3.5 text-foreground/40 transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
  </Link>
);

export const Home = () => {
  const [callIndex, setCallIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(
      () => setCallIndex((n) => (n + 1) % CALLS.length),
      3600,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div className="-mx-4 lg:-mx-8">
      <Head>
        <title>MewCP — Give your agents access to the real world</title>
        <meta
          name="description"
          content="MewCP connects any LLM or agent to the tools and services it needs, with auth, credentials, usage controls, and team access already handled."
        />
        <meta
          property="og:title"
          content="MewCP — Give your agents access to the real world"
        />
        <meta
          property="og:description"
          content="MewCP connects any LLM or agent to the tools and services it needs, with auth, credentials, usage controls, and team access already handled."
        />
      </Head>

      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <span className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-foreground/70">
              For every LLM, every agent framework
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl">
              Give your agents access to{" "}
              <span className="box-decoration-clone rounded-md bg-primary px-2 py-0.5 text-primary-foreground">
                the real world
              </span>
            </h1>
            <p className="mt-5 max-w-lg text-lg text-muted-foreground">
              MewCP connects any LLM or agent to the tools and services it
              needs, auth, credentials, usage controls, and team access all
              handled for you.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button size="xl" asChild>
                <a
                  href="https://mewcp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore MewCP
                  <ArrowRightIcon />
                </a>
              </Button>
              <Button size="xl" variant="outline" asChild>
                <Link to="/mewcp/getting-started">Read the docs</Link>
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl bg-zinc-950 shadow-xl ring-1 ring-border">
            <style>{HERO_ANIM_CSS}</style>
            <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
              <span className="size-2.5 rounded-full bg-white/20" />
              <span className="size-2.5 rounded-full bg-white/20" />
              <span className="size-2.5 rounded-full bg-white/20" />
              <span className="ml-2 text-xs text-white/40">client.py</span>
            </div>
            {/* whitespace-pre, not pre-wrap: every frame is then exactly three
                lines, so cycling cannot change the panel height. */}
            <pre className="overflow-x-auto whitespace-pre px-5 py-5 text-[13px] leading-relaxed text-zinc-300">
              <code>
                <span>{highlightPython(CODE_HEAD)}</span>
                <span key={callIndex} className="mewcp-call">
                  {highlightPython(callBody(CALLS[callIndex]))}
                </span>
                <span>{highlightPython(CODE_TAIL)}</span>
              </code>
            </pre>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-white/10 px-5 py-3 text-[11px]">
              <span className="text-white/35">One endpoint</span>
              {CALLS.map((call, index) => (
                <span
                  key={call.server}
                  className={
                    index === callIndex
                      ? "font-medium text-primary transition-colors duration-300"
                      : "text-white/25 transition-colors duration-300"
                  }
                >
                  {call.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickLinks.map(({ icon: Icon, title, description, to }) => (
            <Link key={to} to={to} className="block h-full">
              <Card className="h-full transition-colors hover:ring-primary/40">
                <CardHeader>
                  <Icon className="size-5 text-primary" />
                  <CardTitle className="mt-2">{title}</CardTitle>
                  <CardDescription>{description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="border-y border-border bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-bold text-foreground">Why MewCP</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ icon: Icon, title, description }) => (
              <div key={title}>
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="size-5 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">{title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect grid */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold text-foreground">
          Connect in minutes
        </h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Pick an agent framework or a client and follow a short guide to your
          first tool call.
        </p>
        <div className="mt-8 grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Agent frameworks
            </h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {agentFrameworks.map((f) => (
                <LinkPill key={f.to} {...f} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Clients
            </h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {clients.map((c) => (
                <LinkPill key={c.to} {...c} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-col items-start justify-between gap-6 border border-border bg-muted/30 px-8 py-10 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                Ready to connect your first agent?
              </h2>
              <p className="mt-2 text-muted-foreground">
                Create a free MewCP account and give your agent access to its
                first tool today.
              </p>
            </div>
            <div className="flex flex-none flex-wrap items-center gap-3">
              <Button size="xl" asChild>
                <a
                  href="https://mewcp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore MewCP
                  <ArrowRightIcon />
                </a>
              </Button>
              <Button size="xl" variant="outline" asChild>
                <Link to="/mewcp/getting-started">Get started</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
