import { exception } from 'console';
import { Role } from '../models/roles';
import { User } from '../models/user';
import { HelperMethods } from './helpers'; 

export class Game {
  public users: Array<User> = [];
  private helpers: HelperMethods = new HelperMethods();

  constructor() { 
    this.users = []
  } 

  load() : Game{
    let game =  localStorage.getItem('game');
    if(game == null){
      let g = new Game()
      localStorage.setItem('game' , JSON.stringify(g))
      return g;
    }
    return JSON.parse(game)
  }

  save(game: Game){
    localStorage.setItem('game', JSON.stringify(game))
  }

  public creteUser(user: User) {

    if (this.helpers.checkForValidUserData(user)) {

      let role: number;

      if (this.users.length == 0) { // nemame nikoj

        role = this.helpers.getRandom(2);

      }
      else if (this.users.length < 5) { // ima mesto za poveke clenovi

        if (this.users.filter(u => u.role == Role.killer).length > 0) { //imame kiler

          role = Role.civilian;

        }
        else { //nemame kiler

          if (this.users.filter(u => u.role == Role.civilian).length == 4) {
            role = Role.killer;
          }
          else {
            role = this.helpers.getRandom(2);
          }
        }
      }


      //user.role = role;
      this.users.push(user);
      

    }
    else{
      throw(exception("User has invalid data!!"))
    }
    this.save(this);
  }


}
