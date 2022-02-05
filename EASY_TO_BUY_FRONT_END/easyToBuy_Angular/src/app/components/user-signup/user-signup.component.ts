import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from 'src/app/entity/user';
import {UserService} from 'src/app/services/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({selector: 'app-user-signup', 
templateUrl: './user-signup.component.html', 
styleUrls: ['./user-signup.component.css']})
export class UserSignupComponent implements OnInit {
    validatingForm : FormGroup;
    user : User = new User();
    onSignInDisabled = false;
    onSignUpDisabled = false;
    disabledSignUp = true;
    disabledSignIn = false
    responseMessage:String="";
    errorMessage: String="";
    userLoggedIn = false;
    userLoggedOut = true;
   
    constructor(private userService : UserService, private activatedRoutes : ActivatedRoute, private route : Router) {}

    ngOnInit() : void {
        this.validatingForm = new FormGroup({
            signupFormModalName: new FormControl('', Validators.required),
            signupFormModalEmail: new FormControl('', Validators.email),
            signupFormModalPassword: new FormControl('', Validators.required),
            subscriptionFormModalName: new FormControl('', Validators.required),
            subscriptionFormModalEmail: new FormControl('', Validators.required)

        });
        this.onSignUpDisabled = false;
        this.onSignInDisabled = true;
        this.disabledSignUp = true;
        this.disabledSignIn = false;
        this.userLoggedIn = false;
        this.userLoggedOut = true;
    }
    get signupFormModalName() {
        return this
            .validatingForm
            .get('signupFormModalName');
    }

    get signupFormModalEmail() {
        return this
            .validatingForm
            .get('signupFormModalEmail');
    }

    get signupFormModalPassword() {
        return this
            .validatingForm
            .get('signupFormModalPassword');
    }
    userSignUp() {
        //this.user.userName(this.validatingForm.get("signupFormModalName").value();
        this.user.userName = this
            .validatingForm
            .get("signupFormModalName")
            .value;
        this.user.useEamil = this
            .validatingForm
            .get("signupFormModalEmail")
            .value;
        this.user.userPassword = this
            .validatingForm
            .get("signupFormModalPassword")
            .value;
        this
            .userService
            .userSignUp(this.user)
            .subscribe(data => this.signUpSuccessMessage(data));
        //this.route.navigate(['cart-details']));
        //this.user = new User();
    }
    signUpSuccessMessage(data){
        this.route.navigate(['cart-details']);
    }
    userSignIn() {
        userName: String= this.user.userName = this
            .validatingForm
            .get("signupFormModalName")
            .value;

        userPassword: String=this.user.userPassword = this
            .validatingForm
            .get("signupFormModalPassword")
            .value;
        this
            .userService
            .userSignIn(this.user.userName, this.user.userPassword)
            //.subscribe(data => this.route.navigate(['cart-details'])
            .subscribe(response => {
                this.signInSuccessMessage(response);
            }, error => {
                console.log(error);
            });

    }
    signInSuccessMessage(response){
        
      if(response!=null){
        this.responseMessage=response.userName;
        this.userLoggedIn = true;
        this.userLoggedOut = false;
        this.route.navigate(['app-account-info']);
      }
      else{
        this.errorMessage="User Name or Password Doest not Exits";
        this.userLoggedIn = false;
        this.userLoggedOut = true;
        
      }
    }
    onSignUp() {
        this.onSignInDisabled = true;
        this.onSignUpDisabled = false;
        this.disabledSignUp = true;
        this.disabledSignIn = false;
        
    }
    onSignIn() {
        this.onSignUpDisabled = true;
        this.onSignInDisabled = false;
        this.disabledSignUp = false;
        this.disabledSignIn = true;
       
    }

}
