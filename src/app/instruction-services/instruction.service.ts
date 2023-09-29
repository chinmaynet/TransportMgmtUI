import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //imported
import { Observable } from 'rxjs';
import { Instruction } from '../instruction';
import { Testmodel } from '../testmodel';
import { StatusEnum } from '../status-enum';
import { ProductDropdown } from '../product-dropdown';
import { Product } from '../product';
@Injectable({
  providedIn: 'root'
})
export class InstructionService {
  // private basePath = 'https://localhost:44326'; 
  private basePath = 'https://localhost:44382';
  constructor(private http: HttpClient) { }
  
  mapStatusFromApi(statusValue: number): StatusEnum {
    switch (statusValue) {
      case 0:
        return StatusEnum.Pending;
      case 1:
        return StatusEnum.Scheduled;
      case 2:
        return StatusEnum.InProgress;
      case 3:
        return StatusEnum.Delivered;
      case 4:
        return StatusEnum.Invoiced;
      default:
        // Handle unknown status values if needed
        return StatusEnum.Pending; // Or another default value
    }
  }

  getAllInstruction(): Observable<Instruction[]> {
    return this.http.get<Instruction[]>(this.basePath + '/api/instructions');
  }
  // getAllInstruction(): Observable<Testmodel[]> {
  //   return this.http.get<any[]>(this.basePath + '/api/instructions').pipe(
  //     map((apiResponse: any[]) => {
  //       return apiResponse.map((item: any) => ({
  //         instructionId: item.id,
  //         instructionDate: item.createdDate,
  //         pickupAddress: item.pickupAddress,
  //         deliveryAddress: item.deliveryAddress,
  //         status: item.status as StatusEnum, // Assuming status is a number matching StatusEnum values
  //         productList: item.productList as ProductDropdown // Assuming productList matches ProductDropdown
  //       }));
  //     })
  //   );
  // }

  // getAllInstruction() : Observable<Testmodel[]>{
  //   return this.http.get<Testmodel[]>(this.basePath + '/api/instructions');
  // }
  getAllTransporters():Observable<any>{
    return this.http.get<any[]>(this.basePath + '/api/TransporterList');
  }

  getInstructionById(id: number): Observable<Instruction> {
    const url = `${this.basePath}/api/instructions/${id}`;
    return this.http.get<Instruction>(url);
  }

  // addInstruction(addInstructionRequest: Instruction){
  //   // addInstructionRequest.InstructionId = 0;
  //   return this.http.post<Instruction>(this.basePath + '/api/instructions', addInstructionRequest);
  // }
  addInstruction(apiRequest: any) {
    // addInstructionRequest.InstructionId = 0;
    return this.http.post<any>(this.basePath + '/api/instructions', apiRequest);
  }

  // addTransportInstruciton(apiRequest: any){
  //   return this.http.post<any>(this.basePath + '/api/Transporter', apiRequest);
  // }
  addTransportInstruciton(instructionProductId: number, data: any): Observable<any> {
    const apiUrl = `${this.basePath}/api/instructionproducts/${instructionProductId}/addTransporter`;
    return this.http.post(apiUrl, data);
  }

  //status update 
  getAllUpdateInstructionChangeStatus(): Observable<any[]> {
    return this.http.get<any[]>(this.basePath + '/api/transporterscheduled');
  }
  // transformApiResponse(apiResponse: any): Instruction[] {
  //   return apiResponse.map((item: any) => ({
  //     Instruction: {
  //       InstructionId: item.instructionId,
  //       InstructionDate: new Date(item.instructionDate), 
  //       ClientName: '', //because we are not getting  client name from api
  //       PickupAddress: item.pickupAddress,
  //       DeliveryAddress: item.deliveryAddress,
  //       ClientId: item.clientId,
  //       ClientList: null, 
  //     },
  //     BillingId: 0, 
  //     TotalQuantity: 0, 
  //     Status: StatusEnum.Pending, 
  //     ProductCode: 0, 
  //     ProductDescription: '', //because we are not getting ProductDescription from api
  //   }));
  // }

  transformGetAllApiResponse(apiResponse: any): Instruction[] {
    return apiResponse.map((item: any) => ({
      Instruction: {
        InstructionId: item.id,
        InstructionDate: new Date(item.createdDate),
        ClientName: item.clientName,
        PickupAddress: item.pickupAddress,
        DeliveryAddress: item.deliveryAddress,
        ClientId: '',
        ClientList: null,
        productList: item.productList as Product[]
      },
      BillingId: 0,
      TotalQuantity: 0,
      Status:  this.mapStatusFromApi(item.status),
      ProductCode: 0,
      ProductDescription: '', //because we are not getting ProductDescription from api
    }));
  }

  transformGetInstructionByIdApiResponse(apiResponse: any): Instruction {
    return {
      Instruction: {
        InstructionId: apiResponse.id,
        InstructionDate: new Date(apiResponse.createdDate),
        ClientName: apiResponse.clientName,
        PickupAddress: apiResponse.pickupAddress,
        DeliveryAddress: apiResponse.deliveryAddress,
        ClientId: 0, // You may need to set this value based on your requirements
        ClientList: {
          id : 0,               
          name :apiResponse.clientName
        }, // You may need to set this value based on your requirements
        ProductList: apiResponse.productList
      },
      BillingId: apiResponse.billingId, //  not sure
      TotalQuantity: apiResponse.totalQuantity, //
      TotalProducts:0,
      TotalPrice:0,
      Status: this.mapStatusFromApi(apiResponse.status),
      ProductCode: apiResponse.productCode, //
      ProductDescription: apiResponse.productDescription, // 
      // ProductPrice:apiResponse.productPrice, //////////changed
    };
  }
}
