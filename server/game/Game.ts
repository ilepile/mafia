import { exception } from 'console';
import { Role } from '../models/roles';
import { User } from '../models/user';
import { HelperMethods } from './helpers';

export class Game {

  public users: Array<User> = [];
  private helpers: HelperMethods = new HelperMethods();

  public creteUser(user: User, users: Array<User>) {

    if (this.helpers.checkForValidUserData(user)) {

      let role: number;

      if (users.length == 0) { // nemame nikoj

        role = this.helpers.getRandom(2);

      }
      else if (users.length < 5) { // ima mesto za poveke clenovi

        if (users.filter(u => u.role == Role.killer).length > 0) { //imame kiler

          role = Role.civilian;

        }
        else { //nemame kiler

          if (users.filter(u => u.role == Role.civilian).length == 4) {
            role = Role.killer;
          }
          else {
            role = this.helpers.getRandom(2);
          }
        }
      }


      user.role = role;
      users.push(user);

    }
    else{
      throw(exception("User has invalid data!!"))
    }

  }


}
