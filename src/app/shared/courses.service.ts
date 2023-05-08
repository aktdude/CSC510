import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {response} from "express";

@Injectable({
    providedIn: 'root'
})
export class CoursesService {
    private statusUrl = '/api/courses';

    constructor(private http: HttpClient) {
    }

    // Get courses by teacher ID.
    getCoursesByTeacherId(): Promise<void | any> {

        return this.http.get(this.statusUrl + '/teacher')
            .toPromise().then(response => response
            )
            .catch(this.error);

    }

    getCoursesByCourseId(id: number): Promise<void | any> {

        return this.http.get(this.statusUrl + '/' + id)
            .toPromise().then(response => response
            )
            .catch(this.error);
    }

    // Get all courses.
    getAllCourses(): Promise<void | any> {

        return this.http.get(this.statusUrl)
            .toPromise().then(response => response
            )
            .catch(this.error);

    }

    // Error handling
    private error(error: any) {
        let message = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(message);
    }
}