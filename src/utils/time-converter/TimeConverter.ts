export class TimeConverter {
  private hours: number = 0;
  private minutes: number = 0;
  private decimalTime: number = 0;

  // Converte de hora no formato HH:MM para decimal
  fromTime(time: string | undefined): this {
    if (!time) {
      console.error("timeString must be in the format HH:mm");
      this.decimalTime = 0;
      this.hours = 0;
      this.minutes = 0;
      return this;
    }

    const [hoursStr, minutesStr] = time.split(":");
    this.hours = Number(hoursStr);
    this.minutes = Number(minutesStr);

    if (isNaN(this.hours) || isNaN(this.minutes)) {
      console.error("timeString must be in the format HH:mm");
      this.decimalTime = 0;
      this.hours = 0;
      this.minutes = 0;
      return this;
    }

    this.decimalTime = (this.hours * 60 + this.minutes) / 60;
    return this;
  }

  // Converte de decimal para hora no formato HH:MM
  fromDecimal(decimal: number | undefined): this {
    if (typeof decimal !== "number" || isNaN(decimal)) {
      console.error("decimalHours must be a number");
      this.hours = 0;
      this.minutes = 0;

      return this;
    }

    this.hours = Math.floor(decimal);
    this.minutes = Math.round((decimal - this.hours) * 60);
    this.decimalTime = decimal;

    if (this.minutes >= 60) {
      this.hours += Math.floor(this.minutes / 60);
      this.minutes %= 60;
    }

    return this;
  }

  // Retorna a hora no formato HH:MM
  toTime(): string {
    const hoursStr = this.hours.toString().padStart(2, "0");
    const minutesStr = this.minutes.toString().padStart(2, "0");
    return `${hoursStr}:${minutesStr}`;
  }

  // Retorna a hora no formato decimal
  toDecimal(): number {
    return this.decimalTime;
  }

  toHoursMinutes(): { hours: number; minutes: number } {
    return {
      hours: this.hours,
      minutes: this.minutes,
    };
  }

  // Reset para nova conversão
  reset(): this {
    this.hours = 0;
    this.minutes = 0;
    this.decimalTime = 0;
    return this;
  }
}
