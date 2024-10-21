export interface Appointment {
  id: number;
  date: string;
  time: string;
  title: string;
  userName: string;
  email: string;
}

export interface AppointmentScheduleProps {
  appointments: Appointment[];
  setAppointments: React.Dispatch<React.SetStateAction<Appointment[]>>
}

export interface WeeklyCalendarProps {
  appointments: Appointment[];
  bookAppointment: (appointment: Appointment) => void;
}

export interface MenuItemsProp {
  id: number;
  name: string;
  label: string;
  description?: string;
  href?: string;
  icon?: React.ReactNode;
}

export type ActiveTabs = "schedule" | "view";

export interface NavbarProps {
  activeTab: ActiveTabs;
  setActiveTab: React.Dispatch<React.SetStateAction<ActiveTabs>>;
  menuItems: MenuItemsProp[];
}

export type ColorVariantTypes = 'primary' | 'secondary' | 'tertiary'

export interface TabProps {
  children: React.ReactNode;
  title?: string;
  color?: ColorVariantTypes;
}

export interface TabTitleProps {
  isActive: boolean;
  title: string;
  onSelect: () => void;
  colorVariant: ColorVariantTypes;
}

export interface AppointmentCardProps {
  appointment: Appointment;
  onEditClick: (appointment: Appointment) => void;
  onDeleteClick: (id: number) => void;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: ({ title, userName, email }: Appointment) => void;
  selectedDate: string;
  selectedTime: string
}

export interface EditAppointmentProps {
  onClose: () => void;
  appointment: Appointment;
  onSave: (updatedDetails: Appointment) => void;
  date: string,
  time: string,
}

export interface CalendarContextType {
  selectedDate: string;
  setSelectedDate: (date: string) => void;
  selectedTime: string;
  setSelectedTime: (time: string) => void;
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
};

export interface NotificationProps {
  message: string | React.ReactNode;
  isVisible: boolean;
  onClose: () => void;
}
