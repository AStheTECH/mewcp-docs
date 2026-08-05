import type { ZudokuConfig } from "zudoku";
import { Home } from "./src/Home";

const config: ZudokuConfig = {
  site: {
    footer: {
      position: "center",
      columns: [
        {
          title: "Have a question?",
          links: [
            {
              label:
                "✉ Contact us - our dev team will reach out as soon as possible",
              href: "mailto:contact@asthetech.com",
            },
          ],
        },
      ],
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
          "https://res.cloudinary.com/da3kyd9r4/image/upload/f_auto,q_auto/v1774472375/MewCP_stbj4u.svg",
        dark: "https://res.cloudinary.com/da3kyd9r4/image/upload/f_auto,q_auto/v1785945274/mewcp-logo-o_daomec.svg",
      },
      alt: "MewCP",
      width: "66px",
      href: "https://docs.mewcp.com/",
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
      primary: "oklch(65.3% 0.151 60.2)",
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
      ring: "oklch(65.3% 0.151 60.2)",
      radius: "0px",
    },
    dark: {
      background: "oklch(14.7% 0.004 49.3)",
      foreground: "oklch(98.5% 0.001 106)",
      card: "oklch(14.7% 0.004 49.3)",
      cardForeground: "oklch(98.5% 0.001 106)",
      popover: "oklch(14.7% 0.004 49.3)",
      popoverForeground: "oklch(98.5% 0.001 106)",
      primary: "oklch(65.3% 0.151 60.2)",
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
      ring: "oklch(65.3% 0.151 60.2)",
      radius: "0px",
    },
  },
  metadata: {
    title: "Official documentation for MewCP",
    description:
      "MewCP is a platform that allows you to connect to any LLM and agent, enabling you to build AI-powered applications with ease.",
    favicon: "/favicon.png",
  },
  header: {
    navigation: [
      {
        label: "AstheTech",
        icon: "external-link",
        to: "https://github.com/asthetech",
        target: "_blank",
      },
      {
        label: "Contact Us",
        icon: "mail",
        to: "mailto:contact@asthetech.com",
        target: "_self",
      },
    ],
  },
  search: {
    type: "pagefind",
  },
  navigation: [
    {
      type: "custom-page",
      path: "/",
      element: <Home />,
      display: "hide",
    },
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
    { from: "/introduction", to: "/mewcp/getting-started" },
    { from: "/mewcp/mcp-api-keys", to: "/mewcp/authentication/mewcp-key" },
    {
      from: "/mewcp/account-api-keys",
      to: "/mewcp/authentication/account-api-keys",
    },
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
