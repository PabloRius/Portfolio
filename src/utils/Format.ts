const formatLocaleDate = (date: Date, formatOptions) =>
  date.toLocaleString("en-UK", formatOptions);

export const formatDate = (startDate: Date, endDate?: Date) => {
  let dateText;

  if (!endDate) {
    dateText = `${startDate.getFullYear()} - ${formatLocaleDate(startDate, { month: "short" })}`;
  } else if (startDate.getFullYear() === endDate.getFullYear()) {
    dateText = `${startDate.getFullYear()} - ${formatLocaleDate(startDate, { month: "short" })} to ${formatLocaleDate(endDate, { month: "short" })}`;
  } else {
    dateText = `${startDate.getFullYear()} - ${formatLocaleDate(startDate, { month: "short" })} to ${endDate.getFullYear()} - ${formatLocaleDate(endDate, { month: "short" })}`;
  }
  return dateText;
};
