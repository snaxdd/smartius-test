export class StorageHelper {
  static async setItem(key: string, item: any) {
    await localStorage.setItem(key, JSON.stringify(item));
  }
  static async getItem(key: string) {
    let item = await localStorage.getItem(key);
    return item && JSON.parse(item);
  }
}
