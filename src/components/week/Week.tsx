import { useEffect, useState } from "react";
import { getStartAndEndWeekDays } from "@/utils/get-start-and-end-week-days";
import { formatDate } from "@/utils/date-formatter";

import weekStyles from "./week.module.css";

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
    <ul className={weekStyles.weekGreed}>
      {weekDateList.map((day) => (
        <li className={weekStyles.weekDay} key={day.getTime()}>
          <div className={weekStyles.dayHeader}>
            <h2 className={weekStyles.dayTitle}>{formatDate(day)}</h2>
          </div>
        </li>
      ))}
    </ul>
  );
}
