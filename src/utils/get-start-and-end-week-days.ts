/**
 * Returns an object containing the start and end dates of the current week.
 *
 * @returns {{
 *   startDate: Date,
 *   endDate: Date
 * }} The start and end dates of the current week.
 */

export function getStartAndEndWeekDays(): {
  startDate: Date;
  endDate: Date;
} {
  // The length of a week in days
  const WEEK_LENGTH = 6;

  // Get the current date
  const currentDate = new Date();

  // Calculate the index of the current day in the week
  const currentWeekDay =
    currentDate.getDay() === 0 ? WEEK_LENGTH : currentDate.getDay() - 1;

  // Get the start date of the current week
  const weekDateStart = new Date();
  weekDateStart.setDate(currentDate.getDate() - currentWeekDay);

  // Get the end date of the current week
  const weekDateEnd = new Date();
  weekDateEnd.setDate(weekDateStart.getDate() + WEEK_LENGTH);

  return {
    startDate: weekDateStart,
    endDate: weekDateEnd,
  };
}
