import { CSSProperties, FC } from "react";
import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import TaskCard from "../TaskCard/TaskCard";
import { Task } from "@/lib/types";
import styles from "./TaskList.module.css";

interface taskListProps {
  type: "Todo" | "In Progress" | "Done";
  tasks: Task[];
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

const TaskList: FC<taskListProps> = ({ type, tasks }) => {
  const background =
    type === "Todo"
      ? "var(--violet)"
      : type === "In Progress"
      ? "var(--yellow)"
      : "var(--green)";
  const color = type === "In Progress" ? "black" : "white";

  const headerStyle: CSSProperties = {
    background: background,
    color: color,
  };

  return (
    <Layout style={layoutStyle} className={styles.toDo}>
      <Header style={headerStyle} className={styles.header}>
        <Title level={3} style={{ ...titleStyle, color: headerStyle.color }}>
          {type.toUpperCase()}
        </Title>
      </Header>

      <Content style={contentStyle} className={styles.content}>
        {tasks.map((task, index) => (
          <TaskCard
            key={index}
            priority={task.priority}
            title={task.title}
            description={task.description}
            dueDate={task.dueDate}
          />
        ))}
      </Content>
    </Layout>
  );
};

export default TaskList;
