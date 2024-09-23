import { CommonModule, } from '@angular/common';
import { Component, } from '@angular/core';
import { FormsModule, } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { provideAnimations } from '@angular/platform-browser/animations';



@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [CalendarModule, FormsModule, CommonModule],
  templateUrl: './cta.component.html',
  styleUrl: './cta.component.scss',
  providers: [
    provideAnimations()
  ],
})
export class CtaComponent {
  startDate: Date | undefined;
  endDate: Date | undefined;
  minDateStart: Date = new Date();
  minDateEnd: Date | undefined;


  minDateForEndDate(): Date{
    let date: Date;
    if(this.startDate){
      date = new Date(this.startDate);
    }
    else{
      date = new Date();
    }

    date.setDate( date.getDate() + 1 );

    return date;
  }
}
