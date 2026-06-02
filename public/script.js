const catalogo = [
    {
        id: 1,
        titulo: "Breaking Bad",
        tipo: "serie",
        ano: 2008,
        generos: ["Drama", "Crime"],
        nota: 9.5,
        assistido: true
    },
    {
        id: 2,
        titulo: "Interestelar",
        tipo: "filme",
        ano: 2014,
        generos: ["Ficção Científica", "Drama"],
        nota: 9.0,
        assistido: true
    },
    {
        id: 3,
        titulo: "The Witcher",
        tipo: "serie",
        ano: 2019,
        generos: ["Fantasia"],
        nota: 8.0,
        assistido: false
    },
    {
        id: 4,
        titulo: "Clube da Luta",
        tipo: "filme",
        ano: 1999,
        generos: ["Drama"],
        nota: 8.8,
        assistido: true
    },
    {
        id: 5,
        titulo: "Dark",
        tipo: "serie",
        ano: 2017,
        generos: ["Mistério", "Ficção"],
        nota: 9.2,
        assistido: false
    },
    {
        id: 6,
        titulo: "Top Gun: Maverick",
        tipo: "filme",
        ano: 2022,
        generos: ["Ação"],
        nota: 8.5,
        assistido: false
    }
];

console.log("CATÁLOGO COMPLETO:");
console.log(catalogo);

console.log("\nPrimeiro título:");
console.log(catalogo[0].titulo);

console.log("\nAno do último item:");
console.log(catalogo[catalogo.length - 1].ano);

console.log("\nSegundo gênero do terceiro item:");

if (catalogo[2].generos.length > 1) {
    console.log(catalogo[2].generos[1]);
} else {
    console.log("O terceiro item possui apenas um gênero.");
}

console.log("\n===== LISTAGEM DE TÍTULOS =====");

catalogo.forEach(item => {
    console.log(`- [${item.tipo}] ${item.titulo} (${item.ano})`);
});

const titulosEmCaixaAlta = catalogo.map(item =>
    item.titulo.toUpperCase()
);

console.log("\n===== TÍTULOS EM MAIÚSCULO =====");
console.log(titulosEmCaixaAlta);

const naoAssistidos = catalogo.filter(item =>
    item.assistido === false
);

console.log("\n===== NÃO ASSISTIDOS =====");
console.log(`Quantidade: ${naoAssistidos.length}`);

const itemDestaque = catalogo.find(item =>
    item.nota >= 9
);

console.log("\n===== PRIMEIRO ITEM COM NOTA >= 9 =====");

if (itemDestaque) {
    console.log(
        `${itemDestaque.titulo} - Nota ${itemDestaque.nota}`
    );
} else {
    console.log("Nenhum item encontrado.");
}

const somaNotas = catalogo.reduce(
    (acumulador, item) => acumulador + item.nota,
    0
);

const mediaGeral = somaNotas / catalogo.length;

const assistidos = catalogo.filter(
    item => item.assistido === true
);

const somaAssistidos = assistidos.reduce(
    (acumulador, item) => acumulador + item.nota,
    0
);

const mediaAssistidos =
    somaAssistidos / assistidos.length;

console.log("\n===== MÉDIAS =====");

console.log(
    `Média Geral: ${mediaGeral.toFixed(2)}`
);

console.log(
    `Média dos Assistidos: ${mediaAssistidos.toFixed(2)}`
);

const existeAnterior2000 = catalogo.some(
    item => item.ano < 2000
);

const todosPossuemGenero = catalogo.every(
    item => item.generos.length > 0
);

console.log("\n===== CHECAGENS =====");

console.log(
    `Existe item anterior ao ano 2000? ${existeAnterior2000}`
);

console.log(
    `Todos possuem pelo menos um gênero? ${todosPossuemGenero}`
);

const quantidadeFilmes = catalogo.filter(
    item => item.tipo === "filme"
).length;

const quantidadeSeries = catalogo.filter(
    item => item.tipo === "serie"
).length;

const ranking = [...catalogo]
    .sort((a, b) => b.nota - a.nota)
    .slice(0, 3);

const output = document.getElementById("output");

output.innerHTML = `
    <h2>Resumo do Catálogo</h2>

    <p><strong>Total de itens:</strong> ${catalogo.length}</p>

    <p><strong>Quantidade de filmes:</strong> ${quantidadeFilmes}</p>

    <p><strong>Quantidade de séries:</strong> ${quantidadeSeries}</p>

    <p><strong>Quantidade de não assistidos:</strong> ${naoAssistidos.length}</p>

    <p><strong>Média geral das notas:</strong> ${mediaGeral.toFixed(2)}</p>

    <h3>Top 3 Maiores Notas</h3>

    <ol>
        ${ranking
        .map(item => `<li>${item.titulo} - Nota ${item.nota}</li>`)
        .join("")}
    </ol>
`;