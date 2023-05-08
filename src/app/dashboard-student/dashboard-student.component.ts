import {Component, OnInit} from '@angular/core';
import {UsersService} from "../shared/users.service";
import {EnrollmentsService} from "../shared/enrollments.service";

class enrollment {
    course_id: number = -1;
    student_id: number = 4;
}

@Component({
    selector: 'app-dashboard-student',
    templateUrl: './dashboard-student.component.html',
    styleUrls: ['./dashboard-student.component.css']
})

export class DashboardStudentComponent {
    results = new Array();
    available = new Array();
    addCourse: boolean = false;
    dropCourse: boolean = false;
    showMsg: boolean = false;
    add = new Array();
    subtract = new Array();
    showCourseDetails: boolean = false;
    hardcode_student = new Array();
    student_name = "";
    buttonCount = 0;
    course_id = 0;

    // Function to display the table to add a course.
    toggleShowDetails(course_id: number): void {
        if (this.showCourseDetails == false) {
            this.showCourseDetails = true;
            for (let i = 0; i < this.buttonCount; i++) {
                (document.getElementById('class-details-' + i) as HTMLButtonElement).disabled = true;
            }
            (document.getElementById('close') as HTMLButtonElement).disabled = false;
        }
        (document.getElementById('add') as HTMLButtonElement).disabled = true;
        (document.getElementById('drop') as HTMLButtonElement).disabled = true;
        this.course_id = course_id;
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
        (document.getElementById('add') as HTMLButtonElement).disabled = false;
        (document.getElementById('drop') as HTMLButtonElement).disabled = false;
    }

    // Function to display the table to add a course.
    toggleShowAdd(): void {
        this.addCourse = !this.addCourse;
        (document.getElementById('add') as HTMLButtonElement).disabled = true;
        (document.getElementById('drop') as HTMLButtonElement).disabled = true;
        for (let i = 0; i < this.buttonCount; i++) {
            (document.getElementById('class-details-' + i) as HTMLButtonElement).disabled = true;
        }
    }

    // Function to display the table to add a course.
    toggleShowDrop(): void {
        this.dropCourse = !this.dropCourse;
        (document.getElementById('add') as HTMLButtonElement).disabled = true;
        (document.getElementById('drop') as HTMLButtonElement).disabled = true;
        for (let i = 0; i < this.buttonCount; i++) {
            (document.getElementById('class-details-' + i) as HTMLButtonElement).disabled = true;
        }
    }

    // Creates an array of all the class ids to add.
    enroll(isSelected: any, id: any) {
        if (isSelected && !this.add.includes(id)) {
            this.add.push(id);
        } else if (!isSelected && this.add.includes(id)) {
            let index = this.add.indexOf(id);
            this.add.splice(index, id);
        }
    }

    drop(isSelected: any, id: any) {
        if (isSelected && !this.subtract.includes(id)) {
            this.subtract.push(id);
        } else if (!isSelected && this.subtract.includes(id)) {
            let index = this.subtract.indexOf(id);
            this.subtract.splice(index, id);
        }
        console.log(this.subtract);
    }

    constructor(private userService: UsersService, private enrollmentService: EnrollmentsService) {
        this.enrollmentService.getEnrollments().then((result) => {
            console.log(result);
            this.results = ((result));
            this.buttonCount = this.results.length;
        });
        this.enrollmentService.getEnrollableCourses().then((result) => {
            console.log(result);
            this.available = ((result));
        });
        this.userService.getUserById(4).then((result) => {
            this.hardcode_student = result.result;
            this.student_name = this.hardcode_student[0].name;
        });
    }

    submitEnroll() {
        console.log(this.add)
        for (let i = 0; i < this.add.length; i++) {
            let temp = new enrollment();
            temp.course_id = this.add[i];
            let json = JSON.stringify(temp);
            this.enrollmentService.createEnrollment(json).then((result) => {
                console.log(result)
            });
        }
        this.showMsg = true;
    }

    submitDrop() {
        console.log(this.subtract)
        for (let i = 0; i < this.subtract.length; i++) {
            this.enrollmentService.deleteEnrollment(this.subtract[i], 4).then((result) => {
                console.log(result)
            });
        }
        this.showMsg = true;
    }

    refresh() {
        window.location.reload();
    }
}
