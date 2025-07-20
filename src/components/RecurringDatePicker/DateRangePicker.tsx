'use client'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useRecurrenceStore } from '@/store/recurrenceStore'

export default function DateRangePicker() {
  const { startDate, endDate, setStartDate, setEndDate } = useRecurrenceStore()

  return (
    <div className="flex flex-col sm:flex-row gap-6 mt-6 items-start sm:items-center text-black">
      <div className="flex flex-col">
        <p className="text-sm font-semibold text-black mb-1">Start Date</p>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date!)}
          className="px-3 py-2 border border-gray-300 rounded-md w-44 bg-white text-black focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
        />
      </div>
      <div className="flex flex-col">
        <p className="text-sm font-semibold text-black mb-1">End Date (optional)</p>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date!)}
          isClearable
          placeholderText="No end"
          className="px-3 py-2 border border-gray-300 rounded-md w-44 bg-white text-black focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
        />
      </div>
    </div>
  )
}
