import { useEffect, useState } from "react";
import { getStartAndEndWeekDays } from "@/utils/get-start-and-end-week-days";
import { formatDate } from "@/utils/date-formatter";

export default function Week() {
  const { startDate, endDate } = getStartAndEndWeekDays();

  const [weekDateList, setWeekDateList] = useState<Date[]>([]);

  function getWeekDateList(startDate: Date, endDate: Date) {
    const weekDateList = [];
    const firstWeekDate = startDate.getDate();
    weekDateList.push(startDate);

    for (let i = 1; i < 6; i++) {
      const date = new Date();
      date.setDate(firstWeekDate + i);
      weekDateList.push(date);
    }

    weekDateList.push(endDate);
    return weekDateList;
  }

  useEffect(() => {
    const list = getWeekDateList(startDate, endDate);
    setWeekDateList(list);
  }, []);

  return (
    <div>
      {weekDateList.map((day) => (
        <div key={day.getTime()}>{formatDate(day)}</div>
      ))}
    </div>
  );
}
