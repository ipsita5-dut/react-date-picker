'use client'
import { useRecurrenceStore } from '@/store/recurrenceStore'

const options = ['daily', 'weekly', 'monthly', 'yearly'] as const

export default function RecurrenceOptions() {
  const { recurrenceType, setRecurrenceType } = useRecurrenceStore()

  return (
    <div className="flex gap-3 mb-4">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => setRecurrenceType(opt)}
          className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 shadow-sm ${
            recurrenceType === opt
              ? 'bg-indigo-600 text-white shadow-md'
              : 'bg-gray-100 text-black hover:bg-gray-200'
          }`}
        >
          {opt.charAt(0).toUpperCase() + opt.slice(1)}
        </button>
      ))}
    </div>
  )
}
