import { Pipe, PipeTransform } from '@angular/core';
import {User} from '../user/user';

@Pipe({
  name: 'locationFilter'
})
export class LocationFilterPipe implements PipeTransform {

  transform(users: User[] | null, ...locationIds: number[]): User[] | null {
    if(users == null || locationIds == null || locationIds.length == 0) {
      return users;
    }
    return users.filter(item => locationIds.some(id => item.locationId == id));
  }

}
