import create, { State } from 'zustand';

interface ReminderStore extends State {
  reminders: string[];
  addReminder: (reminder: string) => void;
}

const useReminderStore = create<ReminderStore>((set) => ({
  reminders: [],
  addReminder: (reminder) => set((state) => ({ reminders: [...state.reminders, reminder] })),
}));

export default useReminderStore;