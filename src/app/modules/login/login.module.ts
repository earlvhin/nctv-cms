import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		LayoutComponent,
		LoginFormComponent,
		LoginComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		LoginRoutingModule
	]
})

export class LoginModule { }
