import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {response} from "express";

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    private usersUrl = '/api/users';

    constructor(private http: HttpClient) {
    }

    // Get all users
    getAllUsers(): Promise<void | any> {
        return this.http.get(this.usersUrl)
            .toPromise().then(response => response
            )
            .catch(this.error);

    }

    getUserById(id: number): Promise<void | any> {
        return this.http.get(this.usersUrl + '/' + id)
            .toPromise().then(response => response)
            .catch(this.error);
    }

    // Error handling
    private error(error: any) {
        let message = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(message);
    }
}
