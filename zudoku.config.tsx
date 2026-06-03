import type { ZudokuConfig } from "zudoku";

const config: ZudokuConfig = {
  site: {
    footer: {
      position: "center",
      social: [
        { icon: "github", href: "https://github.com/AStheTECH" },
        { icon: "x", href: "https://x.com/mewcp_ai" },
        { icon: "reddit", href: "https://www.reddit.com/user/mewcpai/" },
      ],
      copyright: `© ${new Date().getFullYear()} MewCP. All rights reserved.`,
    },
    title: "MewCP Docs",
    logo: {
      src: {
        light:
          "https://res.cloudinary.com/da3kyd9r4/image/upload/v1774472376/Mew_op50ya.svg",
        dark: "https://res.cloudinary.com/da3kyd9r4/image/upload/v1774472376/Mew_op50ya.svg",
      },
      alt: "MewCP",
      width: "90px",
      href: "https://mewcp.com",
    },
  },
  theme: {
    light: {
      background: "oklch(100% 0 none)",
      foreground: "oklch(14.7% 0.004 49.3)",
      card: "oklch(100% 0 none)",
      cardForeground: "oklch(14.7% 0.004 49.3)",
      popover: "oklch(100% 0 none)",
      popoverForeground: "oklch(14.7% 0.004 49.3)",
      primary: "oklch(70.5% 0.187 47.6)",
      primaryForeground: "oklch(98.5% 0.001 106)",
      secondary: "oklch(97% 0.001 106)",
      secondaryForeground: "oklch(21.6% 0.006 56)",
      muted: "oklch(97% 0.001 106)",
      mutedForeground: "oklch(55.3% 0.012 58.1)",
      accent: "oklch(97% 0.001 106)",
      accentForeground: "oklch(21.6% 0.006 56)",
      destructive: "oklch(63.7% 0.208 25.3)",
      destructiveForeground: "oklch(98.5% 0.001 106)",
      border: "oklch(92.3% 0.003 48.7)",
      input: "oklch(92.3% 0.003 48.7)",
      ring: "oklch(70.5% 0.187 47.6)",
    },
    dark: {
      background: "oklch(14.7% 0.004 49.3)",
      foreground: "oklch(98.5% 0.001 106)",
      card: "oklch(14.7% 0.004 49.3)",
      cardForeground: "oklch(98.5% 0.001 106)",
      popover: "oklch(14.7% 0.004 49.3)",
      popoverForeground: "oklch(98.5% 0.001 106)",
      primary: "oklch(64.5% 0.194 41.1)",
      primaryForeground: "oklch(98.5% 0.001 106)",
      secondary: "oklch(26.9% 0.006 34.3)",
      secondaryForeground: "oklch(98.5% 0.001 106)",
      muted: "oklch(26.9% 0.006 34.3)",
      mutedForeground: "oklch(71.6% 0.009 56.3)",
      accent: "oklch(26.9% 0.006 34.3)",
      accentForeground: "oklch(98.5% 0.001 106)",
      destructive: "oklch(57.7% 0.215 27.3)",
      destructiveForeground: "oklch(98.5% 0.001 106)",
      border: "oklch(26.9% 0.006 34.3)",
      input: "oklch(26.9% 0.006 34.3)",
      ring: "oklch(64.5% 0.194 41.1)",
    },
  },
  metadata: {
    title: "Official documentation for MewCP",
    description:
      "MewCP is a platform that allows you to connect to any LLM and agent, enabling you to build AI-powered applications with ease.",
    favicon: "/favicon.png",
  },
  search: {
    type: "pagefind",
  },
  navigation: [
    {
      type: "category",
      label: "Documentation",
      icon: "book-open",
      items: [
        "/mewcp/getting-started",
        {
          type: "category",
          label: "Connect",
          icon: "plug",
          items: [
            "/mewcp/connect/claude-desktop",
            "/mewcp/connect/vscode-cursor",
            "/mewcp/connect/codex",
            "/mewcp/connect/typescript",
            "/mewcp/connect/python",
          ],
        },
        {
          type: "category",
          label: "Connect Agents",
          icon: "bot",
          items: [
            "/mewcp/connect-agents/google-adk",
            "/mewcp/connect-agents/crewai",
            "/mewcp/connect-agents/langchain-python",
            "/mewcp/connect-agents/langchain-typescript",
            "/mewcp/connect-agents/openai-agents",
            "/mewcp/connect-agents/claude-sdk",
          ],
        },
        {
          type: "category",
          label: "Authentication",
          icon: "key",
          items: [
            "/mewcp/authentication/mewcp-key",
            "/mewcp/authentication/account-api-keys",
          ],
        },
        {
          type: "category",
          label: "Auth API Guides",
          icon: "shield",
          items: [
            "/mewcp/auth-api/oauth-integration",
            "/mewcp/auth-api/static-credentials",
          ],
        },
      ],
    },
    {
      type: "link",
      to: "/mewcp-auth",
      label: "MewCP Auth API",
      icon: "code",
    },
  ],
  redirects: [
    { from: "/", to: "/mewcp/getting-started" },
    { from: "/introduction", to: "/mewcp/getting-started" },
    { from: "/mewcp/mcp-api-keys", to: "/mewcp/authentication/mewcp-key" },
    { from: "/mewcp/account-api-keys", to: "/mewcp/authentication/account-api-keys" },
    { from: "/mewcp/authentication", to: "/mewcp/authentication/mewcp-key" },
  ],
  docs: {
    files: "pages/**/*.{md,mdx}",
    llms: {
      llmsTxt: true,
      llmsTxtFull: true,
    },
  },
  apis: [
    {
      type: "file",
      input: "./apis/mewcp-auth.yaml",
      path: "/mewcp-auth",
    },
  ],
};

export default config;
