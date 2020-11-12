import { WindowService } from './services/window/window.service';
import { OnInit, Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', '../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class AppComponent implements OnInit {
  title = 'AngularExample';
  // public innerWidth: any;

  constructor(private windowServ: WindowService) {
    // this.innerWidth = new UserStatus();
  }

  ngOnInit(): void {
    this.windowServ.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])

  onResize(event: any): void {
    this.windowServ.innerWidth = window.innerWidth;
    // alert(this.windowServ.innerWidth);
  }
}
