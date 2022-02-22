import { TestBed } from '@angular/core/testing';

import { UserListService } from './user-list.service';

describe('UserListService', () => {
  let service: UserListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a User List with 16 users', (done: DoneFn) => {
    service.getAll().then(users => {
      expect(users).toHaveSize(16);
      done();
    })
  })
});
