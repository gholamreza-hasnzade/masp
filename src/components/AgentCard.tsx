import type { Agent } from "@/lib/types";

export function AgentCard({ agent }: { agent: Agent }) {
  return (
    <article className="card">
      <p className="eyebrow">{agent.role}</p>
      <h3>{agent.name}</h3>
      <p className="muted">{agent.description}</p>
      <div className="tagRow">
        {agent.tools.map((tool) => (
          <span key={tool} className="tag">
            {tool}
          </span>
        ))}
      </div>
    </article>
  );
}
