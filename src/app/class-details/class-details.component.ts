import { Component, Input, OnInit } from '@angular/core';
import { CoursesService } from '../shared/courses.service';
import { EnrollmentsService } from '../shared/enrollments.service';

@Component({
  selector: 'app-class-details',
  templateUrl: './class-details.component.html',
  styleUrls: ['./class-details.component.css']
})



export class ClassDetailsComponent  implements OnInit{
  users = new Array();
  courseDetail = new Array();
  emptyRoster = false;

  @Input()  classId: any;

  constructor(private coursesService: CoursesService, private enrollmentsService: EnrollmentsService) {
    coursesService;
    enrollmentsService;
  }


  ngOnInit(){
    this.enrollmentsService.getStudentsByCourseId(this.classId).then((result: any) => {
        this.users = result;
        for (let i = this.users.length - 1; i >=0; i--) {
          if(this.users[i].role != "S"){
            this.users.splice(i,1)
          }
        }
        this.emptyRoster = this.users.length === 0

    });
    this.coursesService.getCoursesByCourseId(this.classId).then((result: any) => {
      this.courseDetail = ((result.result));
    });
  }
}
