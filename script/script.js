const acessorio = { Bolsa: "BS", Chápeu: "CH", Cinto: "CI", Lenço: "LE" };
const roupa = {
    Blazer: "BZ",
    Blusa: "BL",
    "Blusa de frio": "BF",
    Body: "BO",
    Buiquini: "BI",
    Calça: "CA",
    Camisa: "CM",
    Cardigam: "CD",
    Casaquinho: "CS",
    Colete: "CL",
    Conjunto: "CJ",
    Cropped: "CR",
    Jaqueta: "JA",
    Macacão: "MC",
    Macaquinho: "MQ",
    Moleton: "MO",
    Regata: "RG",
    Saia: "SA",
    "Saida de Banho": "SB",
    Saloped: "SL",
    Short: "SH",
    Sobretudo: "SB",
    Top: "TP",
    "T-Shirt": "TS",
    Vestido: "VE",
};
const calcado = { Tênis: "TE" };

const categorias = { acessorio, roupa, calcado };
const catg = { acessorio: "A", roupa: "R", calcado: "C" };

// async function mostraFormula() {
//     const resp = await fetch("../component/formula/formula.html");
//     const html = await resp.text();
//     document.querySelector(".formula").innerHTML = html;
//     return html;
// }

function mudaProdutos() {
    adicionaData();
    const categoria = document.querySelector(
        'input[name="categoria"]:checked'
    ).value;

    document.querySelector(
        ".box-codigo h1"
    ).innerHTML += `<span style="color:green">${catg[categoria]}</span>`;

    document.querySelector(".box-produto .opcoes").innerHTML = "";
    Object.keys(categorias[categoria]).map((produto, index) => {
        document.querySelector(".box-produto .opcoes").innerHTML += `
            <div class="opcao">
                <input
                    type="radio"
                    id="produtoChoice${index}"
                    name="produto"
                    value="${produto}"
                    onclick="selecionaProduto()"
                />
                <label for="produtoChoice${index}">${produto}</label>
            </div>
        `;
    });
}

function selecionaProduto() {
    adicionaData();
    const categoria = document.querySelector(
        'input[name="categoria"]:checked'
    ).value;
    const produto = document.querySelector(
        'input[name="produto"]:checked'
    ).value;

    const sigla =
        `<span style="color:green">${catg[categoria]}</span>` +
        `<span style="color:purple">${categorias[categoria][produto]}</span>`;

    document.querySelector(".box-codigo h1").innerHTML += sigla;

    return;
}

function dataAtualFormatada() {
    let data = new Date(Date.now()),
        dia = data.getDate().toString(),
        diaF = dia.length == 1 ? "0" + dia : dia,
        mes = (data.getMonth() + 1).toString(), //+1 pois no getMonth Janeiro começa com zero.
        mesF = mes.length == 1 ? "0" + mes : mes,
        anoF = String(data.getFullYear()).slice(2, 4);
    return `<span style="color:red";>${anoF}</span><span style="color:blue">${mesF}</span><span style="color:orange">${diaF}</span>`;
}

function adicionaData() {
    document.querySelector(".box-codigo h1").innerHTML =
        "Loja" + dataAtualFormatada();
    return;
}

function copyClipboard() {
    const copyText = document.getElementById("codigo");
    const codigo = copyText.outerText;
    navigator.clipboard.writeText(codigo);
}

// mostraFormula();
mudaProdutos();
