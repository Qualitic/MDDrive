import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [InputTextareaModule, ButtonModule, InputTextModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
