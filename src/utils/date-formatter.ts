export function formatDate(date: Date) {
  const formatter = Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "numeric",
  });

  return formatter.format(date);
}
