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
      foreground: "oklch(12.9% 0.027 262)",
      card: "oklch(100% 0 none)",
      cardForeground: "oklch(12.9% 0.027 262)",
      popover: "oklch(100% 0 none)",
      popoverForeground: "oklch(12.9% 0.027 262)",
      primary: "oklch(54.1% 0.247 293)",
      primaryForeground: "oklch(98.4% 0.002 248)",
      secondary: "oklch(96.7% 0.003 265)",
      secondaryForeground: "oklch(21% 0.032 265)",
      muted: "oklch(96.7% 0.003 265)",
      mutedForeground: "oklch(55.1% 0.023 264)",
      accent: "oklch(96.7% 0.003 265)",
      accentForeground: "oklch(21% 0.032 265)",
      destructive: "oklch(63.7% 0.208 25.3)",
      destructiveForeground: "oklch(98.4% 0.002 248)",
      border: "oklch(92.8% 0.006 265)",
      input: "oklch(92.8% 0.006 265)",
      ring: "oklch(54.1% 0.247 293)",
      radius: "0rem",
    },
    dark: {
      background: "oklch(12.9% 0.027 262)",
      foreground: "oklch(98.4% 0.002 248)",
      card: "oklch(12.9% 0.027 262)",
      cardForeground: "oklch(98.4% 0.002 248)",
      popover: "oklch(12.9% 0.027 262)",
      popoverForeground: "oklch(98.4% 0.002 248)",
      primary: "oklch(49.1% 0.241 293)",
      primaryForeground: "oklch(98.4% 0.002 248)",
      secondary: "oklch(27.8% 0.03 257)",
      secondaryForeground: "oklch(98.4% 0.002 248)",
      muted: "oklch(27.8% 0.03 257)",
      mutedForeground: "oklch(71.4% 0.019 261)",
      accent: "oklch(27.8% 0.03 257)",
      accentForeground: "oklch(98.4% 0.002 248)",
      destructive: "oklch(39.6% 0.133 25.7)",
      destructiveForeground: "oklch(98.4% 0.002 248)",
      border: "oklch(27.8% 0.03 257)",
      input: "oklch(27.8% 0.03 257)",
      ring: "oklch(49.1% 0.241 293)",
      radius: "0rem",
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
