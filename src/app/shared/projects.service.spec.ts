import { TestBed, inject } from '@angular/core/testing';

import { ProjectsService } from './projects.service';

describe('ProjectsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectsService]
    });
  });

  it('should ...', inject([ProjectsService], (service: ProjectsService) => {
    expect(service).toBeTruthy();
  }));
});
