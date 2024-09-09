"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import { notification, Spin } from "antd";
import { Task } from "@/lib/types";
import { getAllTasks } from "@/lib/firebase/functions/tasks";
import CreateTaskBar from "@/components/home/CreateTaskBar/CreateTaskBar";
import TaskList from "@/components/home/TaskList/TaskList";
import TaskModal from "@/components/ui/TaskModal/TaskModal";
import styles from "./Home.module.css";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const tasks = await getAllTasks();
        setTasks(tasks);
      } catch (error) {
        notification.error({
          message: "Error fetching tasks",
          description:
            "An error occurred while fetching tasks. Please try again later.",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  // Memoize task lists to improve performance
  const { todoTasks, inProgressTasks, doneTasks } = useMemo(() => {
    return {
      todoTasks: tasks.filter((task) => task.status === "Todo"),
      inProgressTasks: tasks.filter((task) => task.status === "In Progress"),
      doneTasks: tasks.filter((task) => task.status === "Done"),
    };
  }, [tasks]);

  // Open the modal
  const openTaskModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  // Render loading state with a spinner
  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <Spin
          size="large"
          fullscreen={true}
          tip="Loading tasks, please wait..."
        />
      </div>
    );
  }

  return (
    <main className={styles.home}>
      <TaskModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        setTasks={setTasks}
      />
      <CreateTaskBar showModal={openTaskModal} />

      <div className={styles.container} aria-labelledby="task-lists">
        <section aria-label="Todo Tasks">
          <TaskList type="Todo" tasks={todoTasks} setTasks={setTasks} />
        </section>

        <section aria-label="In Progress Tasks">
          <TaskList type="In Progress" tasks={inProgressTasks} setTasks={setTasks} />
        </section>

        <section aria-label="Completed Tasks">
          <TaskList type="Done" tasks={doneTasks} setTasks={setTasks} />
        </section>
      </div>
    </main>
  );
}
