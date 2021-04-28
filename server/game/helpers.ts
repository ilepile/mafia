import { User } from "../models/user";

export class HelperMethods {

  public getRandom(max: number) {
    return Math.floor(Math.random() * max);
  }

  public checkForValidUserData(user: User): boolean {
    return user.firstName != null && user.lastName != null && user.userName != null;
  }
}
