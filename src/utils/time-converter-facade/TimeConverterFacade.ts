import { TimeConverter } from "../time-converter/TimeConverter";

export class TimeConverterProcessorFacade {
  private timeConverter: TimeConverter;

  constructor() {
    this.timeConverter = new TimeConverter();
  }

  fromTimeToDecimal(time: string | undefined): number {
    return this.timeConverter.fromTime(time).toDecimal();
  }

  fromDecimalToTime(decimal: number | undefined): string {
    return this.timeConverter.fromDecimal(decimal).toTime();
  }

  fromDecimalToHoursMinutes(decimal: number | undefined): {
    hours: number;
    minutes: number;
  } {
    return this.timeConverter.fromDecimal(decimal).toHoursMinutes();
  }
}
