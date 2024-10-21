# Appointment Scheduling application

### How to run this application locally
1. Clone this repository - `git clone https://github.com/pranjals149/appointment-scheduling.git`
2. Open the repo and install required dependencies - `npm i`
3. Now run the application - `npm start`

### Technologies used
1. Frontend: React.js and Typescript
2. Styling: SCSS
3. State Management: React Context API

### Application architecture
The app is structured as a modular and reusable React project using functional components, SCSS for styling, and React Context for state management. Below is an overview of the key components and structure.

#### Key Components
1. AppointmentsSchedule: Container component that calls the weekly calendar component inside it with necessary props.
2. Tabs: Generic and reusable component that handles tab navigation for different sections like booking and viewing appointments.
3. Modal: Modal component that is used for scheduling appointments.
4. EditAppointmentForm: Modal component for editing the booked appointments.
5. Notification: Provides feedback to the user with pop-up notifications when actions like booking or editing are performed.
6. WeeklyCalendar: Displays the weekly calendar grid and time slots for booking appointments. It has the optons to goto the next week or previous week. Previous week will be disabled if the calendar is on current week.
7. AppointmentsList: Renders all booked appointments in a card format.
#### Context
CalendarContext: Manages the date, time, title, username, and email across the application. This context ensures that the data is available globally in the app without prop drilling.

#### Styling
SCSS Modules: Modular SCSS files (calendar.scss, modal.scss, notification.scss, etc.) are used to apply responsive and reusable styles across components. Media queries are used to handle responsiveness.

### Design decision
1. Component Reusability: Components like the Tabs and Notification are designed to be highly reusable. These components can be used in any manner or format.
2. Responsive Layout: The app employs a grid layout for displaying appointments and the weekly calendar, ensuring that the design works seamlessly on various screen sizes.
3. State Management: Used React Context API to manage the details of the appointmentt, keeping the architecture simple and easy to follow.

### Important algorithms

#### Appointment Management
1. Add Appointment: When a user books an appointment, the new appointment object (containing date, time, title, userName, and email) is added to the state. A notification is triggered to inform the user of the success.
2. Edit Appointment: The modal is pre-filled with the existing appointment data, allowing users to modify any field. On submission, the appointment details are updated in the state.
3. Delete Appointment: Upon user confirmation, the specific appointment is removed from the state, and a notification is triggered.

### Screen recording

https://github.com/user-attachments/assets/8d095c54-87ab-4562-a364-1942705fb76e

#### Deployed URL : https://schedule-appointments.netlify.app/
