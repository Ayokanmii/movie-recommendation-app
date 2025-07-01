
module.exports = (sequelize, DataTypes) => {
  const Watchlist = sequelize.define('Watchlist', {
    userId: DataTypes.INTEGER,
    movieId: DataTypes.STRING,
    title: DataTypes.STRING,
    poster: DataTypes.STRING
  });
  return Watchlist;
};
