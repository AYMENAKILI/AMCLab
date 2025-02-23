const express = require("express");
const cors = require("cors"); 
const app = express();
const db = require("./models");
const mysql = require('mysql2');

app.use(cors()); //midleware
app.use(express.json());

db.sequelize.sync().then(() => {
  app.listen(5174, () => {
    console.log("Server running on port 5174");

    const db = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: null,
      database: 'amclab'
    });

    db.connect((err) => {
      if (err) {
        console.error('Error connecting to the database:', err);
        return;
      }
      console.log('Connected to the MySQL database.');
    });

    app.post('/getCasInfo', (req, res) => {
      const { AFF_AFF_V_NUM_AFF, CAF_D_DCONV, CAF_D_FCONV } = req.body;

      let query = `
        SELECT dcas.CAS_N_NUMERO, dcas.CAS_D_DEBUT, dcas.CAS_D_FIN
        FROM d_conv_amo_aff daaf
        JOIN d_conv_amo_ass dcas ON daaf.CAF_N_NUMERO = dcas.CAF_CAF_N_NUMERO
        WHERE 1=1
      `;

      let params = [];

      if (AFF_AFF_V_NUM_AFF) {
        query += ' AND daaf.AFF_AFF_V_NUM_AFF = ?';
        params.push(AFF_AFF_V_NUM_AFF);
      }

      if (CAF_D_DCONV) {
        query += ' AND daaf.CAF_D_DCONV = ?';
        params.push(CAF_D_DCONV);
      }

      if (CAF_D_FCONV) {
        query += ' AND daaf.CAF_D_FCONV = ?';
        params.push(CAF_D_FCONV);
      }

      db.query(query, params, (err, results) => {
        if (err) {
          console.error('Error executing query:', err);
          return res.status(500).json({ error: 'Database query error.' });
        }

        res.json(results);
      });
    });
  });
});
