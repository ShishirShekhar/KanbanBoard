import { useMemo } from "react";
import CreateTaskBar from "@/components/home/CreateTaskBar/CreateTaskBar";
import { tasks } from "@/lib/contants";
import styles from "./Home.module.css";
import TaskList from "@/components/home/TaskList/TaskList";

export default function Home() {
  const todoTasks = useMemo(
    () => tasks.filter((task) => task.status === "Todo"),
    [tasks]
  );
  const inProgressTasks = useMemo(
    () => tasks.filter((task) => task.status === "In Progress"),
    [tasks]
  );
  const doneTasks = useMemo(
    () => tasks.filter((task) => task.status === "Done"),
    [tasks]
  );

  return (
    <main className={styles.home}>
      <CreateTaskBar />

      <div className={styles.container} aria-labelledby="task-lists">
        <section aria-label="Todo Tasks">
          <TaskList type="Todo" tasks={todoTasks} />
        </section>

        <section aria-label="In Progress Tasks">
          <TaskList type="In Progress" tasks={inProgressTasks} />
        </section>

        <section aria-label="Completed Tasks">
          <TaskList type="Done" tasks={doneTasks} />
        </section>
      </div>
    </main>
  );
}
