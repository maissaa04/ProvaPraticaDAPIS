const { request, response } = require('express')
const express = require('express')
const exphbs = require('express-handlebars')
const { Connection } = require('mysql2/typings/mysql/lib/Connection')
const PORT = 3333
//Importar o módulo conn para as operações com o banco

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

//Middleware para arquivos estáticos


app.get('/', (request, response)=>{
  return response.render('home')
});

app.get('/cadastrar', (request, response) => {
  const sql = `SELECT * FROM tb_livros`;
  conn.query(sql, (error, result) => {
      if (error) {
         console.log(error)
      };

      const livros = result;
      response.render('cadastro', { livros })
    })
});


app.post('/cadastrar', (request, response) => {
  const { titulo, categoria, descricao, preco, quantidade} = request.body;

  const sql = `INSERT INTO tb_livro (titulo, categoria, descricao, preco, quantidade),
  ('${titulo}', '${categoria}', '${descricao}', '${preco}','${quantidade})`;
  conn.query(sql, (error, result) => {
    if (error) {
      console.error(error);
    }
    return response.redirect('cadastrar')
  })
});


const conn = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'sen@iDev77!'
})

conn.connect(function(error){
  if(error){
    console.log(erro)
    return
  }
  console.log('MYSQL CONECTADO')
  app.listen(PORT, ()=>{
    console.log(`servidor rodando na porta ${PORT}`)
  })
})

app.listen(PORT, ()=>{
  console.log(`Servidor rodando na porta ${PORT}`)
})

