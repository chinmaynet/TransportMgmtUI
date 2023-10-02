import { Component, OnInit, Input } from '@angular/core';
import { Column } from 'devextreme/ui/tree_list';
import { Product } from 'src/app/product';
import { ProductDropdown } from 'src/app/product-dropdown';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() products: Product[] = [];//to be sent

  @Input() productNames: ProductDropdown[] = []; //for product names, desc

  events: Array<string> = [];

  constructor() {
    this.setCellValue = this.setCellValue.bind(this);
  }

  ngOnInit(): void {
  }
  
  setCellValue(this: Column, newData: any, value: number, currentRowData: any) {
    newData.ProductDescription = (<any>this)['productNames'].find((x: any) => x.productId == value).productDescription;
    newData.ProductId = value;
  }
}
