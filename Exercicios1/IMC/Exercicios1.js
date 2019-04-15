const app = require("express")

app.get("/api/imc/:peso/:altura", (req, res) => {
    var imc = req.params.peso / (req.params.altura * req.params.altura)
    res.send(imc)
})

app.listen('3000', () => console.log('Serve inicado na porta 3000'))
