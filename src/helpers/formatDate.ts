import {DateTime} from "luxon"


/** Format date helper */

export const formatDate = (date: Date) => {

  const originalDate = new Date(date);
  const luxonDate = DateTime.fromJSDate(originalDate);

  return luxonDate.toFormat('dd.MM.yyyy HH:mm:ss');
};
