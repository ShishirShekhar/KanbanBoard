import { Button, Flex } from "antd";
import Title from "antd/es/typography/Title";
import styles from "./CreateTaskBar.module.css";
import { CSSProperties, FC } from "react";

const buttonStyle: CSSProperties = {
  background: "var(--violet)",
};

const CreateTaskBar: FC = () => {
  return (
    <Flex
      justify="space-between"
      align="center"
      gap="small"
      wrap
      className={styles.container}
    >
      <Title level={2} style={{ margin: 0 }}>
        Desktop & Mobile Application
      </Title>

      <Button type="primary" size="large" style={buttonStyle}>
        Create Task
      </Button>
    </Flex>
  );
};

export default CreateTaskBar;
