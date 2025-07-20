import { addDays, addWeeks, addMonths, addYears, isBefore } from 'date-fns'
import { RecurrenceSettings } from '@/types'

export function generateRecurringDates({
  startDate,
  endDate,
  interval,
  recurrenceType,
  daysOfWeek = [],
}: RecurrenceSettings): Date[] {
  const result: Date[] = []
  let current = new Date(startDate)

  const addFn =
    recurrenceType === 'daily'
      ? addDays
      : recurrenceType === 'weekly'
      ? addWeeks
      : recurrenceType === 'monthly'
      ? addMonths
      : addYears

  const MAX_DATES = 500 // safety cap to avoid memory crash

  while ((!endDate || isBefore(current, endDate)) && result.length < MAX_DATES) {
    result.push(current)
    current = addFn(current, interval)
  }

  return result
}
