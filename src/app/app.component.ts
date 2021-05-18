import { Component } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  adress: string;

  firstname: string;

  lastname: string;

  visibleSidebar: boolean;

  constructor(
    private primengConfig: PrimeNGConfig,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  submit() {
    this.messageService.add({
      severity: 'info',
      summary: 'Welcome!',
      detail: this.firstname + ' ' + this.lastname
    });
  }
}
