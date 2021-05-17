import Sequelize from "sequelize";
import user from "./user";
import message from "./message";
import channel from "./channel";
import team from "./team";

const sequelize = new Sequelize("slack", "postgres", "user", {
  dialect: "postgres",
  host: "localhost",
  define: {
    underscored: true,
  },
});
const models = {
  User: user(sequelize, Sequelize.DataTypes),
  Team: team(sequelize, Sequelize.DataTypes),
  Message: message(sequelize, Sequelize.DataTypes),
  Channel: channel(sequelize, Sequelize.DataTypes),
};

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
