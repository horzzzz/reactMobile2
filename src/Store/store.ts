import  {create, SetState } from 'zustand';


export interface IReminder {
  name: string;
  date: Date|string;
}

interface ReminderStore {
  reminders: IReminder[];
  addReminder: (reminder: IReminder) => void;
}

const useReminderStore = create<ReminderStore>((set: SetState<ReminderStore>) => ({
  reminders: [],
  addReminder: (reminder:IReminder) => {
    set((state) => {
      return{ reminders: [...state.reminders, reminder] }},
)}}));

export default useReminderStore;