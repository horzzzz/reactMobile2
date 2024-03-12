import  {create, SetState } from 'zustand';

interface ReminderStore {
  reminders: string[];
  addReminder: (reminder: string) => void;
}

const useReminderStore = create<ReminderStore>((set: SetState<ReminderStore>) => ({
  reminders: [],
  addReminder: (reminder) => set((state) => ({ reminders: [...state.reminders, reminder] })),
}));

export default useReminderStore;