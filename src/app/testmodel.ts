import { ClientList } from "./client-list";
import { Product } from "./product";
import { ProductDropdown } from "./product-dropdown";
import { StatusEnum } from "./status-enum";

export interface Testmodel {
    instructionId: number;
    instructionDate: string;
    clientName:string;
    pickupAddress: string; 
    deliveryAddress: string;
    // clientId: number;
    // clientList: ClientList;
    status: StatusEnum;
    productList :ProductDropdown
}
