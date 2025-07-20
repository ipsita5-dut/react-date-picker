export type RecurrenceType = 'daily' | 'weekly' | 'monthly' | 'yearly'

export interface RecurrenceSettings {
  recurrenceType: RecurrenceType
  interval: number
  startDate: Date
  endDate?: Date
  daysOfWeek: string[] // ['Monday', 'Wednesday']
}
