import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import createWatchlistModel from './watchlist.js';
import createUserModel from './user.js';

dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: false,
});

const Watchlist = createWatchlistModel(sequelize);
const User = createUserModel(sequelize);

(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connected ✅');
    await sequelize.sync();
  } catch (error) {
    console.error('❌ Unable to connect to the database:', error);
  }
})();

export { sequelize, Watchlist, User };