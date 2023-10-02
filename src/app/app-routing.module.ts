import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

import { LoginComponent } from './user-auth/login/login.component';
import { ScheduleTransportWelComponent } from './schedule-transport/components/schedule-transport-wel/schedule-transport-wel.component';
import { ScheduleTransportComponent } from './schedule-transport/components/schedule-transport/schedule-transport.component';
import { InstructionWelComponent } from './instruction/components/instruction-wel/instruction-wel.component';
import { AddInstructionComponent } from './instruction/components/add-instruction/add-instruction.component';
import { ViewDetailsComponent } from './instruction/components/view-details/view-details.component';
const routes: Routes = [
{path:'', component: WelcomePageComponent},
{path:'login', component: LoginComponent},
{path:'welcome', component: WelcomePageComponent},
{path:'createInstruction', component : InstructionWelComponent},
{path :'createNewInstruction', component: AddInstructionComponent},
{path:'scheduleTransport', component : ScheduleTransportWelComponent},
{path:'scheduleTransporter/:id', component: ScheduleTransportComponent},
{path :'view-details/:id', component: ViewDetailsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
