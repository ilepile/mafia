import { exception } from 'console';
import { IGame } from '../Interfaces/IGame';
import { Role } from '../models/roles';
import { User } from '../models/user';
import { HelperMethods } from './helpers'; 

import { LocalStorage } from "node-localstorage";

export class Game {
  public game : IGame;
  private helpers: HelperMethods = new HelperMethods();

  constructor( ) { 
    this.game = <IGame>{}
  } 

  load(localStorage: LocalStorage) : IGame{
    let game =  localStorage.getItem('game');
    if(game == null){
      let g = <IGame>{}
      localStorage.setItem('game' , JSON.stringify(g))
      return g;
    }
    return JSON.parse(game)
  }

  save(game: IGame, localStorage: LocalStorage){
     localStorage.setItem('game', JSON.stringify(game))
  }

  public creteUser(user: User, game: IGame) {

    if (this.helpers.checkForValidUserData(user)) {

      

      if(game.users == undefined){
        game.users = [];
      }
      if (game.users.length == 0) { // nemame nikoj

        user.role = this.helpers.getRandom(2);
        game.users.push(user);

      }
      else if (game.users.length < 5) { // ima mesto za poveke clenovi

        if (game.users.filter(u => u.role == Role.killer).length > 0) { //imame kiler

          user.role = Role.civilian;
 
        } 
        else { //nemame kiler

          if (game.users.filter(u => u.role == Role.civilian).length == 4) {
            user.role = Role.killer;
          }
          else {
            user.role = this.helpers.getRandom(2);
          }
        }
        game.users.push(user);
      }  
    }
    else{
      throw(exception("User has invalid data!!"))
    } 
  } 
}
