import {Component} from '@angular/core';
import {UsersService} from "../shared/users.service";
import {CoursesService} from "../shared/courses.service";
import {AdminService} from "../shared/admin.service";

var md5 = require('md5')

@Component({
    selector: 'app-dashboard-admin',
    templateUrl: './dashboard-admin.component.html',
    styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent {
    createCourseTable: boolean = false;
    createUserTable: boolean = false;
    deleteCourseTable: boolean = false;
    deleteUserTable: boolean = false;
    showMsg: boolean = false;
    users = new Array();
    courses = new Array();
    selectedUser: number = -1;
    selectedCourse: number = -1;
    hardcode_admin = new Array();
    admin_name = "";

    constructor(private usersService: UsersService, private coursesService: CoursesService, private adminService: AdminService) {
        this.usersService.getAllUsers().then((result: any) => {
            console.log(result)
            this.users = ((result.result));
        });
        this.coursesService.getAllCourses().then((result: any) => {
            console.log(result)
            this.courses = ((result.result));
        });
        this.usersService.getUserById(1).then((result) => {
            console.log(result.result);
            this.hardcode_admin = result.result;
            this.admin_name = this.hardcode_admin[0].name;
        });
    }

    // Function to display the table to create a course
    toggleShowTable(): void {
        this.createCourseTable = !this.createCourseTable;
        (document.getElementById('user') as HTMLButtonElement).disabled = true;
        (document.getElementById('delete_course') as HTMLButtonElement).disabled = true;
        (document.getElementById('delete_user') as HTMLButtonElement).disabled = true;

    }

    // Function to display the table to create a user
    toggleShowTable2() {
        this.createUserTable = !this.createUserTable;
        (document.getElementById('course') as HTMLButtonElement).disabled = true;
        (document.getElementById('delete_course') as HTMLButtonElement).disabled = true;
        (document.getElementById('delete_user') as HTMLButtonElement).disabled = true;
    }

    // Function to display the table to delete a course
    toggleShowTable3() {
        this.deleteCourseTable = !this.deleteCourseTable;
        (document.getElementById('course') as HTMLButtonElement).disabled = true;
        (document.getElementById('user') as HTMLButtonElement).disabled = true;
        (document.getElementById('delete_user') as HTMLButtonElement).disabled = true;
    }

    // Function to display the table to delete a course
    toggleShowTable4() {
        this.deleteUserTable = !this.deleteUserTable;
        (document.getElementById('course') as HTMLButtonElement).disabled = true;
        (document.getElementById('user') as HTMLButtonElement).disabled = true;
        (document.getElementById('delete_course') as HTMLButtonElement).disabled = true;
    }

    // Refresh all the tables
    refresh() {
        window.location.reload();
    }

    // Function to create a course
    onClickSubmit(data: {
        course_name: string;
        professor_id: number;
        max_seats: number;
        description: string;
        teaching_method: string;
        credits: number;
        course_term: string;
        department: string;
        days_of_the_week: string;
        class_times: string;
    }) {
        let json = JSON.stringify(data);
        // console.log(json);

        this.adminService.addNewCourse(json).then((result: any) => {
            console.log(result)
        });

        this.showMsg = true;
    }

    // Function to create a user
    onClickSubmit2(data: {
        name: string;
        email: string;
        password: string;
        role: string;
        phone_number: string;
    }) {
        data.password = md5(data.password);
        let json = JSON.stringify(data);
        // console.log(json);

        this.adminService.addNewUser(json).then((result: any) => {
            console.log(result)
        });

        this.showMsg = true;
    }

    // Function to gather the selected id to remove
    gatherUser(id: any) {
        this.selectedUser = id;
    }

    // Function to get the selected course to remove
    gatherCourse(id: any) {
        this.selectedCourse = id;
    }

    // Function to delete a user
    deleteUser() {
        console.log(this.selectedUser);
        this.adminService.deleteUser(this.selectedUser).then((result: any) => {
            console.log(result)
        });
        this.showMsg = true;
    }

    // Function to delete a course
    deleteCourse() {
        console.log(this.selectedCourse);
        this.adminService.deleteCourse(this.selectedCourse).then((result: any) => {
            console.log(result)
        });
        this.showMsg = true;
    }
}
