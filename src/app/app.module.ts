import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {DashboardStudentComponent} from './dashboard-student/dashboard-student.component';
import {DashboardTeacherComponent} from './dashboard-teacher/dashboard-teacher.component';
import {ClassDetailsComponent} from './class-details/class-details.component';
import {DashboardAdminComponent} from './dashboard-admin/dashboard-admin.component';
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        DashboardStudentComponent,
        DashboardTeacherComponent,
        ClassDetailsComponent,
        DashboardAdminComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}