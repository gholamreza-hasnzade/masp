# MASP Learning Lab

MASP Learning Lab is a frontend-first Next.js starter for learning Multi-Agent System Platform architecture.

The project intentionally starts with mock data and visible UI states before connecting to real model providers. This helps frontend developers understand how agents, orchestration, workflow state, memory, and logs fit together without being blocked by API keys, cost, or backend infrastructure.

## Learning goals

- Understand the responsibilities of agents, tools, memory, and an orchestrator.
- Model a multi-agent workflow as visible frontend state.
- Keep UI, domain types, mock data, and server orchestration separated.
- Prepare a clean path from mock agents to real LLM-backed agents.

## Current scope

This first version includes:

- A Next.js App Router skeleton.
- A landing dashboard that visualizes one learning task.
- Mock agents for planning, research, writing, and review.
- A workflow timeline for agent execution state.
- Run logs that make the agent lifecycle observable.
- Architecture documentation in `docs/`.

## Suggested next steps

1. Install dependencies when registry access is available.
2. Run the development server.
3. Add routes for tasks, agents, runs, and memory.
4. Replace mock orchestration with a real API route.
5. Connect a model provider only after the workflow concepts are clear.

## Commands

```bash
npm install
npm run dev
npm run typecheck
npm run build
```

> Note: dependency installation could not be verified in this environment because npm registry access returned `403 Forbidden`.
