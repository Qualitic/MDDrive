import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { CtaComponent } from './components/cta/cta.component';
import { PrimeNGConfig } from 'primeng/api';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { OfertComponent } from './components/ofert/ofert.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, CtaComponent, AboutUsComponent, OfertComponent, ContactComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'rental-car';

  constructor(private config: PrimeNGConfig) {}

    ngOnInit() {
        this.config.setTranslation({
            accept: 'Akceptuj',
            reject: 'Anuluj',
            //translations
        });
    }


}
