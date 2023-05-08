import { Component, OnInit } from '@angular/core';
import { StatusService } from './shared/status.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Online Classroom';
  status = 'UP';

  constructor(private statusService: StatusService) { }
  ngOnInit() {
    //console.log(this.status);
    // this.statusService
    //     .getStatus()
    //     .then((result: any) => {
    //       console.log(result);
    //       this.status = result.status;
    //     });
  }
}
