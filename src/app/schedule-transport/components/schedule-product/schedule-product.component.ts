import { Component ,Input} from '@angular/core';
import { Instruction } from 'src/app/instruction';
import { Product } from 'src/app/product';
@Component({
  selector: 'app-schedule-product',
  templateUrl: './schedule-product.component.html',
  styleUrls: ['./schedule-product.component.css']
})
export class ScheduleProductComponent {
  @Input() products?: Product[];
}
