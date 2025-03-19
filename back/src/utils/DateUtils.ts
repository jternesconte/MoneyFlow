import { format, parse } from 'date-fns';

export class DateUtils {
  static toCustomFormat(date: Date | string | null, formatPattern: string = 'dd/MM/yyyy'): string | null {
    if (!date) return null;
    return format(new Date(date), formatPattern);
  }

  static toTimestamp(dateStr: string): Date | null {
    if (!dateStr) return null;
    const parsedDate = parse(dateStr, 'MM/dd/yyyy', new Date());
    return isNaN(parsedDate.getTime()) ? null : parsedDate;
  }
}
