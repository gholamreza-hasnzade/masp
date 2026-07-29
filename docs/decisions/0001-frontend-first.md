# 0001: Start MASP with a frontend-first architecture

## Status

Accepted

## Context

The first goal of this repository is learning MASP architecture as a frontend developer. Starting with real model providers, queues, and databases would add operational complexity before the core concepts are clear.

## Decision

Start with a Next.js App Router project, TypeScript domain models, mock agents, mock workflow state, and visible run logs.

## Consequences

- The project is immediately understandable from the UI.
- The MASP vocabulary is represented in code from the beginning.
- Real model providers can be added later behind existing agent and orchestrator boundaries.
- Early implementation is not production-ready, but it is optimized for learning.
