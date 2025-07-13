// models/watchlist.js
import { DataTypes } from 'sequelize';
import sequelize from './sequelize.js';

const Watchlist = sequelize.define('Watchlist', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  movieId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  title: DataTypes.STRING,
  poster: DataTypes.STRING,
  genre: DataTypes.STRING,
  rating: DataTypes.FLOAT,
});

export default Watchlist;
