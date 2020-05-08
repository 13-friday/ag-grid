import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public params: any;

  public ascSort: string;
  public descSort: string;
  public noSort: string;

  @ViewChild('menuButton', {read: ElementRef}) public menuButton;

  agInit(params): void {
    this.params = params;

    params.column.addEventListener(
      'sortChanged',
      this.onSortChanged.bind(this)
    );
    this.onSortChanged();
  }

  onMenuClicked() {
    this.params.showColumnMenu(this.menuButton.nativeElement);
  }

  onSortChanged() {
    this.ascSort = this.descSort = this.noSort = 'inactive';
    if (this.params.column.isSortAscending()) {
      this.ascSort = 'active';
    } else if (this.params.column.isSortDescending()) {
      this.descSort = 'active';
    } else {
      this.noSort = 'active';
    }
  }

  onSortRequested(order, event) {
    this.params.setSort(order, event.shiftKey);
  }

  select({target}) {
    target.checked ? this.params.api.selectAll() : this.params.api.deselectAll();
  }
}
