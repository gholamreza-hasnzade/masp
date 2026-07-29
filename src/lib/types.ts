export type AgentStatus = "idle" | "running" | "completed" | "failed";

export type Agent = {
  id: string;
  name: string;
  role: string;
  description: string;
  tools: string[];
};

export type TaskStatus =
  | "draft"
  | "queued"
  | "planning"
  | "running"
  | "reviewing"
  | "completed"
  | "failed";

export type Task = {
  id: string;
  title: string;
  input: string;
  status: TaskStatus;
  createdAt: string;
};

export type WorkflowStep = {
  id: string;
  agentId: string;
  label: string;
  status: AgentStatus;
  output?: string;
};

export type RunLog = {
  id: string;
  timestamp: string;
  message: string;
};
