import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  filterValue: string = "";


  search(): void {
    console.log(this.filterValue);

  }
  // status: boolean = true

  // setValue(e: any) {
  //   this.filterValue = e.target.value;
  // }
  // toggle() {
  //   this.status = !this.status
  // }
}
