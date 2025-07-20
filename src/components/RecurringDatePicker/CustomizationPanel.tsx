'use client'

import { useRecurrenceStore } from '@/store/recurrenceStore'

const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

export default function CustomizationPanel() {
  const {
    recurrenceType,
    interval,
    daysOfWeek,
    setInterval,
    setDaysOfWeek,
  } = useRecurrenceStore()

  const toggleDay = (day: string) => {
    if (daysOfWeek.includes(day)) {
      setDaysOfWeek(daysOfWeek.filter((d) => d !== day))
    } else {
      setDaysOfWeek([...daysOfWeek, day])
    }
  }

  return (
    <div className="space-y-5 mt-6 text-black text-sm">
      <label className="block text-base font-semibold text-black">
        <span className="text-black mr-2">Every</span>
        <input
          type="number"
          min={1}
          value={interval}
          onChange={(e) => setInterval(Math.max(1, Number(e.target.value)))}
          className="inline-block px-3 py-1.5 border border-gray-300 rounded-md w-24 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black bg-white shadow-sm"
        />
        <span className="ml-2 capitalize text-indigo-600 font-medium">{recurrenceType}</span>
      </label>

      {recurrenceType === 'weekly' && (
        <div className="flex flex-wrap gap-3">
          {weekdays.map((day) => (
            <button
              key={day}
              onClick={() => toggleDay(day)}
              className={`px-4 py-2 rounded-lg font-medium text-sm border transition duration-200 ease-in-out ${
                daysOfWeek.includes(day)
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow'
                  : 'bg-gray-100 text-black hover:bg-gray-200 border-gray-300'
              }`}
            >
              {day}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
