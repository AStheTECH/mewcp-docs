import type { ReactNode } from "react";
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
      "Point an agent at MewCP once and it can call every tool across every server you subscribe to, no per-tool plumbing.",
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

const AGENT_CODE = `from google.adk.agents import LlmAgent
from google.adk.tools.mcp_tool import MCPToolset
from google.adk.tools.mcp_tool.mcp_session_manager import StreamableHTTPConnectionParams

toolset = MCPToolset(
    connection_params=StreamableHTTPConnectionParams(
        url=f"https://gateway.mewcp.com/{MASKED_ID}/mcp",
        headers={"Authorization": f"Bearer {MEWCP_KEY}"},
    )
)

agent = LlmAgent(
    model="gemini-2.0-flash",
    name="web_agent",
    instruction="You are a helpful web research assistant.",
    tools=[toolset],
)`;

const PY_TOKEN_RE =
  /(?<str>f?"(?:[^"\\]|\\.)*")|(?<kw>\b(?:from|import)\b)|(?<cls>\b[A-Z][A-Za-z0-9]*\b)|(?<kwarg>\b[a-z_][a-z0-9_]*(?=\s*=))/g;

const PY_TOKEN_STYLES: Record<string, string> = {
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
  return (
    <div className="-mx-4 lg:-mx-8">
      <Head>
        <title>MewCP — Give your agents access to the real world</title>
        <meta
          name="description"
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
            <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
              <span className="size-2.5 rounded-full bg-white/20" />
              <span className="size-2.5 rounded-full bg-white/20" />
              <span className="size-2.5 rounded-full bg-white/20" />
              <span className="ml-2 text-xs text-white/40">agent.py</span>
            </div>
            <pre className="whitespace-pre-wrap break-words px-5 py-5 text-[13px] leading-relaxed text-zinc-300">
              <code>{highlightPython(AGENT_CODE)}</code>
            </pre>
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
