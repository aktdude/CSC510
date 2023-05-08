import {Component} from '@angular/core';
import {JsonPipe, KeyValuePipe} from "@angular/common";
import {CoursesService} from '../shared/courses.service';
import {EnrollmentsService} from "../shared/enrollments.service";
import {ClassDetailsComponent} from '../class-details/class-details.component';
import {UsersService} from '../shared/users.service';

class enrollment {
    course_id: number = -1;
    student_id: number = -1;
}


@Component({
    selector: 'app-dashboard-teacher',
    templateUrl: './dashboard-teacher.component.html',
    styleUrls: ['./dashboard-teacher.component.css']
})

export class DashboardTeacherComponent {
    results = new Array();
    buttonCount = 0;
    course_id = 0;
    addStudentBool = false;
    add = new Array();
    showMsg = false;
    showCourseDetails: boolean = false;
    available = new Array();
    hardcode_teacher = new Array;
    teacher_name = "";

    // Function to display the table to add a course.
    toggleShowDetails(course_id: number): void {
        if (this.showCourseDetails == false) {
            this.showCourseDetails = true;
            for (let i = 0; i < this.buttonCount; i++) {
                (document.getElementById('class-details-' + i) as HTMLButtonElement).disabled = true;
            }
            (document.getElementById('close') as HTMLButtonElement).disabled = false;
        }
        this.course_id = course_id;
    }

    showAdd(): void {
        this.enrollmentService.getEnrollableStudents(this.course_id).then((result: any) => {
            this.available = ((result));
            console.log(this.available);
        });
        (document.getElementById('close') as HTMLButtonElement).disabled = true;
        this.addStudentBool = !this.addStudentBool;
    }

    addStudent(isSelected: any, id: any) {
        if (isSelected && !this.add.includes(id)) {
            this.add.push(id);
        } else if (!isSelected && this.add.includes(id)) {
            let index = this.add.indexOf(id);
            this.add.splice(index, id);
        }
    }

    submitEnroll() {
        console.log(this.add)
        for (let i = 0; i < this.add.length; i++) {
            let temp = new enrollment();
            temp.student_id = this.add[i];
            temp.course_id = this.course_id
            let json = JSON.stringify(temp);
            this.enrollmentService.createEnrollment(json).then((result) => {
                console.log(result)
            });
        }
        this.showMsg = true;
    }


    close() {
        if (this.showCourseDetails) {
            this.showCourseDetails = false;
            for (let i = 0; i < this.buttonCount; i++) {
                (document.getElementById('class-details-' + i) as HTMLButtonElement).disabled = false;
            }
            (document.getElementById('close') as HTMLButtonElement).disabled = true;
        }
        this.course_id = 0;
    }

    refresh() {
        window.location.reload();
    }

    constructor(private coursesService: CoursesService, private enrollmentService: EnrollmentsService, private userService: UsersService) {
        this.coursesService.getCoursesByTeacherId().then((result: any) => {
            this.results = ((result.result));
            this.buttonCount = this.results.length;
            console.log(this.results)
        });
        //Hardcode teacher as user with ID 6
        this.userService.getUserById(6).then((result: any) => {
            console.log(result.result);
            this.hardcode_teacher = result.result;
            this.teacher_name = this.hardcode_teacher[0].name;
        });
        this.showCourseDetails = false;
    }
}
