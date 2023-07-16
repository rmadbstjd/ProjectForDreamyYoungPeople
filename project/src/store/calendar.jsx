import { create } from "zustand";
import { devtools } from "zustand/middleware";

const store = (set) => ({
  date: "yyyy.mm.dd",
  setDate: (date) => set((state) => ({ date })),
  isOpenCalendar: false,
  setIsOpenCalendar: () =>
    set((state) => ({
      isOpenCalendar: !state.isOpenCalendar,
    })),
});
const calendarStore = create(devtools(store));
export default calendarStore;
