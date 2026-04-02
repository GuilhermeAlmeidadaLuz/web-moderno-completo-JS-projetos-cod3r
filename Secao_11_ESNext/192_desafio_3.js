const fs = require("fs");
const path = require("path");

const caminhoDoArquivo = path.join(__dirname, "188_dados.txt");
console.log(caminhoDoArquivo);

const imprimeLinhas = (linhas) => linhas.forEach(linha => console.log(linha))

function lerConteudo(caminho) {
  return new Promise((resolve) => {
    console.log('Iniciou a leitura do arquivo...')
    fs.readFile(caminho, (_, dados) => {    // assíncrono
        let conteudo = dados.toString();
        resolve(conteudo);
    });
    console.log('Terminou a leitura do arquivo...')
  });
}

lerConteudo(caminhoDoArquivo)
    .then(texto => texto.split('\r\n'))
    .then(arrayLinhas => imprimeLinhas(arrayLinhas))
    // .then(console.log)
