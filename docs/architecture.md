# Architecture

This project uses a frontend-first MASP architecture. The first goal is to make the system visible and understandable before adding real model calls.

## High-level flow

```text
User
 ↓
Next.js UI
 ↓
Task action or API route
 ↓
Orchestrator
 ↓
Agents
 ↓
Tools and memory
 ↓
Run logs and workflow state
 ↓
UI
```

## Layers

### UI layer

The UI layer renders tasks, agents, workflow steps, and logs. It should not contain orchestration logic.

Current files:

- `src/app/page.tsx`
- `src/components/AgentCard.tsx`
- `src/components/WorkflowTimeline.tsx`

### Domain layer

The domain layer defines shared types and mock data.

Current files:

- `src/lib/types.ts`
- `src/lib/mock-data.ts`

### Server orchestration layer

The server layer coordinates agent execution. In the first version it returns mock workflow data. Later it can call real agents, tools, model providers, queues, and databases.

Current file:

- `src/server/orchestrator.ts`

## Why mock-first?

Mock-first development keeps the learning loop short. A frontend developer can build and inspect the architecture without waiting for model access, backend persistence, billing setup, or deployment infrastructure.

## Evolution path

1. Static UI with mock domain data.
2. API routes for task creation and task runs.
3. In-memory orchestrator with event logs.
4. Database persistence for tasks and runs.
5. Real LLM calls behind agent interfaces.
6. Tool permissions and audit trails.
7. Evaluation and observability.
