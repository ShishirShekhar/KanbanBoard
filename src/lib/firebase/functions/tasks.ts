import { v4 as uuidv4 } from "uuid";
import { collection, doc, getDocs, setDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../Config";
import { BaseTask, Task } from "@/lib/types";

// Fetch all tasks
export async function getAllTasks(): Promise<Task[]> {
    try {
        const docSnap = await getDocs(collection(db, "tasks"));
        const tasks = docSnap.docs.map((doc) => doc.data() as Task);

        if (tasks.length === 0) {
            return [];
        }
        return tasks;
    } catch (error) {
        console.error("Error getting tasks: ", error);
        throw new Error("Error getting tasks.");
    }
}

// Add a new task
export async function addTask(task: BaseTask): Promise<void> {
    try {
        const docRef = doc(db, "tasks", uuidv4());
        await setDoc(docRef, task);
    } catch (error) {
        console.error("Error adding task: ", error);
        throw new Error("Error adding task.");
    }
}

// Update an existing task
export async function updateTask(task: Task): Promise<void> {
    try {
        const taskRef = doc(db, "tasks", task.id);
        await updateDoc(taskRef, task);
    } catch (error) {
        console.error("Error updating task: ", error);
        throw new Error("Error updating task.");
    }
}

// Delete a task
export async function deleteTask(taskId: string): Promise<void> {
    try {
        const taskRef = doc(db, "tasks", taskId);
        await deleteDoc(taskRef);
    } catch (error) {
        console.error("Error deleting task: ", error);
        throw new Error("Error deleting task.");
    }
}
