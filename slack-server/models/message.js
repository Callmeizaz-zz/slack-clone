export default (sequelize, DataTypes) => {
  const Message = sequelize.define(
    "message",
    {
      text: {
        type: DataTypes.STRING,
        isNull: false,
      },
    },
    {
      underscored: true,
    }
  );

  Message.associate = (models) => {
    //1:M
    Message.belongsTo(models.Channel, {
      foreignKey: "channelId",
    });

    Message.belongsTo(models.User, {
      foreignKey: "userId",
    });
  };
  return Message;
};
