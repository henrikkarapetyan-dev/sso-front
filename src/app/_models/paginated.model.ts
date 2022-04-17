export class PaginatedModel<T> {
  private _page!: number;
  private _page_count!: number;
  private _total!: number;
  private _data!: T

  get page(): number {
    return this._page;
  }

  set page(value: number) {
    this._page = value;
  }

  get page_count(): number {
    return this._page_count;
  }

  set page_count(value: number) {
    this._page_count = value;
  }

  get total(): number {
    return this._total;
  }

  set total(value: number) {
    this._total = value;
  }

  get data(): T {
    return this._data;
  }

  set data(value: T) {
    this._data = value;
  }
}
