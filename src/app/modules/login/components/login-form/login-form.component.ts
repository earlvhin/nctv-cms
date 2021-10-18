import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-login-form',
	templateUrl: './login-form.component.html',
	styleUrls: ['./login-form.component.scss']
})

export class LoginFormComponent implements OnInit {

	login_form = new FormGroup({
		username: new FormControl('', Validators.required),
		password: new FormControl('', Validators.required)
	});

	title_body = {
		title: 'Login',
		body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
	}

	constructor(
		private _form: FormBuilder
	) { }

	ngOnInit(): void {
	}
}