import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AdminService {
    private statusUrl = '/api/admin';

    constructor(private http: HttpClient) {
    }

    // Add a Course.
    addNewCourse(body: any): Promise<void | any> {
        console.log(body);
        return this.http.post(this.statusUrl + '/addcourse', body, {'headers': {'content-type': 'application/json'}})
            .toPromise().then(response => response
            )
            .catch(this.error);
    }

    // Add a User.
    addNewUser(body: any): Promise<void | any> {
        console.log(body);
        return this.http.post(this.statusUrl + '/adduser', body, {'headers': {'content-type': 'application/json'}})
            .toPromise().then(response => response
            )
            .catch(this.error);
    }

    // Delete a User.
    deleteUser(user_id: any) {
        let test: String = this.statusUrl + '/deleteuser' + "?user_id=" + user_id;
        console.log(test);
        return this.http.delete(this.statusUrl + '/deleteuser' + "?user_id=" + user_id)
            .toPromise().then(response => response
            )
            .catch(this.error);
    }

    deleteCourse(course_id: any) {
        let test: String = this.statusUrl + '/deletecourse' + "?course_id=" + course_id;
        console.log(test);
        return this.http.delete(this.statusUrl + '/deletecourse' + "?course_id=" + course_id)
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