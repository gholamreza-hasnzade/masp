import { AgentCard } from "@/components/AgentCard";
import { WorkflowTimeline } from "@/components/WorkflowTimeline";
import { agents, runLogs, tasks, workflow } from "@/lib/mock-data";

export default function Home() {
  const task = tasks[0];

  return (
    <main className="shell" dir="ltr">
      <section className="hero">
        <p className="heroKicker">MASP Learning Lab</p>
        <h1>Learn multi-agent architecture through a frontend-first Next.js project.</h1>
        <p>
          This starter turns MASP concepts into visible UI: agents, workflow steps, task state, and run logs.
        </p>
      </section>

      <section className="twoColumn">
        <article className="card largeCard">
          <p className="eyebrow">Current learning task</p>
          <h2>{task.title}</h2>
          <p className="prompt">{task.input}</p>
          <p className="small">Status: {task.status}</p>
        </article>

        <article className="card largeCard">
          <p className="eyebrow">Run logs</p>
          <ul className="logs">
            {runLogs.map((log) => (
              <li key={log.id}>
                <strong>{log.timestamp}</strong>
                <span>{log.message}</span>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="section">
        <h2>Agent workflow</h2>
        <WorkflowTimeline steps={workflow} />
      </section>

      <section className="section">
        <h2>Agents</h2>
        <div className="grid">
          {agents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      </section>
    </main>
  );
}
