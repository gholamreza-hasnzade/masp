import type { Agent, RunLog, Task, WorkflowStep } from "./types";

export const agents: Agent[] = [
  {
    id: "planner",
    name: "Planner Agent",
    role: "Breaks goals into an execution plan",
    description: "تحلیل درخواست کاربر و تبدیل آن به گام‌های قابل اجرا.",
    tools: ["task graph", "short-term memory"],
  },
  {
    id: "researcher",
    name: "Research Agent",
    role: "Collects context for the task",
    description: "جمع‌آوری زمینه، فرضیات و داده‌های لازم برای اجرای بهتر task.",
    tools: ["mock search", "document notes"],
  },
  {
    id: "writer",
    name: "Writer Agent",
    role: "Creates the first useful draft",
    description: "ساخت خروجی اولیه بر اساس plan و research.",
    tools: ["draft builder"],
  },
  {
    id: "reviewer",
    name: "Reviewer Agent",
    role: "Reviews quality and gaps",
    description: "بازبینی خروجی و مشخص کردن ایرادها یا قدم بعدی.",
    tools: ["quality checklist"],
  },
];

export const tasks: Task[] = [
  {
    id: "task-001",
    title: "Design a SaaS landing page flow",
    input: "برای یک SaaS کوچک، ساختار landing page پیشنهاد بده.",
    status: "running",
    createdAt: "2026-07-29T11:30:00.000Z",
  },
];

export const workflow: WorkflowStep[] = [
  {
    id: "step-1",
    agentId: "planner",
    label: "Understand goal and create plan",
    status: "completed",
    output: "Define audience, promise, sections, CTA, and review criteria.",
  },
  {
    id: "step-2",
    agentId: "researcher",
    label: "Collect product and market context",
    status: "completed",
    output: "Focus on pain points, trust signals, and onboarding friction.",
  },
  {
    id: "step-3",
    agentId: "writer",
    label: "Draft content and UI sections",
    status: "running",
  },
  {
    id: "step-4",
    agentId: "reviewer",
    label: "Review final output",
    status: "idle",
  },
];

export const runLogs: RunLog[] = [
  { id: "log-1", timestamp: "11:30", message: "Task created by user." },
  { id: "log-2", timestamp: "11:31", message: "Planner Agent completed the first plan." },
  { id: "log-3", timestamp: "11:32", message: "Research Agent collected mock context." },
  { id: "log-4", timestamp: "11:33", message: "Writer Agent is generating a draft." },
];
