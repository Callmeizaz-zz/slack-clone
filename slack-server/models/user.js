export default (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    username: {
      type: DataTypes.STRING,
      unique: true,
      isNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      isEmail: true,
      isNull: false,
    },
    password: {
      type: DataTypes.STRING,
      isNull: false,
    },
  });

  User.associate = (models) => {
    User.belongsToMany(models.Team, {
      through: "member",
      foreignKey: "userId",
    });
    //N:M
    User.belongsToMany(models.Channel, {
      through: "channel_member",
      foreignKey: "userId",
    });
  };
  return User;
};
