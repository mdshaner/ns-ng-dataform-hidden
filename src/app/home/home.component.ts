import { Component, OnInit } from "@angular/core";

@Component({
    selector: "Home",
    moduleId: module.id,
    styleUrls: ["./home.component.scss"],
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    formData: any;

    constructor() {
        this.formData = {
            email: "hamster@test.co",
            secret: "itsasecret",
            secretConfirm: "itsasecret"
        }
    }

    ngOnInit(): void {
        // Init your component properties here.
    }
}
