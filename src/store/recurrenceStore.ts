import { create } from 'zustand'
import { RecurrenceType } from '@/types'


interface RecurrenceState {
  recurrenceType: RecurrenceType
  interval: number
  startDate: Date
  endDate?: Date
  daysOfWeek: string[] // e.g., ['Monday', 'Wednesday']
  setRecurrenceType: (type: RecurrenceType) => void
  setInterval: (i: number) => void
  setStartDate: (d: Date) => void
  setEndDate: (d?: Date) => void
  setDaysOfWeek: (days: string[]) => void
}

export const useRecurrenceStore = create<RecurrenceState>((set) => ({
  recurrenceType: 'daily',
  interval: 1,
  startDate: new Date(),
  endDate: undefined,
  daysOfWeek: [],
  setRecurrenceType: (type) => set({ recurrenceType: type }),
  setInterval: (i) => set({ interval: i }),
  setStartDate: (d) => set({ startDate: d }),
  setEndDate: (d) => set({ endDate: d }),
  setDaysOfWeek: (days) => set({ daysOfWeek: days }),
}))
