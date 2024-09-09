import { CSSProperties, FC } from "react";
import {
  Divider,
  Dropdown,
  Flex,
  Layout,
  MenuProps,
  Space,
} from "antd";
import { Header, Content, Footer } from "antd/es/layout/layout";
import { CalendarOutlined, DownOutlined } from "@ant-design/icons";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import Tag from "@/components/ui/Tag/Tag";
import { Task } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import styles from "./TaskCard.module.css";

interface TaskCardProps {
  task: Task;
  onStatusChange: (taskId: string, newStatus: Task["status"]) => void;
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

const getMenuItems = (
  onStatusChange: (status: Task["status"]) => void
): MenuProps["items"] => [
  {
    key: "Todo",
    label: "Todo",
    onClick: () => onStatusChange("Todo"),
  },
  {
    key: "In Progress",
    label: "In Progress",
    onClick: () => onStatusChange("In Progress"),
  },
  {
    key: "Done",
    label: "Done",
    onClick: () => onStatusChange("Done"),
  },
];

const TaskCard: FC<TaskCardProps> = ({ task, onStatusChange }) => {
  const handleStatusChange = (newStatus: Task["status"]) => {
    onStatusChange(task.id, newStatus);
  };

  return (
    <Layout style={taskCardStyle} className={styles.taskCard}>
      <Header style={headerStyle} className={styles.header}>
        <Tag value={task.priority} />
      </Header>

      <Content style={contentStyle} className={styles.content}>
        <Flex justify="space-between">
          <Title level={4} style={marginZeroStyle}>
            {task.title}
          </Title>

          <Dropdown menu={{ items: getMenuItems(handleStatusChange) }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </Flex>
        <Paragraph style={marginZeroStyle}>{task.description}</Paragraph>
      </Content>

      <Divider style={marginZeroStyle} />

      <Footer style={footerStyle} className={styles.footer}>
        <CalendarOutlined />
        <Paragraph style={marginZeroStyle}>
          {formatDate(task.dueDate)}
        </Paragraph>
      </Footer>
    </Layout>
  );
};

export default TaskCard;
