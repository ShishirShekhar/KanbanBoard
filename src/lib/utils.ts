import { Timestamp } from "firebase/firestore";

export const formatDate = (date: Timestamp | Date | string): string => {
    let parsedDate: Date;

    if (date instanceof Timestamp) {
        parsedDate = date.toDate();
    } else if (typeof date === "string") {
        parsedDate = new Date(date);
    } else {
        parsedDate = date;
    }

    const day = String(parsedDate.getDate()).padStart(2, "0");
    const month = String(parsedDate.getMonth() + 1).padStart(2, "0");
    const year = String(parsedDate.getFullYear()).slice(-2);
    return `${day}/${month}/${year}`;
};
