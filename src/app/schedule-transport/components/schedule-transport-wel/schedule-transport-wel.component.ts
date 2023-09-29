import { Component,OnInit } from '@angular/core';
import { faExpand, faEye, faPlus, faPlusCircle, faPlusSquare   } from '@fortawesome/free-solid-svg-icons';
import { Instruction } from 'src/app/instruction';
import { StatusEnum } from 'src/app/status-enum';
import { Router } from '@angular/router';

import { ScheduleTransportService } from 'src/app/schedule-transport-services/schedule-transport.service';
@Component({
  selector: 'app-schedule-transport-wel',
  templateUrl: './schedule-transport-wel.component.html',
  styleUrls: ['./schedule-transport-wel.component.css']
})
export class ScheduleTransportWelComponent implements OnInit { 
  detailsIcon = faEye;
  plusIcon  = faPlusSquare;
  instructions: Instruction[] = [
  ];
  statusOptions: { text: string, value: StatusEnum }[] = [
    { text: 'Pending', value: 0 },
    { text: 'Scheduled', value: 1 },
    { text: 'In Progress', value: 2 },
    { text: 'Delivered', value: 3 },
    { text: 'Invoiced', value: 4 }
  ];
  constructor(private scheduleTransportService: ScheduleTransportService, private router: Router) {  console.log('instruction array',this.instructions); }
  ngOnInit(): void {
    this.scheduleTransportService.getAllPendingInstruction().subscribe({
      next: (apiResponse) => {
        this.instructions = this.scheduleTransportService.transformGetAllPendingInstruction(apiResponse);
      },
      error: (response) => {
        console.log(response);
      }
    });
  }
  // redirectToScheduleTransporter(instructionId: number | undefined) {
  //   if (instructionId) {
  //     // Navigate to the ScheduleTransporterComponent and pass instructions as a query parameter
  //     this.router.navigate(['/scheduleTransporter'], {
  //       queryParams: { instructions: JSON.stringify(this.instructions) },
  //     });
  //   }
  // }
}
