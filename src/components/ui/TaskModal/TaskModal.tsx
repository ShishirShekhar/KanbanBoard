import { Dispatch, SetStateAction, useState } from "react";
import { Form, Input, Modal, notification, DatePicker, Select } from "antd";
import { Task } from "@/lib/types";
import { addTask } from "@/lib/firebase/functions/tasks";

interface TaskModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  setTasks: Dispatch<SetStateAction<Task[]>>;
}

const { Option } = Select;

const TaskModal = ({ open, setOpen, setTasks }: TaskModalProps) => {
  const [form] = Form.useForm();
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      setConfirmLoading(true);

      // Convert date picker value to Date object
      const newTask: Task = {
        ...values,
        dueDate: values.dueDate.toDate(),
      };

      // Add task to Firestore
      const addedTask = await addTask(newTask);
      setTasks((prev) => [...prev, addedTask]);

      form.resetFields();
      setOpen(false);

      notification.success({
        message: "Task Added",
        description: "The task has been successfully added!",
      });
    } catch (error) {
      notification.error({
        message: "Error",
        description: "There was an issue adding the task.",
      });
    } finally {
      setConfirmLoading(false);
    }
  };

  const handleCancel = () => {
    form.resetFields();
    setOpen(false);
  };

  return (
    <Modal
      title="Add Task"
      open={open}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
      okText="Add Task"
    >
      <Form
        form={form}
        name="taskForm"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        layout="vertical"
        initialValues={{
          status: "Todo",
          priority: "Low",
        }}
      >
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: "Please input the title!" }]}
        >
          <Input placeholder="Task Title" />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: "Please input the description!" }]}
        >
          <Input.TextArea placeholder="Task Description" />
        </Form.Item>

        <Form.Item
          label="Status"
          name="status"
          rules={[{ required: true, message: "Please select the status!" }]}
        >
          <Select placeholder="Select Status">
            <Option value="Todo">Todo</Option>
            <Option value="In Progress">In Progress</Option>
            <Option value="Done">Done</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Priority"
          name="priority"
          rules={[{ required: true, message: "Please select the priority!" }]}
        >
          <Select placeholder="Select Priority">
            <Option value="Low">Low</Option>
            <Option value="Medium">Medium</Option>
            <Option value="High">High</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Due Date"
          name="dueDate"
          rules={[{ required: true, message: "Please select the due date!" }]}
        >
          <DatePicker format="DD/MM/YYY" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default TaskModal;
