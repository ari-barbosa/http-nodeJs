//console.log("Olá node");


let http = require("http"); // importando modulos do node, modulos externos, etc...

let server = http.createServer(function (req, res){ // cria um servidor REQ -> Requisição RES -> resposta
    
    let pagina = req.url; // pega a informação do pagina que o usuário está acessando
    console.log("Pagina: " + pagina);

    //verificando nossa pagina e retornando uma resposta
    if (pagina == "/contato"){ // verifica se a requisição da pagina é "contato"
        res.end(`
        <!DOCTYPE html>
            <html>
                <head>
                    <meta charset="utf-8" />
                    <title>Introdução ao Node JS</title>
                </head>
                <body>
                    <h1>Página de Contato</h1>
                </body>
            </html>
        `);
    } else { // caso nao seja, retorna a página home
        res.end(`
        <!DOCTYPE html>
            <html>
                <head>
                    <meta charset="utf-8" />
                    <title>Introdução ao Node JS</title>
                </head>
                <body>
                    <h1>Página Principal</h1>
                </body>
            </html>
        `);
    }
});

// RODANDO O SERVIDOR
console.log("localhost: 8080");
server.listen(8080);
