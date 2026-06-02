# MewCP Docs

Official documentation site for [MewCP](https://mewcp.com) — a managed MCP (Model Context Protocol) gateway.

Built with [Zudoku](https://zudoku.dev).

## Structure

```
pages/
  mewcp/              # Main documentation
    getting-started   # Tutorial
    connect/          # Client connection guides
    connect-agents/   # AI agent framework guides
    authentication/   # MewCP Key and Account API Keys
apis/
  mewcp-auth.yaml     # OpenAPI spec for the MewCP Auth API
```

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Search (pagefind) is indexed at build time. To preview with search working:

```bash
npm run build && npm run preview
```

## Adding content

- **Guides**: Add `.mdx` files under `pages/mewcp/`
- **API reference**: Edit `apis/mewcp-auth.yaml`
- **Navigation**: Update `zudoku.config.tsx`

## Tech

- [Zudoku](https://zudoku.dev) — docs framework
- [Pagefind](https://pagefind.app) — static search
- [OpenAPI 3.1](https://spec.openapis.org/oas/v3.1.0) — API reference spec
