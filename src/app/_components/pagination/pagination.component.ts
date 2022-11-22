import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import {PaginatedModel} from "../../_models/paginated.model";
import {BaseModel} from "../../_models/BaseModel";

const FILTER_PAG_REGEX = /[^0-9]/g;

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  public total!: number;
  public request!: Observable<PaginatedModel<any[]>>;
  public page_count!: number;
  public page: number = 1;
  @Input() service!: any;
  @Output() public model_data: EventEmitter<any[]> = new EventEmitter<any[]>();
  private _lastpage!: string;

  constructor() {
  }

  selectPage(page: string) {
    console.log(page)
    this.page = parseInt(page, 10) || 1;
    this.request = this.service.getAll(this.page);
    this._loadData();
  }

  private _loadData() {
    this.request.subscribe(data => {
      this.total = data.total;
      this.page_count = data.page_count;
      this.page = data.page;
      this.model_data.emit(data.data);
    });
  }

  formatInput(input: HTMLInputElement) {
    input.value = input.value.replace(FILTER_PAG_REGEX, '');
  }

  ngOnInit(): void {
    this.request = this.service.getAll(this.page);
    this._loadData();
  }


  get lastpage(): string {
    let number = Math.ceil(this.total/10);
    console.log(number)
    return this.page_count+'';
  }
}
