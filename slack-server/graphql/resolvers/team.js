export const teamResolver = {
  Mutation: {
    createTeam: async (parent, args, { models, user }) => {
      try {
        await models.Team.create({ ...args, owner: user.id });
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
};
