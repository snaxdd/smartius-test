export class DateHelper {
  static getDateNow() {
    let date = new Date(Date.now());
    return date.toLocaleDateString("ru-RU", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
}
