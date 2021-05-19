import bcrypt from "bcrypt";
import _ from "lodash";
import { tryLogin } from "../../auth";

const formatErrors = (err, models) => {
  if (err instanceof models.Sequelize.ValidationError) {
    return err.errors.map((x) => _.pick(x, ["path", "message"]));
  }
  return [{ path: "users", message: "Something went wrong" }];
};

export const UserResolver = {
  Query: {
    getUser: async (parent, { id }, { models }) =>
      await models.User.findOne({ where: { id } }),
    allUsers: async (parent, _, { models }) => await models.User.findAll(),
  },
  Mutation: {
    login: (parent, { email, password }, { models, SECRET, SECRET2 }) =>
      tryLogin(email, password, models, SECRET, SECRET2),
    register: async (parent, { password, ...otherArgs }, { models }) => {
      try {
        if (password.length < 5 || password.length > 50) {
          return {
            ok: false,
            errors: [
              {
                path: "password",
                message: "Password is too short, Must be 5 characters!",
              },
            ],
          };
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = await models.User.create({
          ...otherArgs,
          password: hashedPassword,
        });
        return {
          ok: true,
          user,
        };
      } catch (error) {
        return {
          ok: false,
          errors: formatErrors(error, models),
        };
      }
    },
  },
};
