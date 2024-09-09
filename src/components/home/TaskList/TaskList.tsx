import { CSSProperties, Dispatch, FC, SetStateAction } from "react";
import { Layout, notification } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import TaskCard from "../TaskCard/TaskCard";
import { Task } from "@/lib/types";
import styles from "./TaskList.module.css";
import { updateTask } from "@/lib/firebase/functions/tasks";

interface TaskListProps {
  type: "Todo" | "In Progress" | "Done";
  tasks: Task[];
  setTasks: Dispatch<SetStateAction<Task[]>>;
}

const layoutStyle: CSSProperties = {
  flex: "none",
  height: "fit-content",
};

const titleStyle: CSSProperties = {
  margin: 0,
  color: "white",
};

const contentStyle: CSSProperties = {
  flex: "none",
  minHeight: "150px",
};

const TaskList: FC<TaskListProps> = ({ type, tasks, setTasks }) => {
  const backgroundColor =
    type === "Todo"
      ? "var(--violet)"
      : type === "In Progress"
      ? "var(--yellow)"
      : "var(--green)";
  const textColor = type === "In Progress" ? "black" : "white";

  const headerStyle: CSSProperties = {
    background: backgroundColor,
    color: textColor,
  };

  const handleStatusChange = async (
    taskId: string,
    newStatus: Task["status"]
  ) => {
    const taskToUpdate = tasks.find((task) => task.id === taskId);

    if (taskToUpdate) {
      try {
        // Update the task status in Firestore
        await updateTask({ ...taskToUpdate, status: newStatus });

        // Update the task list in the component state
        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task.id === taskId ? { ...task, status: newStatus } : task
          )
        );

        notification.success({
          message: "Task updated",
          description: "The task status has been updated successfully.",
        });
      } catch (error) {
        notification.error({
          message: "Error updating task",
          description:
            "An error occurred while updating the task. Please try again later.",
        });
      }
    }
  };

  return (
    <Layout style={layoutStyle} className={styles.toDo}>
      <Header style={headerStyle} className={styles.header}>
        <Title level={3} style={{ ...titleStyle, color: headerStyle.color }}>
          {type.toUpperCase()}
        </Title>
      </Header>

      <Content style={contentStyle} className={styles.content}>
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onStatusChange={handleStatusChange}
          />
        ))}
      </Content>
    </Layout>
  );
};

export default TaskList;
