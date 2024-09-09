export type BaseTask = {
    title: string;
    description: string;
    status: "Todo" | "In Progress" | "Done";
    priority: "High" | "Medium" | "Low";
    dueDate: string;
};

export type Task = BaseTask & {
    id: string;
};
