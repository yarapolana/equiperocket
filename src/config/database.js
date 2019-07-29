require('dotenv/config');

module.exports = {
  dialect: 'postgres',
<<<<<<< HEAD
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'bootcamp',
=======
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
>>>>>>> d91610bfee355bc91e178aaecbd4a45fcdf536b4
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
