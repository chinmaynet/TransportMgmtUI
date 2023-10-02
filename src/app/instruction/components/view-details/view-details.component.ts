import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Instruction } from 'src/app/instruction';
import { InstructionService } from 'src/app/instruction-services/instruction.service';
import { StatusEnum } from 'src/app/status-enum';
import { Router } from '@angular/router';
import { Product } from 'src/app/product';
@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit, OnChanges {
  // instruction : Instruction | null= null;
  instruction: any;
  instructionClientName: string = "";
  instructionId?: number;
  totalQuantity: number = 0;
  totalPrice: number = 0;
  totalProducts: number = 0;
  initialScheduledDate: Date = new Date();
  dateBoxValue!: Date;
  gridData: { TotalProducts: number }[] = [{ TotalProducts: 0 }];
  transporters: { id: number, name: string }[] = [];
  toscheduleProducts: any;
  savedTransporterProducts: any[] = [];
  constructor(private route: ActivatedRoute,
    private instructionService: InstructionService, private router: Router,) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getInstructionById();
  }

  productsChange(){
    this.getInstructionById();
  }

  ngOnInit(): void {
    // Retrieve the instruction ID from the route parameter
    this.route.params.subscribe(params => {
      this.instructionId = params['id']; // Assuming 'id' is the route parameter name      
      console.log(this.instructionId);

      this.getInstructionById();
    });
  }

  getInstructionById() {
    if (this.instructionId) {
      this.instructionService.getAllTransporters().subscribe((transportersApiResponse: any) => {
        this.transporters = transportersApiResponse;
      });

      this.instructionService.getInstructionById(this.instructionId).subscribe(
        (instructionApiResponse: any) => {
          console.log('API Response:', instructionApiResponse);
          this.instruction = this.instructionService.transformGetInstructionByIdApiResponse(instructionApiResponse);
          this.instructionClientName = this.instruction.Instruction.ClientName;
          this.calculateTotalQuantity();
        },
        error => {
          console.error('Error fetching instruction:', error);
        }
      );
    }
  }

  statusOptions: { text: string, value: StatusEnum }[] = [
    { text: 'Pending', value: 0 },
    { text: 'Scheduled', value: 1 },
    { text: 'In Progress', value: 2 },
    { text: 'Delivered', value: 3 },
    { text: 'Invoiced', value: 4 }
  ];
  onRowUpdated(event: any) {
    const updatedRowData = event.data; // The updated row data
    this.submitDataToBackend(updatedRowData);
  }
  submitDataToBackend(updatedRowData: any) {
    // Prepare the data to be sent to the backend for the updated row
    // const dataToSubmit = {
    //   instructionProductId: updatedRowData.instructionProductId,
    //   transporterId: updatedRowData.Transporter.TransporterId,
    //   scheduledDate: updatedRowData.ScheduledDate
    // };
    const dataToSubmit = {
      instructionId: this.instructionId, // Provide the correct instructionId
      transporterProducts: this.savedTransporterProducts.map((selectedProduct) => ({
        instructionProductId: selectedProduct.instructionProductId,
        scheduledDate: selectedProduct.ScheduledDate.toISOString(),
        transporterId: selectedProduct.transporterId,
      })),
    };
    console.log("Data", dataToSubmit);
    // Assuming you have a service method to send data to the backend
    // this.instructionService.addTransportInstruciton(dataToSubmit).subscribe(
    //   (response) => {
    //     // Handle a successful response from the backend
    //     console.log('Data saved successfully:', response);
    //   },
    //   (error) => {
    //     // Handle any errors from the backend
    //     console.error('Error saving data:', error);
    //   }
    // );
    // dataToSubmit.instructionProductId, 
    this.instructionService.addTransportInstruciton(dataToSubmit).subscribe(
      (response) => {
        // Handle a successful response from the backend
        console.log('Data saved successfully:', response);
        // updatedRowData.isVisible = false;
      },
      (error) => {
        // Handle any errors from the backend
        console.error('Error saving data:', error);
      }
    );

  }
  calculateTotalQuantity() {
    // Initialize total quantity to 0
    this.totalQuantity = 0;
    this.totalPrice = 0;

    this.totalProducts = this.instruction.Instruction.ProductList.length;
    console.log("something should be printed on conlsole ", this.instruction?.Instruction.ProductList);

    this.instruction.Instruction.ProductList.forEach((product: any) => {
      // Log the product quantity
      console.log(product.productQuantity);

      // Calculate the product price for the current product
      const productPrice = product.productPrice || 0; // Use 0 if product price is undefined
      const productQuantity = product.productQuantity || 0; // Use 0 if product quantity is undefined

      this.totalPrice += productPrice * productQuantity;
      this.totalQuantity += product.productQuantity;      
    });
    console.log("total no of products in prod list  here is ", this.instruction.Instruction.ProductList.length)
    console.log("quantity here is ", this.totalQuantity)
    console.log("total price here is ", this.totalPrice);

    this.instruction.Instruction.TotalQuantity = this.totalQuantity;
    this.instruction.Instruction.TotalProducts = this.totalProducts;
    this.instruction.Instruction.TotalPrice = this.totalPrice;
    this.instruction.Instruction.Status = this.statusOptions.find(x => x.value == this.instruction.Status)?.text;
    // this.gridData = [
    //   {
    //     // TotalQuantity: this.totalQuantity,
    //     TotalProducts: this.totalProducts,
    //   }
    // ];
    console.log("total no of products again", this.gridData[0].TotalProducts)
  }
  updateInstruction() {
    this.instructionService.getAllUpdateInstructionChangeStatus().subscribe(
      (updatedInstructions) => {

        console.log('Updated instructions:', updatedInstructions);
        // this.router.navigate(['/view-details',this.instructionId]);
        this.ngOnInit();
        this.router.navigate([], { relativeTo: this.route });

      },
      (error) => {

        console.error('Error fetching updated instructions:', error);
      },

    );
  }
}

