import { Component, OnInit } from '@angular/core';
import { Instruction } from '../../../instruction';
import { InstructionService } from 'src/app/instruction-services/instruction.service';
import { Router } from '@angular/router';
import { faExpand, faEye , faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { StatusEnum } from 'src/app/status-enum';
import { Testmodel } from 'src/app/testmodel';

@Component({
  selector: 'app-instruction-wel',
  templateUrl: './instruction-wel.component.html',
  styleUrls: ['./instruction-wel.component.css']
})
export class InstructionWelComponent  implements OnInit {
  detailsIcon = faEye;
  cellTemplate: any;  
  plusIcon  = faPlusSquare;

  serialNumbers: number[] = [];
  instructions: Instruction[] = [
    // {
    //   Instruction: {
    //     InstructionId: 1,
    //     InstructionDate: new Date("2023-09-19"),
    //     ClientName: "Client A",
    //     PickupAddress: "123 Main St",
    //     DeliveryAddress: "456 Elm St",
    //     ClientId: 101,
    //     ClientList: {
    //       id :1,
    //       name : '"Client A'
    //     },
    //   },
    //   BillingId: 1001,
    //   TotalQuantity: 10,
    //   Status: StatusEnum.InProgress,
    //   ProductCode: 2,
    //   ProductDescription: "Product 1 Description",
    // },
    // {
    //   Instruction: {
    //     InstructionId: 2,
    //     InstructionDate: new Date("2023-09-20"),
    //     ClientName: "Client B",
    //     PickupAddress: "789 Oak St",
    //     DeliveryAddress: "321 Pine St",
    //     ClientId: 102,
    //     ClientList: {
    //       id :2,
    //       name : '"Client B'
    //     },
    //   },
    //   BillingId: 1002,
    //   TotalQuantity: 5,
    //   Status: StatusEnum.Pending,
    //   ProductCode: 1,
    //   ProductDescription: "Product 2 Description",
    // }
  ];
 
  // instructions: Testmodel[] = []

  // StatusEnumLabels = {
  //   [StatusEnum.Pending]: 'Pending',
  //   [StatusEnum.Scheduled]: 'Scheduled',
  //   [StatusEnum.InProgress]: 'InProgress',
  //   [StatusEnum.Delivered]: 'Delivered',
  //   [StatusEnum.Invoiced]: 'Invoiced',
  // };
  // statusOptions = Object.keys(StatusEnum).map((key) => ({
  //   label: StatusEnumLabels[StatusEnum[key]],
  //   value: StatusEnum[key],
  // }));

  constructor(private InstructionService: InstructionService, private router: Router) {  console.log('instruction array',this.instructions); }
  ngOnInit(): void {


    
    // this.InstructionService.getAllInstruction().subscribe({
    //   next: (instructions) => {
    //     this.instructions = instructions;
    //     console.log('instuction array filled by instruction api',instructions);
    //   },
    //   error: (response) => {
    //     console.log('something is wrong here', response);
    //   }
    // });
    // console.log(this.instructions[0].Instruction.InstructionId);
    
    this.InstructionService.getAllInstruction().subscribe({
      next: (apiResponse) => {
        this.instructions = this.InstructionService.transformGetAllApiResponse(apiResponse);
        console.log('instuction array filled by instruction api',this.instructions);
      },
      error: (response) => {
        console.log(response);
      }
    });
    this.serialNumbers = Array.from({ length: this.instructions.length }, (_, i) => i + 1);
  }
  statusOptions: { text: string, value: StatusEnum }[] = [
    { text: 'Pending', value: 0 },
    { text: 'Scheduled', value: 1 },
    { text: 'In Progress', value: 2 },
    { text: 'Delivered', value: 3 },
    { text: 'Invoiced', value: 4 }
  ];
  // getStatusString(statusValue: StatusEnum): string {
  //   switch (statusValue) {
  //     case StatusEnum.Pending:
  //       return 'Pending';
  //     case StatusEnum.Scheduled:
  //       return 'Scheduled';
  //     case StatusEnum.InProgress:
  //       return 'In Progress';
  //     case StatusEnum.Delivered:
  //       return 'Delivered';
  //     case StatusEnum.Invoiced:
  //       return 'Invoiced';
  //     default:
  //       return 'Unknown';
  //   }
  // }
}