const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const getCurrentWeekDates = (startOfWeek: Date): string[] => {
  const currentDate = startOfWeek;
  const currentDay = currentDate.getDay();
  const weekStart = new Date(currentDate);
  weekStart.setDate(currentDate.getDate() - currentDay + 1);

  const weekDates: string[] = [];
  for (let i = 0; i < 7; i++) {
    const day = new Date(weekStart);
    day.setDate(weekStart.getDate() + i);
    weekDates.push(formatDate(day));
  }

  return weekDates;
};

export const generateTimeSlots = (): string[] => {
  const times = [];
  for (let hour = 9; hour <= 17; hour++) {
    times.push(`${hour}:00`);
    times.push(`${hour}:30`);
  }
  return times;
};
