import UserYupValidator from "../validator/user.yup.validator";

export default class UserFactoryValidator {
  static create() {
    return new UserYupValidator();
  }
}
