import { CSSProperties, FC } from "react";
import { Button, Divider, Layout } from "antd";
import { Header, Content, Footer } from "antd/es/layout/layout";
import { CalendarOutlined } from "@ant-design/icons";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import styles from "./TaskCard.module.css";

interface TaskCardProps {
  priority: "High" | "Medium" | "Low";
  title: string;
  description: string;
  dueDate: string;
}

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

const TaskCard: FC<TaskCardProps> = ({
  priority,
  title,
  description,
  dueDate,
}) => {
  return (
    <Layout style={taskCardStyle} className={styles.taskCard}>
      <Header style={headerStyle} className={styles.header}>
        <Button type="primary" size="small">
          {priority}
        </Button>
      </Header>

      <Content style={contentStyle} className={styles.content}>
        <Title level={4} style={marginZeroStyle}>
          {title}
        </Title>
        <Paragraph style={marginZeroStyle}>{description}</Paragraph>
      </Content>

      <Divider style={marginZeroStyle} />

      <Footer style={footerStyle} className={styles.footer}>
        <CalendarOutlined />
        <Paragraph style={marginZeroStyle}>{dueDate}</Paragraph>
      </Footer>
    </Layout>
  );
};

export default TaskCard;
