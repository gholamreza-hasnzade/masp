# Learning Roadmap

This roadmap teaches MASP architecture through a Next.js project.

## Phase 1: See the system

Build UI that displays agents, tasks, workflow steps, and logs.

Outcome: you can explain what exists in a MASP without connecting to a model.

## Phase 2: Model the domain

Define TypeScript types for agents, tasks, workflow steps, tools, memory entries, and run logs.

Outcome: you can describe MASP with stable contracts.

## Phase 3: Add orchestration

Create a simple orchestrator that runs mock agents in sequence.

Outcome: you understand how outputs move from one agent to another.

## Phase 4: Add API boundaries

Expose task and run operations through Next.js API routes or Server Actions.

Outcome: the UI stops depending directly on mock data.

## Phase 5: Add persistence

Store tasks, runs, logs, and memory entries in a database.

Outcome: runs become inspectable after refresh and across sessions.

## Phase 6: Connect real agents

Replace mock agent outputs with calls to a model provider.

Outcome: the platform becomes a real multi-agent application while preserving the same architecture.
