import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientModule} from "@angular/common/http";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import { DashboardTeacherComponent } from './dashboard-teacher.component';
import {ClassDetailsComponent} from "../class-details/class-details.component";

describe('DashboardTeacherComponent', () => {
  let component: DashboardTeacherComponent;
  let fixture: ComponentFixture<DashboardTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      declarations: [ DashboardTeacherComponent, ClassDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
