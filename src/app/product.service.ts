import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http'; //module 3

import 'rxjs/add/operator/map'; //module 3

//module 4
import { Album } from './album'; 

//module 4
import { Observable } from 'rxjs/Observable'; 

@Injectable()
export class ProductService {

  private _albumUrl = '../assets/album.json' //module 3
  constructor(private _http: Http) { } //module 3



  getAlbum(id: number): Observable<Album>{
    return this._http.get(this._albumUrl).map((response) => 
    <Album>response.json());
  } 

      /*
  Module 3
  getAlbum(id: number){
    return this._http.get(this._albumUrl).map((response) => 
    response.json());
  }*/

}
