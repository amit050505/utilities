import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  panelOpenState = false;
  filterGroups = ["Categories", "Price", "Brand", "Customer ratings"]
  toppings = this._formBuilder.group({
    pepperoni: false,
    extracheese: false,
    mushroom: false,
  });
  @Input() brands: any;
  @Input() categories: any;
  @Input() priceRange: any;
  priceRanges: any;

  @Output() filterProducts = new EventEmitter();
  ratings = [
    "4★ & above",
    "3★ & above",
    "2★ & above",
    "1★ & above",
  ]
  // priceRanges = [
  //   "Under ₹500",
  //   "₹500 - ₹1,000",
  //   "₹1,000 - ₹2,000",
  //   "₹2,000 - ₹3,000",
  //   "Over ₹3,000"
  // ]

  filterQuery: any = {
    brands: [],
    calegories: [],
    price: [],
    ratings: []
  };
  constructor(private _formBuilder: FormBuilder, private filterService: FilterService) {
    // filterService.productFilter.subscribe(response => {
    //   this.filterQuery = response;
    // })
  }

  ngOnInit(): void {
    this.priceRanges = [
      "0-500",
      "500-1000",
      "1000-5000",
      "5000-max"
    ]
  }

  updateFilter(filterType: string, filterquery: any) {
    if (this.filterQuery && this.filterQuery[filterType].indexOf(filterquery) === -1) {
      this.filterQuery[filterType].push(filterquery);
    }
    else if (this.filterQuery && this.filterQuery[filterType].indexOf(filterquery) !== -1) {
      this.filterQuery[filterType] = this.filterQuery[filterType].filter((item: string) => item !== filterquery);
    }
    // call behavioursubject.next() to update filter query
    this.filterProducts.emit(this.filterQuery);
  }

}
