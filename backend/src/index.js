/*IMPORTS*/
const express = require('express'); 
const cors = require('cors');
const routes = require('./routes');

const app =  express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/*
METODOS HTTP:

    GET: Buscar uma informacao no back-end (Buscar\Listar)
    POST: Criar uma Informacao no back-end
    PUT: Alterar uma informacao no back-end
    DELETE: Deletar uma informacao no back-end
*/

/*
TIPOS DE PARAMETRO:

    QUERY PARAMS: Parametros nomeados enviados na rota apos o simbolo '?' (FILTROS, PAGINACAO)
    ROUTE PARAMS: Parametro para identificar recursos
    REQUEST BODY: Corpo da requisicao usado para criar ou alterar um recurso

*/

/*
TIPOS DE BANCO DE DADOS:

    SQL(Bancos Relacionais):
    noSQL(Bancos Nao Relacionais):

    --------------------------------

    QUERY BUILDER: table('users').select('*').where()
    
*/