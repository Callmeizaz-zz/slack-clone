export default (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    username: {
      type: DataTypes.STRING,
      unique: true,
      isNull: false,
      validate: {
        isAlphanumeric: {
          args: true,
          msg: "The username can only contain letters and numbers",
        },
        len: {
          args: [3, 20],
          msg: "Username too short must be 3 characters",
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      isEmail: true,
      isNull: false,
      validate: {
        isEmail: {
          isUppercase: true,
          args: true,
          msg: "Invalid Email",
        },
      },
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
