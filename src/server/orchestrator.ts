import { agents, workflow } from "@/lib/mock-data";
import type { WorkflowStep } from "@/lib/types";

export type OrchestratedRun = {
  summary: string;
  steps: WorkflowStep[];
};

export async function runLearningTask(input: string): Promise<OrchestratedRun> {
  const agentNames = agents.map((agent) => agent.name).join(" → ");

  return {
    summary: `A learning-only MASP run for: ${input}. Flow: ${agentNames}.`,
    steps: workflow,
  };
}
