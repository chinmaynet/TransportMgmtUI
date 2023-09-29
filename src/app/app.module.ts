import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { UserAuthModule } from './user-auth/user-auth.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms'; //
import { SharedService } from './shared.service';
import { PickupCargoComponent } from './pickup-cargo/components/pickup-cargo/pickup-cargo.component';
import { PickupCargoWelComponent } from './pickup-cargo/components/pickup-cargo-wel/pickup-cargo-wel.component';
import { ScheduleTransportComponent } from './schedule-transport/components/schedule-transport/schedule-transport.component';
import { ScheduleTransportWelComponent } from './schedule-transport/components/schedule-transport-wel/schedule-transport-wel.component';
import { DeliverCargoWelComponent } from './deliver-cargo/components/deliver-cargo-wel/deliver-cargo-wel.component';
import { DeliverCargoComponent } from './deliver-cargo/components/deliver-cargo/deliver-cargo.component';
import { InvoiceInstructionWelComponent } from './invoice-instruction/components/invoice-instruction-wel/invoice-instruction-wel.component';
import { InvoiceInstructionComponent } from './invoice-instruction/components/invoice-instruction/invoice-instruction.component';
import { InstructionWelComponent } from './instruction/components/instruction-wel/instruction-wel.component';
import { AddInstructionComponent } from './instruction/components/add-instruction/add-instruction.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; //http module added!

import { DevExtremeModule, DxTemplateModule , DxDateBoxModule, DxBoxModule} from 'devextreme-angular';
import { DxTextBoxModule, DxAutocompleteModule, DxTextAreaModule, DxNumberBoxModule , DxValidationGroupModule } from 'devextreme-angular';
import { ProductComponent } from './instruction/components/product/product.component';
import { ViewDetailsComponent } from './instruction/components/view-details/view-details.component';
import { TestComponent } from './test/test.component';
import { Service } from './test/service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { ProductGridComponent } from './instruction/components/product-grid/product-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    NavbarComponent,
    PickupCargoComponent,
    PickupCargoWelComponent,
    ScheduleTransportComponent,
    ScheduleTransportWelComponent,
    DeliverCargoWelComponent,
    DeliverCargoComponent,
    InvoiceInstructionWelComponent,
    InvoiceInstructionComponent,
    InstructionWelComponent,
    AddInstructionComponent,
    ProductComponent,
    ViewDetailsComponent,
    TestComponent,
    ProductGridComponent,
    
    
  ],
  imports: [
    HttpClientModule,    //http module
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule, 
    NgbModule,
    FontAwesomeModule,
    UserAuthModule,            //imported user authentication module which has login compont
    DevExtremeModule,DxAutocompleteModule,DxValidationGroupModule,DxTemplateModule,DxDataGridModule,DxButtonModule,DxBoxModule,DxDateBoxModule,DxTextBoxModule,DxTextAreaModule,DxNumberBoxModule
  ],
  providers: [SharedService,Service], // Add the service to providers
  bootstrap: [AppComponent],
  exports:[NavbarComponent]
})
export class AppModule { }
