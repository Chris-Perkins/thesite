import * as React from "react";
import { observable } from "mobx";
import Axios from "axios";

class Store {

    constructor() {
        this.upload = this.upload.bind(this);
    }

    upload() {
        this.uploading = true;

        if (this.isCancelling) {
            Axios.post(
                "https://lillyandchriswedding.azurewebsites.net/update-attendant-status",
                {
                    name: this.name,
                    attending: false,
                    overTwentyOne: false,
                    plusOneAttending: false,
                    plusOneOverTwentyOne: false,
                    dietaryRestrictions: "",
                    email: ""
                },
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            ).then((response) => {
                console.log(response);
                this.uploading = false;
                this.signupConfirmed = true;
            }, (error) => {
                console.log(error.response);
                this.uploading = false;
                alert("We could not confirm your attendance. Please try again.\nIf this error persists, contact Chris or Lilly.");
            });
        } else {
            Axios.post(
                "https://lillyandchriswedding.azurewebsites.net/update-attendant-status",
                {
                    name: this.name,
                    attending: true,
                    overTwentyOne: this.over21,
                    plusOneAttending: this.plusOneAttending,
                    plusOneOverTwentyOne: this.plusOneOver21,
                    dietaryRestrictions: this.dietaryRestrictions,
                    email: this.email
                },
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            ).then((response) => {
                console.log(response);
                this.uploading = false;
                this.signupConfirmed = true;
            }, (error) => {
                console.log(error.response);
                this.uploading = false;
                alert("We could not confirm your attendance. Please try again.\nIf this error persists, contact Chris or Lilly.");
            });
        }
    }

    reset() {
        this.signupOpen = false;
        this.plusOneInvited = false;
        this.uploading = false;
        this.signupConfirmed = false;
        this.plusOneAttending = false;
        this.over21 = false;
        this.plusOneOver21 = false;
        this.dietaryRestrictions = "";
        this.email = "";
        this.name = "";
        this.isCancelling = false;
        this.query = "";
    }

    @observable signupOpen = false;
    @observable plusOneInvited = false;
    @observable uploading = false;
    @observable signupConfirmed = false;
    plusOneAttending = false;
    over21 = false;
    plusOneOver21 = false;
    dietaryRestrictions = "";
    @observable email = "";
    @observable name = "";
    isCancelling = false;
    @observable query = "";
}

export const store = new Store();
