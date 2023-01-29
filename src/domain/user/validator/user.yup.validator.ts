import ValidatorInterface from "../../@shared/validator/validator.interface";

import * as yup from "yup";

import User from "../entity/user";

export default class UserYupValidator implements ValidatorInterface<User> {
  validate(entity: User): void {
    try {
      yup
        .object()
        .shape({
          id: yup.string().required("Id is required"),
          username: yup.string().required("Username is required"),
          email: yup.string().required("Email is required"),
        })
        .validateSync(
          {
            id: entity.id,
            username: entity.username,
            email: entity.email,
          },
          {
            abortEarly: false,
          }
        );
    } catch (errors) {
      const e = errors as yup.ValidationError;
      e.errors.forEach((error) => {
        entity.notification.addError({
          context: "User",
          message: error,
        });
      });
    }
  }
}
