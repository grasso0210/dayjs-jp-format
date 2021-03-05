import { jpFormat } from "../";
import * as dayjs from "dayjs";

describe("index", () => {
  dayjs.extend(jpFormat);

  it("could use the standart format", () => {
    const actualDateString = "2020-06-24";
    expect(dayjs(actualDateString).format("YYYY-MM-DD")).toBe("2020-06-24");
  });

  it("could convert the year correctly", () => {
    const actualDateString = "1989-01-07";
    expect(dayjs(actualDateString).format("rrrr")).toBe("昭和64");
  });

  it("could convert the year correctly", () => {
    const actualDateString = "1989-01-08";
    expect(dayjs(actualDateString).format("rrrr")).toBe("平成元");
  });

  it("could convert the year correctly", () => {
    const actualDateString = "1990-01-01";
    expect(dayjs(actualDateString).format("rrrr")).toBe("平成2");
  });

  it("could convert the year correctly", () => {
    const actualDateString = "1998-01-01";
    expect(dayjs(actualDateString).format("rrrr")).toBe("平成10");
  });

  it("could convert the year correctly", () => {
    const actualDateString = "2019-04-30";
    expect(dayjs(actualDateString).format("rrrr")).toBe("平成31");
  });

  it("could convert the year correctly", () => {
    const actualDateString = "2019-05-01";
    expect(dayjs(actualDateString).format("rrrr")).toBe("令和元");
  });

  it("could convert the year correctly", () => {
    const actualDateString = "2020-06-24";
    expect(dayjs(actualDateString).format("rrrr")).toBe("令和2");
  });

  it("could convert the era correctly", () => {
    const actualDateString = "1926-12-24";
    expect(dayjs(actualDateString).format("rr")).toBe("大正");
  });

  it("could convert the era correctly", () => {
    const actualDateString = "1926-12-25";
    expect(dayjs(actualDateString).format("rr")).toBe("昭和");
  });

  it("could convert the era correctly", () => {
    const actualDateString = "1989-01-07";
    expect(dayjs(actualDateString).format("rr")).toBe("昭和");
  });

  it("could convert the era correctly", () => {
    const actualDateString = "1989-01-08";
    expect(dayjs(actualDateString).format("rr")).toBe("平成");
  });

  it("could convert the era correctly", () => {
    const actualDateString = "2019-04-30";
    expect(dayjs(actualDateString).format("rr")).toBe("平成");
  });

  it("could convert the era correctly", () => {
    const actualDateString = "2019-05-01";
    expect(dayjs(actualDateString).format("rr")).toBe("令和");
  });

  it("could use the complex format", () => {
    const actualDateString = "2020-06-24";
    expect(dayjs(actualDateString).format("YYYY(rrrr)")).toBe("2020(令和2)");
  });

  it("could use the complex format", () => {
    const actualDateString = "2020-06-24";
    expect(dayjs(actualDateString).format("YYYY(rrrr) MM-DD")).toBe(
      "2020(令和2) 06-24"
    );
  });

  it("could use the complex format", () => {
    const actualDateString = "2020-06-24";
    expect(dayjs(actualDateString).format("YYYY-MM-DD (rrrr年MM月DD日)")).toBe(
      "2020-06-24 (令和2年06月24日)"
    );
  });
});
