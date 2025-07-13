// models/index.js
import sequelize from './sequelize.js';
import User from './user.js';
import Watchlist from './watchlist.js'; // ✅ Add this line

// Test DB connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connected');
    await sequelize.sync(); // Sync models
  } catch (error) {
    console.error('❌ Unable to connect to the database:', error);
  }
})();

// ✅ Export all models
export { User, Watchlist, sequelize };
