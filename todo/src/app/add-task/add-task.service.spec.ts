import { TestBed, inject } from '@angular/core/testing';

import { AddTaskService } from './add-task.service';

describe('AddTaskService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddTaskService]
    });
  });

  it('should be created', inject([AddTaskService], (service: AddTaskService) => {
    expect(service).toBeTruthy();
  }));
});
