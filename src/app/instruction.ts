
// export interface Instruction {
//     InstructionDate: string; // You can use Date type if it's a date
//     ClientName: string;
//     PickupAddress: string;
//     DeliveryAddress: string;
//     ClientRef: string;
//     BillingRef: string;
//     Status: string;
//     Detail: string; // Add the appropriate type here
//     ProductCode: string;
//     ProductDescription: string;
//     Qty: number; // You can use Decimal type if needed
// }


// import { ClientList } from "./client-list";
// import { StatusEnum } from "./status-enum";
// export interface Instruction {
//     Instruction: SubInstruction,
//     BillingId: number;
//     TotalQuantity: number;
//     Status: StatusEnum;
//     ProductCode: number;
//     ProductDescription: string;
// }

// export interface SubInstruction {
//     InstructionId: number;
//     InstructionDate: Date; // You can use Date type if it's a date
//     ClientName: string;
//     PickupAddress: string;
//     DeliveryAddress: string;
//     ClientId: number;
//     ClientList: ClientList;
// }

import { ClientList } from "./client-list";
import { Product } from "./product";
import { StatusEnum } from "./status-enum";
export interface Instruction {
    Instruction: SubInstruction,
    BillingId: number;
    TotalQuantity: number;
    TotalProducts:number; //new
    TotalPrice:number;
    Status: StatusEnum;
    ProductCode: number;  //for add prod 
    ProductDescription: string;  //for add prod 
    // ProductPrice:number;
}

export interface SubInstruction {
    InstructionId: number;
    InstructionDate: Date; 
    ClientName: string;
    PickupAddress: string;
    DeliveryAddress: string;
    ClientId: number;
    ClientList: ClientList; 
    ProductList: Product[]; //array of prod to post
}
// {
//     "id": 0,
//     "createdDate": "2023-09-22T12:49:19.287Z",
//     "clientsId": 0,
//     "pickupAddress": "string",
//     "deliveryAddress": "string",
//     "status": 0,
//     "productList": [
//       {
//         "instructionProductId": 0,
//         "productId": 0,
//         "productQuantity": 0,
//         "instructionId": 0,
//         "transporterId": 0
//       }
//     ]
//   }

//i have to sent
//createdDate   , clientsId, pickupAddress, deliveryAddress, {productId , productQuantity}