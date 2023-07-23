import { Component, OnInit } from '@angular/core';
import { LogSeverity } from 'src/app/model/dtlog-model';
import { DtLogService } from 'src/app/services/dt-log.service';
import { FilterService } from 'src/app/services/filter.service';
import { items } from '../../../data/items';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: any;
  brands: any;
  categories: any;
  priceRange: any;
  ratings: any;
  items: any;

  filterQuery = {};
  filterQueryList: any;
  constructor(private filterService: FilterService, private dtLogService: DtLogService) {
    // filterService.productFilter.subscribe(response => {
    //   this.filterQuery = response;
    //   this.filterProductsToShow(this.filterQuery);
    // })
  }

  ngOnInit(): void {
    // this.filterService.getdummydata().subscribe(res=>{
    //   console.log(res);
    // })
    // this.filterService.sendLogsToDynatrace().subscribe(res=>{
    //   console.log(res);
    // })

    this.dtLogService.dtLog("new dtlog  service implemented for logging", LogSeverity.Debug).subscribe(response => console.log(response))

    this.items = [...items];
    this.data = items.splice(0, 10);
    this.brands = this.data.map((x: any) => x.brand);
    this.categories = [...new Set(items.splice(0, 5).map(x => x.category))];
    this.priceRange = [Math.min(...items.map(x => x.price)), Math.max(...items.map(x => x.price))]
  }

  filterProductsToShow(fq: any) {
    this.filterQuery = fq;
    // this.filterQueryList = 
    debugger;

    for (let prop in fq) {
      if (fq[prop].length > 0) {
        break;
      }
      this.data = [...items];
      return;
    }
    this.data = this.items.filter((item: any) => fq?.brands?.indexOf(item.brand) != -1 ||
      fq?.categories?.indexOf(item.category) != -1)
  }

  checkPricefilter(priceRange: any, item: any) {
    const min = parseInt(priceRange[0]);
    const max = parseInt(priceRange[1]);
    return !(item.price > min && item.price <= max)
  }
}
