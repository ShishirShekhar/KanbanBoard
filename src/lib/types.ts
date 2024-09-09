export type BaseTask = {
    title: string;
    description: string;
    status: "Todo" | "In Progress" | "Done";
    priority: "High" | "Medium" | "Low";
    dueDate: Date;
};

export type Task = BaseTask & {
    id: string;
};
