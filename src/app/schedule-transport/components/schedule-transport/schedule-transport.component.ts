import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StatusEnum } from 'src/app/status-enum';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { InstructionService } from 'src/app/instruction-services/instruction.service';
import { Instruction } from 'src/app/instruction';
import { Product } from 'src/app/product';
@Component({
  selector: 'app-schedule-transport',
  templateUrl: './schedule-transport.component.html',
  styleUrls: ['./schedule-transport.component.css']
})

export class ScheduleTransportComponent implements OnInit {
  @Input() products: Product[] = [];
  @Output() productsChange = new EventEmitter<Product[]>();
  @Input() instruction: any;
  instructionClientName: string = "";
  instructionId?: number;
  totalQuantity: number = 0;
  totalProducts: number = 0;
  initialScheduledDate: Date = new Date();
  toScheduleProducts: any;
  // gridData: { TotalProducts: number }[] = [{TotalProducts: 0} ];
  statusOptions: { text: string, value: StatusEnum }[] = [
    { text: 'Pending', value: 0 },
    { text: 'Scheduled', value: 1 },
    { text: 'In Progress', value: 2 },
    { text: 'Delivered', value: 3 },
    { text: 'Invoiced', value: 4 }
  ];

  transporters: { id: number, name: string }[] = [];
  productName: any[] = [];
  dateBoxValue: Date = new Date();
  constructor(private route: ActivatedRoute,
    private instructionService: InstructionService, private router: Router,) {
  }

  ngOnInit(): void {

    // this.route.queryParams.subscribe((queryParams) => {
    //   const instructions = queryParams['instructions'];
    //   if (instructions) {
    //     this.instruction = JSON.parse(instructions);
    //   }
    // }); 

    this.route.params.subscribe(params => {
      this.instructionId = params['id'];
      this.toScheduleProducts = this.instruction.Instruction.ProductList.filter((x: any) => x.transporterName == null || x.transporterName == '');
      if (this.instructionId) {
        this.getTransporters();
        //fetch transporter list


        this.productName = this.instruction.Instruction.ProductList.map((product: any) => ({
          Product: {
            ProductName: product.productName,
            ProductId: product.productId,
            TransporterName: product.transporterName
          }
        }));


        // this.instructionService.getInstructionById(this.instructionId).subscribe(
        //   (instructionApiResponse: any) => {
        //     console.log('API Response:', instructionApiResponse);
        //     const instruction = this.instructionService.transformGetInstructionByIdApiResponse(instructionApiResponse);

        // Filter out products with allocated transporters
        // if (this.instruction && this.instruction.Instruction && this.instruction.Instruction.ProductList) {
        //   this.instruction.Instruction.ProductList = this.instruction.Instruction.ProductList.filter((product: any) => {
        //     return !product.transporterName;
        //   });
        // }

        this.instructionClientName = this.instruction.Instruction.ClientName;
        console.log("get by id got", this.instruction.Instruction.ProductList);
        this.calculateTotalQuantity();
        //   },
        //   error => {
        //     console.error('Error fetching instruction:', error);
        //   }
        // );
      }
    });
  }

  getTransporters() {
    this.instructionService.getAllTransporters().subscribe((transportersApiResponse: any) => {
      this.transporters = transportersApiResponse;
    });
  }
  onRowUpdated(event: any) {
    const updatedRowData = event.data; // The updated row data
    this.submitDataToBackend(updatedRowData);
  }
  submitDataToBackend(updatedRowData: any) {
    // Prepare the data to be sent to the backend for the updated row
    const dataToSubmit = {
      instructionProductId: updatedRowData.instructionProductId,
      transporterId: updatedRowData.transporterId,
      scheduledDate: updatedRowData.ScheduledDate.toISOString()
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
    this.instructionService.addTransportInstruciton(dataToSubmit.instructionProductId, dataToSubmit).subscribe(
      {
        next: (response) => {
          // Handle a successful response from the backend
          console.log('Data saved successfully:', response);
          this.toScheduleProducts = this.toScheduleProducts.filter((x: any) => x.transporterId == null || x.transporterId == '');
          this.productsChange.emit();           ////////////////
        },
        error: (error) => {
          // Handle any errors from the backend
          console.error('Error saving data:', error);
        }
      }
    );

  }
  // onScheduledDateChanged(newDate: Date, product: any) {
  //   // Handle the scheduling date change here and update the product's scheduled date
  //   product.scheduledDate = newDate;
  // }
  calculateTotalQuantity() {
    // Initialize total quantity to 0
    this.totalQuantity = 0;
    this.totalProducts = this.instruction.Instruction.ProductList.length;
    console.log("something should be printed on conlsole ", this.instruction.Instruction.ProductList);

    this.instruction.Instruction.ProductList.forEach((product: any) => {
      // Log the product quantity
      console.log(product.productQuantity);

      this.totalQuantity += product.productQuantity;
    });
    console.log("total no of products in prod list  here is ", this.instruction.Instruction.ProductList.length)
    console.log("quantity here is ", this.totalQuantity)
    this.instruction.TotalQuantity = this.totalQuantity;
    this.instruction.TotalProducts = this.totalProducts;
    // this.gridData = [
    //   {
    //     // TotalQuantity: this.totalQuantity,
    //     TotalProducts: this.totalProducts,
    //   }
    // ];
    // console.log("total no of products again",this.gridData.TotalProducts)
    console.log("instruction scheduled product list ", this.instruction.Instruction.ProductList);
  }
  updateInstruction() {
    this.instructionService.getAllUpdateInstructionChangeStatus().subscribe(
      (updatedInstructions) => {

        console.log('Updated instructions:', updatedInstructions);
        this.toScheduleProducts = this.toScheduleProducts.filter((x: any) => x.transporterName == null || x.transporterName == '');
        this.productsChange.emit();
      },
      (error) => {
        console.error('Error fetching updated instructions:', error);
      },
    );
  }
  backToInstruction(){
    this.router.navigate(['createInstruction']);
  }
}
