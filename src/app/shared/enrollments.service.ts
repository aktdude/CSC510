import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';

@Injectable({
    providedIn: 'root'
})
export class EnrollmentsService {
    private statusUrl = '/api/enrollments';

    constructor(private http: HttpClient) {
    }

    // Get student enrollments
    getEnrollments(): Promise<void | any> {
        return this.http.get(this.statusUrl)
            .toPromise().then(response => response
            )
            .catch(this.error);

    }


    getEnrollableStudents(course_id: any): Promise<void | any> {
        return this.http.get(this.statusUrl + '/enrollable/students/' + course_id)
            .toPromise().then(response => response)
            .catch(this.error);
    }

    // Get courses that a student can enroll in.
    getEnrollableCourses(): Promise<void | any> {
        return this.http.get(this.statusUrl + '/enrollable')
            .toPromise().then(response => response)
            .catch(this.error);

    }

    createEnrollment(body: any) {
        console.log(body);
        return this.http.post(this.statusUrl, body, { 'headers': { 'content-type': 'application/json' } })
            .toPromise().then(response => response
            )
            .catch(this.error);
    }

    deleteEnrollment(course_id: any, student_id: any) {
        let test: String = this.statusUrl + "?course_id=" + course_id + "&student_id=" + student_id;
        console.log(test);
        return this.http.delete(this.statusUrl + "?course_id=" + course_id + "&student_id=" + student_id)
            .toPromise().then(response => response
            )
            .catch(this.error);
    }

    //Get students by course id
    getStudentsByCourseId(course_id: number): Promise<void | any> {
        return this.http.get(this.statusUrl + '/' + course_id)
            .toPromise().then(response => response
            ).catch(this.error);
    }

    // Error handling
    private error(error: any) {
        let message = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(message);
    }
}