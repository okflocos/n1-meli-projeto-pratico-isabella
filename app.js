const express = require("express")
const app = express()

const index = require("./routes/index")
const tarefas = require("./routes/tarefasRoute")

app.use('/', index)
//colocar o rota tarefas
app.use('/tarefas', tarefas)
//colocar rota do id

module.exports = app
