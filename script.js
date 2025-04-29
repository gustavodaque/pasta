const http = require ('http')

const PORTA = 8000

const server = http.createServer(    (req, res) =>    {
console.log(req)
res.end('uma resposta qualquer')
})