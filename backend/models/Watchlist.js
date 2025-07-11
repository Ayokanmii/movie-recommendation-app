import { DataTypes } from 'sequelize';

const Watchlist = (sequelize) => {
  return sequelize.define('Watchlist', {
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    movieId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    posterPath: {
      type: DataTypes.STRING,
    },
  });
};

export default Watchlist;
