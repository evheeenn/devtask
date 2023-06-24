import dayjs from "dayjs";

export function calculateDeadline(
  startDate,
  deadline,
  currentDate = dayjs().format("DD-MM-YYYY HH:mm")
) {
  const start = dayjs(startDate, "DD-MM-YYYY HH:mm");
  const end = dayjs(deadline, "DD-MM-YYYY HH:mm");
  const totalHours = end.diff(start, "hour");
  const elapsedHours = dayjs(currentDate, "DD-MM-YYYY HH:mm").diff(
    start,
    "hour"
  );

  const progressPercentage = (elapsedHours / totalHours) * 100;

  return progressPercentage.toFixed(2);
}
