import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

	welcome_msg = {
		heading: 'Be your own boss today!',
		body: 'Take over your life, stylized implementation of HTML’s  element for abbreviations and acronyms to show the expanded version on hover.'
	}

	constructor() { }

	ngOnInit(): void {
	}

}