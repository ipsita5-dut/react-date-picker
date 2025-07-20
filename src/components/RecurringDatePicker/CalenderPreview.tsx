'use client'
import { useRecurrenceStore } from '@/store/recurrenceStore'
import { generateRecurringDates } from './recurrenceUtils'

export default function CalenderPreview() {
  const { startDate, endDate, interval, recurrenceType, daysOfWeek } = useRecurrenceStore()
  const dates = generateRecurringDates({ startDate, endDate, interval, recurrenceType, daysOfWeek })

  return (
    <div className="mt-6 text-black">
      <h3 className="text-lg font-semibold text-indigo-700 mb-2">Upcoming Dates</h3>
      {dates.length === 0 ? (
        <p className="text-sm text-gray-500 mt-2 italic">No valid dates selected</p>
      ) : (
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-2">
          {dates.slice(0, 9).map((date, idx) => (
            <li
              key={idx}
              className="bg-indigo-100 text-indigo-800 font-medium text-sm p-3 rounded-lg shadow-sm border border-indigo-200"
            >
              {date.toDateString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
