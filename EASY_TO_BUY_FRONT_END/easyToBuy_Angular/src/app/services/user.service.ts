import {Injectable} from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http'
import {Observable, Subject} from 'rxjs';
import { User } from '../entity/user';

@Injectable({providedIn: 'root'})
export class UserService {
    private saveUserSignUp = "http://localhost:9095";
    private getUserSignIn = "http://localhost:9095";
    constructor(private httpClient : HttpClient) {}

    userSignUp(user : object) : Observable < object > {
        return this
            .httpClient
            .post(`${this.saveUserSignUp}/api/user/signUp`, user);
    }

    userSignIn(userName: any, password: any){
        return this
            .httpClient
            .get<User>(`${this.getUserSignIn}/api/user/signIn/${userName}/${password}`);
            
    }

}
