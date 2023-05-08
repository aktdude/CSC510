import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { StatusService } from './status.service';

describe('StatusService', () => {
    let service: StatusService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule, HttpClientTestingModule]
        });
        service = TestBed.inject(StatusService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});