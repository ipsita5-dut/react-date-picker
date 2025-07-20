import { generateRecurringDates } from '@/components/RecurringDatePicker/recurrenceUtils'

test('generates 3 daily recurring dates', () => {
  const dates = generateRecurringDates({
    startDate: new Date('2025-01-01'),
  endDate: new Date('2025-01-04'),
  interval: 1,
  recurrenceType: 'daily',
  daysOfWeek: [] // ✅ Add this
  })

  expect(dates.length).toBe(3)
  expect(dates[0].toDateString()).toBe('Wed Jan 01 2025')
})
