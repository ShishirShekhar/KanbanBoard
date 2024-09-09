import { CSSProperties } from "react";
import { Button, Divider, Layout } from "antd";
import { Header, Content, Footer } from "antd/es/layout/layout";
import { CalendarOutlined } from "@ant-design/icons";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import { Task } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import styles from "./TaskCard.module.css";

const taskCardStyle: CSSProperties = {
  background: "white",
  flex: "none",
};

const headerStyle: CSSProperties = {
  background: "none",
  padding: 0,
  height: "fit-content",
  lineHeight: "0px",
};

const contentStyle: CSSProperties = {
  flex: "none",
};

const marginZeroStyle: CSSProperties = {
  margin: 0,
};

const footerStyle: CSSProperties = {
  background: "none",
  padding: 0,
};

const TaskCard = ({ task }: { task: Task }) => {
  return (
    <Layout style={taskCardStyle} className={styles.taskCard}>
      <Header style={headerStyle} className={styles.header}>
        <Button type="primary" size="small">
          {task.priority}
        </Button>
      </Header>

      <Content style={contentStyle} className={styles.content}>
        <Title level={4} style={marginZeroStyle}>
          {task.title}
        </Title>
        <Paragraph style={marginZeroStyle}>{task.description}</Paragraph>
      </Content>

      <Divider style={marginZeroStyle} />

      <Footer style={footerStyle} className={styles.footer}>
        <CalendarOutlined />
        <Paragraph style={marginZeroStyle}>{formatDate(task.dueDate)}</Paragraph>
      </Footer>
    </Layout>
  );
};

export default TaskCard;
