const { User, Book } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    getSingleUser: async (parent, args) => {
      return User.findOne(args);
    }
  },

  Mutation: {
    createUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No profile with this email found!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);
      return { token, user };
    },
    saveBook: async (parent, args) => {
      const updatedUser = await User.findOneAndUpdate(
        { _id: args._id },
        { $addToSet: { savedBooks: args.book } },
        { new: true, runValidators: true }
      );
      if (!updatedUser) {
        return "Couldn't find user with this id!";
      }
      return updatedUser;
    },
    deleteBook: async (parent, args) => {
      const updatedUser = await User.findOneAndUpdate(
        { _id: args.userId },
        { $pull: { savedBooks: { bookId: args.bookId } } },
        { new: true }
      );
      if (!updatedUser) {
        return "Couldn't find user with this id!";
      }
      return updatedUser;
    }
  }

};

module.exports = resolvers;
