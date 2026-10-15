# MewCP Docs

This repo is the source for the [MewCP](https://mewcp.com) documentation site.

📖 **Read the docs:** [docs.mewcp.com](https://docs.mewcp.com)

MewCP is a managed MCP (Model Context Protocol) gateway that connects any LLM or agent to the tools and services it needs, with auth, credentials, usage controls, and team access handled for you.

## Contributing

Found something wrong, unclear, or missing? Contributions are welcome.

- **Small fixes** (typos, broken links, unclear wording): edit the relevant `.mdx` file directly on GitHub and open a pull request.
- **Bigger changes** (new guides, restructuring, new integrations): please [open an issue](https://github.com/AStheTECH/mewcp-docs/issues) first to discuss the change before writing it up.
- **Product bugs or questions** that aren't about the docs themselves: contact us at [contact@mewcp.com](mailto:contact@mewcp.com) instead of opening a docs issue.

## Repo structure

```
pages/
  mewcp/
    getting-started       # Tutorial: first MCP tool call in ~5 minutes
    connect/               # Client connection guides (Claude Desktop, VS Code, Cursor, Codex, TS, Python)
    connect-agents/        # Agent framework guides (Google ADK, CrewAI, LangChain, OpenAI Agents, Claude SDK)
    authentication/        # API Key and Account API Keys
    auth-api/               # OAuth integration and static credentials guides
apis/
  mewcp-auth.yaml          # OpenAPI spec powering the MewCP Auth API reference
zudoku.config.tsx          # Navigation, site metadata, theme, redirects
```

Guides are plain Markdown/MDX with frontmatter:

```mdx
---
title: Page Title
description: One sentence shown in search results and link previews.
---

Content goes here.
```

Adding a new guide means creating the `.mdx` file under `pages/mewcp/` and adding it to the relevant section in `zudoku.config.tsx`'s `navigation` array.

## Running locally

This site is built with [Zudoku](https://zudoku.dev). To preview changes before opening a PR:

```bash
npm install
npm run dev
```

To build and preview the production output (needed to test search, since [Pagefind](https://pagefind.app) indexes at build time):

```bash
npm run build
npm run preview
```

## License

See [LICENSE.md](LICENSE.md).
