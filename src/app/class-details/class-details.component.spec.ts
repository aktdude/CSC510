import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { ClassDetailsComponent } from './class-details.component';
import {UsersService} from "../shared/users.service";
import {CoursesService} from "../shared/courses.service";

describe('ClassDetailsComponent', () => {
  let component: ClassDetailsComponent;
  let fixture: ComponentFixture<ClassDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
        HttpClientModule,
      ],
      declarations: [ ClassDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassDetailsComponent);
    component = fixture.componentInstance;
    console.log(component);
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
