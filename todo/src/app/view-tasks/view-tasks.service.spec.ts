import { TestBed, inject } from '@angular/core/testing';

import { ViewTasksService } from './view-tasks.service';

describe('ViewTasksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewTasksService]
    });
  });

  it('should be created', inject([ViewTasksService], (service: ViewTasksService) => {
    expect(service).toBeTruthy();
  }));
});
