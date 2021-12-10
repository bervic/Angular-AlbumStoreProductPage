import { Component, OnInit } from '@angular/core';

import { ProductService} from '../product.service'; //module 3

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  albumInfo; //module 3

  constructor(private _productService: ProductService) { }

  //module 3
  ngOnInit() {
    this._productService.getAlbum(1).subscribe(response => this.albumInfo = response);
  }

}
