# MASP Concepts

MASP stands for Multi-Agent System Platform in this learning project. It describes an application architecture where multiple agents collaborate to complete a user task.

## Agent

An agent is a focused worker with a role, instructions, tools, and a predictable input/output boundary. Agents should not own the whole system. They should own one responsibility.

Example agents in this project:

- Planner Agent: turns a user request into a plan.
- Research Agent: gathers context for the plan.
- Writer Agent: creates a draft output.
- Reviewer Agent: checks quality and gaps.

## Orchestrator

The orchestrator coordinates agents. It decides execution order, passes outputs between agents, updates run state, and handles failures or retries.

In a learning-first implementation, the orchestrator can be a simple function. Later it can become a workflow engine, queue consumer, or durable state machine.

## Tool

A tool lets an agent do work outside plain text generation. Tools can search, read files, query a database, call an API, or create a document.

Tools should be isolated from agents so they are easier to test and permission.

## Memory

Memory stores useful context. It can be short-term, long-term, or task-specific.

For this project, memory should start as mock data or local persistence. A database can be added after the core workflow is understandable.

## Run log

A run log is an observable event stream for agent execution. Logs help the user understand what happened, which agent acted, and where failures occurred.
