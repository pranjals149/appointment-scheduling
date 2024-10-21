import { Appointment } from "../types";

export const initialAppointments: Appointment[] = [
  { id: 1, date: "2024-10-22", time: "10:30", title: "Team Meeting",  userName: 'Mr. X', email: 'x@abc.com' },
  { id: 2, date: "2024-10-21", time: "14:00", title: "Interview",  userName: 'Mr. X', email: 'x@abc.com' },
];

export const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const menuItems = [{
    id: 1,
    name: 'Schedule',
    label: 'schedule',
}, {
    id: 2,
    name: 'View booked appointments',
    label: 'view'
}]