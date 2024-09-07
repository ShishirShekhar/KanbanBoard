export type Task = {
    status: "Todo" | "In Progress" | "Done";
    priority: "High" | "Medium" | "Low";
    title: string;
    description: string;
    dueDate: string;
};