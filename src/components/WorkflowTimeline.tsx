import type { WorkflowStep } from "@/lib/types";

const statusLabel = {
  idle: "Idle",
  running: "Running",
  completed: "Completed",
  failed: "Failed",
};

export function WorkflowTimeline({ steps }: { steps: WorkflowStep[] }) {
  return (
    <ol className="timeline">
      {steps.map((step, index) => (
        <li key={step.id} className="card">
          <div className="split">
            <div>
              <p className="small">Step {index + 1}</p>
              <h3>{step.label}</h3>
              <p className="muted">Agent: {step.agentId}</p>
            </div>
            <span className={`status status-${step.status}`}>{statusLabel[step.status]}</span>
          </div>
          {step.output ? <p className="muted output">{step.output}</p> : null}
        </li>
      ))}
    </ol>
  );
}
