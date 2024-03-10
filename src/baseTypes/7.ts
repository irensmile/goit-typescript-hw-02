/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
const enum daysOfTheWeek {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY,
}

export function isWeekend(day: daysOfTheWeek): boolean {
  return day in [daysOfTheWeek.SATURDAY, daysOfTheWeek.SUNDAY];
}

export {};
