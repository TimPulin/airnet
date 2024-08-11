import { getStartAndEndWeekDays } from "@/utils/get-start-and-end-week-days";
import headerStyles from "./header.module.css";
import ButtonBase from "../buttons/button-base";
import ArrowCarrotLeftIcon from "../icons/ArrowCarrotLeftIcon";
import ArrowCarrotRightIcon from "../icons/ArrowCarrotRightIcon";

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

  const onClick = () => {};

  return (
    <header className={headerStyles.header}>
      <h1 className={headerStyles.headerTitle}>Calendar</h1>
      <div className={headerStyles.bottom}>
        <ButtonBase onClick={onClick} ElementJSX={<ArrowCarrotLeftIcon />} />
        <div className={headerStyles.date}>
          {formatDate(startDate)} - {formatDate(endDate)}
        </div>
        <ButtonBase onClick={onClick} ElementJSX={<ArrowCarrotRightIcon />} />
      </div>
    </header>
  );
}
