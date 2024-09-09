import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { Modal, notification } from "antd";
import { BaseTask, Task } from "@/lib/types";
import { addTask } from "@/lib/firebase/functions/tasks";
import styles from "./TaskModal.module.css";

interface taskModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  setTasks: Dispatch<SetStateAction<Task[]>>;
}

const TaskModal = ({ open, setOpen, setTasks }: taskModalProps) => {
  const [inputData, setInputData] = useState<BaseTask>({
    title: "",
    description: "",
    status: "Todo",
    priority: "Low",
    dueDate: new Date(),
  });
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "dueDate") {
      setInputData((prev) => ({
        ...prev,
        dueDate: new Date(value),
      }));
    } else {
      setInputData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validateForm = () => {
    return inputData.title.trim() !== "" && inputData.description.trim() !== "";
  };

  const handleOk = async () => {
    if (!validateForm()) {
      notification.warning({
        message: "Validation Error",
        description: "Please fill in all the required fields.",
      });
      return;
    }

    try {
      setConfirmLoading(true);

      // Add task to Firestore, and keep dueDate as a Date object
      const newTask: Task = await addTask(inputData);
      setTasks((prev: Task[]) => [...prev, newTask]);

      setInputData({
        title: "",
        description: "",
        status: "Todo",
        priority: "Low",
        dueDate: new Date(),
      });
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
    setInputData({
      title: "",
      description: "",
      status: "Todo",
      priority: "Low",
      dueDate: new Date(),
    });
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
      <form className={styles.form}>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Task Title"
          autoComplete="new-text"
          value={inputData.title}
          onChange={handleChange}
          required
        />

        <label htmlFor="description">Description: </label>
        <textarea
          id="description"
          name="description"
          value={inputData.description}
          onChange={handleChange}
          required
        />

        <label htmlFor="status">Status: </label>
        <select
          id="status"
          name="status"
          value={inputData.status}
          onChange={handleChange}
          required
        >
          <option value="Todo">Todo</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>

        <label htmlFor="priority">Priority: </label>
        <select
          id="priority"
          name="priority"
          value={inputData.priority}
          onChange={handleChange}
          required
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <label htmlFor="dueDate">Due Date: </label>
        <input
          type="date"
          id="dueDate"
          name="dueDate"
          value={inputData.dueDate.toISOString().split("T")[0]}
          onChange={handleChange}
          required
        />
      </form>
    </Modal>
  );
};

export default TaskModal;
