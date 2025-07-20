import RecurrenceOptions from './RecurrenceOptions'
import CustomizationPanel from './CustomizationPanel'
import DateRangePicker from './DateRangePicker'
import CalendarPreview from './CalenderPreview'

export default function RecurringDatePicker() {
  return (
    <div className="max-w-2xl mx-auto bg-white shadow p-6 rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-black">Recurring Date Picker</h2>
      <RecurrenceOptions />
      <CustomizationPanel />
      <DateRangePicker />
      <CalendarPreview />
    </div>
  )
}
