const mysql = require('mysql2')

//Configuração e conexão com banco
const conn = mysql.createPool({
  connectionLimit: 10,
  host: '',
  port: '', // É opcional.
  user: '',
  password: '',
  database: '',
})

// É necessário exporta esse modulo