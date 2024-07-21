import { getStartAndEndWeekDays } from "@/utils/get-start-and-end-week-days";
export default function CalendarHeader() {
  const { startDate, endDate } = getStartAndEndWeekDays();

  function formatDate(date: Date) {
    const formatter = Intl.DateTimeFormat("ru-RU", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
    return formatter.format(date);
  }

  return (
    <div>
      <h1>Calendar</h1>
      <div>
        {formatDate(startDate)} - {formatDate(endDate)}
      </div>
    </div>
  );
}
