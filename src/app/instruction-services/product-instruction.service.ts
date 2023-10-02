import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { ProductDropdown } from '../product-dropdown';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductInstructionService {
  // private apiUrl = 'https://localhost:44326';
  private apiUrl = 'https://localhost:44382';

  constructor(private http: HttpClient) { }
  
  // getProducts(): Observable<ProductDropdown[]> {    //for dropdown only not for display
  //   return this.http.get<ProductDropdown[]>(`${this.apiUrl}/api/products`);
  // }
  getProducts(): Observable<ProductDropdown[]> {
    return this.http.get<any>(`${this.apiUrl}/api/products`).pipe(
      map((response: any) => {
        // Assuming the response has a 'data' field containing the product data
        return response.data.map((item: any) => ({
          productId: item.productId,
          productName: item.productName,
          productDescription: item.productDescription,
          productPrice: item.productPrice
        }));
      })
    );
  }
}
