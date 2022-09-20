// https://github.com/felixge/node-dateformat
import dateFormat from "dateformat";
import { i18n } from "../i18n/language";

setTimeout(() => {
  dateFormat.i18n = {
    dayNames: [
      i18n("ui.commons.dayNames.sun"),
      i18n("ui.commons.dayNames.mon"),
      i18n("ui.commons.dayNames.tue"),
      i18n("ui.commons.dayNames.wed"),
      i18n("ui.commons.dayNames.thu"),
      i18n("ui.commons.dayNames.fri"),
      i18n("ui.commons.dayNames.sat"),
      i18n("ui.commons.dayNames.sunday"),
      i18n("ui.commons.dayNames.monday"),
      i18n("ui.commons.dayNames.tuesday"),
      i18n("ui.commons.dayNames.wednesday"),
      i18n("ui.commons.dayNames.thursday"),
      i18n("ui.commons.dayNames.friday"),
      i18n("ui.commons.dayNames.saturday"),
    ],
    monthNames: [
      i18n("ui.commons.monthNames.jan"),
      i18n("ui.commons.monthNames.feb"),
      i18n("ui.commons.monthNames.mar"),
      i18n("ui.commons.monthNames.apr"),
      i18n("ui.commons.monthNames.mayShort"),
      i18n("ui.commons.monthNames.jun"),
      i18n("ui.commons.monthNames.jul"),
      i18n("ui.commons.monthNames.aug"),
      i18n("ui.commons.monthNames.sep"),
      i18n("ui.commons.monthNames.oct"),
      i18n("ui.commons.monthNames.nov"),
      i18n("ui.commons.monthNames.dec"),
      i18n("ui.commons.monthNames.january"),
      i18n("ui.commons.monthNames.february"),
      i18n("ui.commons.monthNames.march"),
      i18n("ui.commons.monthNames.april"),
      i18n("ui.commons.monthNames.may"),
      i18n("ui.commons.monthNames.june"),
      i18n("ui.commons.monthNames.july"),
      i18n("ui.commons.monthNames.august"),
      i18n("ui.commons.monthNames.september"),
      i18n("ui.commons.monthNames.october"),
      i18n("ui.commons.monthNames.november"),
      i18n("ui.commons.monthNames.december"),
    ],
    timeNames: ["a", "p", "am", "pm", "A", "P", "AM", "PM"],
  };
});

export function formatDate(
  date?: string | number | Date,
  mask?: string,
  utc: boolean = true,
  gmt?: boolean
): string {
  return dateFormat(date, mask, utc, gmt);
}

export function getYear(
  date?: string | number | Date,
  utc: boolean = false
): number {
  const year = formatDate(date, "yyyy", utc);
  return +year;
}

export function getMonth(
  date?: string | number | Date,
  utc: boolean = false,
  startsInZero = false
): number {
  const month = formatDate(date, "mm", utc);
  return startsInZero ? +month - 1 : +month;
}

export function getDay(
  date?: string | number | Date,
  utc: boolean = false
): number {
  const day = formatDate(date, "dd", utc);
  return +day;
}

export function getNumericDate(
  date?: string | number | Date,
  utc: boolean = false,
  mode: "array" | "object" = "array"
): number[] | { [key: string]: number } {
  const year = getYear(date, utc);
  const month = getMonth(date, utc);
  const day = getDay(date, utc);

  return mode === "array" ? [year, month, day] : { year, month, day };
}

export function createDateFromUTC(date?: string | null) {
  if (!date) {
    return null;
  }
  const parts = date.split("-");
  const year = +parts[0];
  const month = +parts[1] - 1;
  const day = +parts[2];
  return new Date(year, month, day);
}

export function isDateSame(
  date1: Date | number | string,
  date2: Date | number | string
) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  return d1.getTime() === d2.getTime();
}

export function isDateBefore(
  date1: string | number | Date,
  date2: string | number | Date
): boolean {
  return new Date(date1).getTime() < new Date(date2).getTime();
}

export function isDateAfter(
  date1: string | number | Date,
  date2: string | number | Date
): boolean {
  return new Date(date1).getTime() > new Date(date2).getTime();
}

export function isDateBetween(
  date: Date | string | number,
  startDate: Date | string | number,
  endDate: Date | string | number
): boolean {
  const dateToCompare = new Date(date);
  const startDateToCompare = new Date(startDate);
  const endDateToCompare = new Date(endDate);

  return (
    dateToCompare >= startDateToCompare && dateToCompare <= endDateToCompare
  );
}

export function getElapsedTime(
  date1: Date | string | number,
  date2: Date | string | number,
  mode:
    | "seconds"
    | "minutes"
    | "hours"
    | "days"
    | "months"
    | "years" = "seconds",
  toString = false
): number | string {
  const diff = Math.abs(new Date(date1).getTime() - new Date(date2).getTime());
  let elapsedTime = Math.floor(diff / 1000);

  switch (mode) {
    case "minutes":
      elapsedTime = Math.floor(diff / 1000 / 60);
      break;
    case "hours":
      elapsedTime = Math.floor(diff / 1000 / 60 / 60);
      break;
    case "days":
      elapsedTime = Math.floor(diff / 1000 / 60 / 60 / 24);
      break;
    case "months":
      elapsedTime = Math.floor(diff / 1000 / 60 / 60 / 24 / 30);
      break;
    case "years":
      elapsedTime = Math.floor(diff / 1000 / 60 / 60 / 24 / 30 / 12);
      break;
    default:
      // Seconds
      elapsedTime = Math.floor(diff / 1000);
      break;
  }

  return toString
    ? `${elapsedTime} ${i18n(
        `ui.commons.elapsed.${elapsedTime === 1 ? `singular.${mode}` : mode}`
      )}`
    : elapsedTime;
}
