import { describe, beforeEach, afterEach, it, expect, vi } from "vitest";

import { decimalTimeMockList } from "../../../mocks/time-converter-mock/decimalTimeMockList";
import { TimeConverter } from "./TimeConverter";

describe("Class TimeConverter", () => {
  beforeEach(() => {
    vi.spyOn(console, "error").mockImplementation(() => {});
  });
  afterEach(() => {
    vi.resetAllMocks();
  });

  describe("Method decimalToTime", () => {
    decimalTimeMockList.forEach(({ decimal, time }) => {
      it(`should convert decimal hours ${decimal} to time ${time}`, () => {
        const timeConverter = new TimeConverter();

        const timeFormat = timeConverter.fromDecimal(decimal).toTime();
        expect(timeFormat).toBe(time);
      });
    });
    it(`should convert decimal hours 7.833 to time 07:50`, () => {
      const time = "07:50";
      const decimal = 7.833333333333333;

      const timeConverter = new TimeConverter();

      const timeResult = timeConverter.fromDecimal(decimal).toTime();

      expect(timeResult).toBe(time);
    });
    it(`should convert decimal hours 8.166 to time 08:10`, () => {
      const time = "08:10";
      const decimal = 8.166666666666666;

      const timeConverter = new TimeConverter();

      const timeResult = timeConverter.fromDecimal(decimal).toTime();
      expect(timeResult).toBe(time);
    });
    it(`should return string 00:00 if decimal is not defined`, () => {
      const time = "00:00";
      const decimal = undefined;

      const timeConverter = new TimeConverter();

      const timeResult = timeConverter.fromDecimal(decimal).toTime();
      expect(timeResult).toBe(time);

      expect(console.error).toHaveBeenCalledTimes(1);
      expect(console.error).toHaveBeenCalledWith(
        "decimalHours must be a number"
      );
    });
  });
  describe("Method timeToDecimal", () => {
    decimalTimeMockList.forEach(({ decimal, time }) => {
      it(`should convert ${time} in decimal hours to ${decimal}`, () => {
        const timeConverter = new TimeConverter();

        const timeFormat = timeConverter.fromTime(time).toDecimal();
        expect(timeFormat).toBe(decimal);
      });
    });
    it(`should convert time 07:50 to decimal hours 7.833`, () => {
      const time = "07:50";
      const decimal = 7.833333333333333;

      const timeConverter = new TimeConverter();

      const timeResult = timeConverter.fromTime(time).toDecimal();
      expect(timeResult).toBe(decimal);
    });
    it(`should convert time 08:10 to decimal hours 8.166`, () => {
      const time = "08:10";
      const decimal = 8.166666666666666;

      const timeConverter = new TimeConverter();

      const timeResult = timeConverter.fromTime(time).toDecimal();
      expect(timeResult).toBe(decimal);
    });
    it(`should return zero if timeString format is not valid`, () => {
      const time = "0810";
      const decimal = 0;

      const timeConverter = new TimeConverter();

      const timeResult = timeConverter.fromTime(time).toDecimal();
      expect(timeResult).toBe(decimal);

      expect(console.error).toHaveBeenCalledTimes(1);
      expect(console.error).toHaveBeenCalledWith(
        "timeString must be in the format HH:mm"
      );
    });
    it(`should return zero if timeString is not defined`, () => {
      const time = undefined;
      const decimal = 0;

      const timeConverter = new TimeConverter();

      const timeResult = timeConverter.fromTime(time).toDecimal();
      expect(timeResult).toBe(decimal);

      expect(console.error).toHaveBeenCalledTimes(1);
      expect(console.error).toHaveBeenCalledWith(
        "timeString must be in the format HH:mm"
      );
    });
  });
});
