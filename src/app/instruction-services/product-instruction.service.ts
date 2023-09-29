import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { ProductDropdown } from '../product-dropdown';
@Injectable({
  providedIn: 'root'
})
export class ProductInstructionService {
  // private apiUrl = 'https://localhost:44326';
  private apiUrl = 'https://localhost:44382';

  constructor(private http: HttpClient) { }
  
  getProducts(): Observable<ProductDropdown[]> {    //for dropdown only not for display
    return this.http.get<ProductDropdown[]>(`${this.apiUrl}/api/products`);
  }
}
