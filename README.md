# Kanban Board

A Kanban Board application built with React and Firebase to help users manage tasks efficiently. This project showcases the use of React/Next.js, Firebase Firestore, TypeScript, and Ant Design.

## Objective

This project aims to provide a functional Kanban board where users can:

- Create, edit, delete, and move tasks between columns (TODO | IN PROGRESS | COMPLETED).
- Utilize Firebase Firestore for task storage.
- Optionally implement drag-and-drop functionality for task status changes.

## Features

- **Task Management:** Add, edit, and delete tasks.
- **Task Status:** Move tasks between different columns.
- **UI Design:** Follows the design principles from the provided Figma file.
- **Responsiveness:** Optimized for various screen sizes.
- **Error Handling:** Includes proper error handling mechanisms.

## Demo

You can view the live demo of the Kanban Board application [here](https://shishir-kanban.vercel.app/).

## Installation

To set up the project locally, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/ShishirShekhar/KanbanBoard.git
   cd KanbanBoard
   ```

2. **Install Dependencies**

   Install dependencies:

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**

   Create a `.env` file in the `kanban` directory with the following Firebase configuration:

   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
   NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
   NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your-recaptcha-site-key
   ```

## Usage

1. **Start the Client**

   ```bash
   npm run dev
   ```

2. **Access the Application**

   Open your browser and go to `http://localhost:3000` to view the application.

## Environment Variables

Make sure to set up the following environment variables in your `.env` file:

- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`
- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`

## Deployment

The application is deployed using Vercel. To deploy your own instance, follow these steps:

1. Push your changes to a GitHub repository.
2. Sign up for a Vercel account and connect it to your GitHub repository.
3. Configure environment variables in the Vercel dashboard.
4. Deploy your application.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## References

- [Firebase Firestore Documentation](https://firebase.google.com/docs/firestore/quickstart#web_4)
- [React DnD Documentation](https://react-dnd.github.io/react-dnd/docs/overview)
- [Ant Design Documentation](https://ant.design/docs/react/getting-started)

---
