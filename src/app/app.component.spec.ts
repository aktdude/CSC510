import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import {By} from "@angular/platform-browser";
import {UsersService} from "./shared/users.service";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
          HttpClientTestingModule,
          HttpClientModule,
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Online Classroom'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    // console.log(app.title);
    expect(app.title).toEqual('Online Classroom');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    // const compiled = fixture.nativeElement as HTMLElement;
    const login = fixture.debugElement.query(By.css('.content' )).query(By.css('.login')).nativeElement
    // console.log(login.innerHTML)
    // expect(login.querySelector('somehting')?.textContent).toContain('Select a User');
    expect(login.innerHTML).toContain('Select a User')
  });
});
