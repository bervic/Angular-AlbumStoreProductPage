import { Component, OnInit } from '@angular/core';
import { Album } from '../album'; //Module 4

import { ProductService} from '../product.service'; //module 3

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  /*module 3:
   albumInfo; 
*/

  albumInfo: Album; 

  constructor(private _productService: ProductService) { }

  //module 3
  ngOnInit() {
    this._productService.getAlbum(1).subscribe(response => this.albumInfo = response);
  }

}
