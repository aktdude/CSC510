import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardStudentComponent} from './dashboard-student/dashboard-student.component'
import {DashboardTeacherComponent} from './dashboard-teacher/dashboard-teacher.component';
import {DashboardAdminComponent} from './dashboard-admin/dashboard-admin.component';


const routes: Routes = [{path: 'dashboard-student', component: DashboardStudentComponent}, {
    path: 'dashboard-teacher',
    component: DashboardTeacherComponent
}, {path: 'dashboard-admin', component: DashboardAdminComponent}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}