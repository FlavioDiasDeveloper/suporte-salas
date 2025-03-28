// Configurações
const linksManutencao = {
    "IA-2.02": "https://app.produttivo.com.br/r/d91a0a57-0d3b-4e23-9f43-f7e43d8a0c66?t=uxSqFdAr8zqGds0L58UsyQsgu4jt-uXxNS4LDU8NemawHhUf8Wi3age",
    "LAB-3.05": "https://exemplo.com/manutencao-lab305-criptografado",
};

const linkTI = "https://docs.google.com/forms/d/e/1FAIpQLSci61oxLs-88LfNgW813mc1MIIWVKs3Lo0zdxivu-Lbfv9wnA/viewform?usp=pp_url&entry.2074073475=";

// Lista completa de salas
const salas = [
    // DEPÓSITOS
    "DEPÓSITO",
    "DEPÓSITO MANUTENÇÃO",
    "DEPÓSITO SEGURANCAS",

    // BLOCO EC
    "EC-1.01", "EC-1.02", "EC-1.03", "EC-1.04",
    "EC-1.CASA DE MÁQUINAS 2",
    "EC-1.CIRCULAÇÃO",
    "EC-1.PÁTIO INTERNO",
    "EC-1.PLATAFORMA METÁLICA",
    "EC-1.RECEPÇÃO/DRIVE",
    "EC-2.01", "EC-2.02", "EC-2.03", "EC-2.04", "EC-2.05", "EC-2.06", "EC-2.07", "EC-2.08",
    "EC-2.HALL",
    "EC-3.01", "EC-3.02", "EC-3.03", "EC-3.04", "EC-3.05", "EC-3.06", "EC-3.07", "EC-3.08", "EC-3.09", "EC-3.10", "EC-3.11", "EC-3.12",
    "EC-4.CASA DE MÁQUINAS 1",

    // BLOCO ED
    "ED-1.LANCHONETE",

    // BLOCO FD
    "FD-01.10", "FD-01.11",
    "FD-1.01", "FD-1.02", "FD-1.03", "FD-1.04", "FD-1.05", "FD-1.06", "FD-1.07", "FD-1.08", "FD-1.09",
    "FD-1.CASA DE MÁQUINAS",
    "FD-1.HALL DA LANCHONETE",
    "FD-1.RECEPÇÃO FUNDAMENTAL",
    "FD-1.REFEITÓRIO FUNDAMENTAL",
    "FD-2.01", "FD-2.02", "FD-2.03", "FD-2.04",
    "FD-2.COZINHA REFEITÓRIO",

    // BLOCO IA
    "IA-1.01", "IA-1.02", "IA-1.03", "IA-1.04", "IA-1.05", "IA-1.06", "IA-1.07", "IA-1.08", "IA-1.09", "IA-1.10", "IA-1.11",
    "IA-1.BIBLIOTECA",
    "IA-1.CASA DE MÁQUINAS",
    "IA-1.FRALDÁRIO",
    "IA-1.RECEPÇÃO INFANTIL (CORREDOR DO PÁTIO)",
    "IA-1.RECEPÇÃO INFANTIL (ENTRADA)",
    "IA-1.RECEPÇÃO INFANTIL (LANCHONETE)",
    "IA-2.01", "IA-2.02", "IA-2.03", "IA-2.04", "IA-2.05", "IA-2.06", "IA-2.07", "IA-2.08",
    "IA-2.HALL ADMINISTRATIVO",

    // BLOCO LV
    "LV - 1.01", "LV - 1.02",
    "LV - 2.01",
    "LV-1.ÁREA TÉCNICA",
    "LV-1.LANCHONETE",
    "LV-1.QUADRA POLIESPORTIVA",
    "LV-2.02",
    "LV-3.01", "LV-3.02", "LV-3.03", "LV-3.04", "LV-3.05", "LV-3.06",
    "LV-3.HALL",
    "LV-4.01", "LV-4.02", "LV-4.03", "LV-4.04", "LV-4.05", "LV-4.06", "LV-4.07",
    "LV-4.HALL",

    // OUTROS ESPAÇOS
    "REFEITÓRIO ANEXO",

    // BLOCO SC
    "SC-1.01", "SC-1.02", "SC-1.03", "SC-1.04", "SC-1.05", "SC-1.06",
    "SC-1.CANTINA",
    "SC-1.COBERTURA",
    "SC-1.COZINHA",
    "SC-1.DEPÓSITO",
    "SC-1.DEPOSITO ESPORTIVO",
    "SC-1.DML",
    "SC-1.ESPERA",
    "SC-1.HALL/RECEPÇÃO",
    "SC-1.LAVAGEM",
    "SC-1.LAVAGEM/COZINHA",
    "SC-1.PÁTIO DE RECREAÇÃO",
    "SC-1.RECEPÇÃO SCHOOL",
    "SC-1.REFEITÓRIO SCHOOL",
    "SC-2.01", "SC-2.02", "SC-2.03", "SC-2.04", "SC-2.05", "SC-2.06", "SC-2.07", "SC-2.08", "SC-2.09", "SC-2.10", "SC-2.11",
    "SC-2.DML",
    "SC-2.HALL",
    "SC-2.WC PCD",
    "SC-3.11", "SC-3.12", "SC-3.13", "SC-3.14", "SC-3.15", "SC-3.16", "SC-3.17", "SC-3.18",
    "SC-3.DML",
    "SC-3.HALL",
    "SC-3.SALA MÁQUINAS (LAB. CIENCIAS)",
    "SC-3.SANIT FEM E MASC",
    "SC-3.WC PCD",
    "SC-4.01", "SC-4.02", "SC-4.03", "SC-4.04", "SC-4.05", "SC-4.06", "SC-4.07", "SC-4.08", "SC-4.09", "SC-4.10", "SC-4.11", "SC-4.12", "SC-4.13", "SC-4.14", "SC-4.15", "SC-4.16",
    "SC-4.BIBLIOTECA",
    "SC-4.ESPERA",
    "SC-4.HALL",
    "SC-4.WC PCD",
    "SC-5.CASA DE MÁQUINAS",
    "SC-5.LAJE DO PAVIMENTO",

    // OUTROS
    "TRIAGEM ALMOXARIFADO"
];

// Elementos DOM
const nomeSalaEl = document.getElementById("nome-sala");
const salaContainer = document.getElementById("sala-container");
const selectSala = document.getElementById("sala-select");
const btnTI = document.getElementById("btn-ti");
const btnManutencao = document.getElementById("btn-manutencao");
const mensagemErro = document.getElementById("mensagem-erro");

// Parâmetros da URL
const urlParams = new URLSearchParams(window.location.search);
let sala = urlParams.get('sala');

// Inicialização
function init() {
    carregarSalas();
    atualizarNomeSala();
    configurarEventos();
}

// Carrega as salas no select
function carregarSalas() {
    salas.forEach(sala => {
        const option = document.createElement("option");
        option.value = sala;
        option.textContent = sala;
        selectSala.appendChild(option);
    });
}

// Atualiza a exibição da sala
function atualizarNomeSala() {
    if (sala) {
        nomeSalaEl.textContent = `Sala: ${sala.toUpperCase()}`;
        salaContainer.style.display = "none";
    } else {
        nomeSalaEl.textContent = "Sala não identificada";
        salaContainer.style.display = "block";
    }
}

// Configura eventos
function configurarEventos() {
    selectSala.addEventListener("change", selecionarSala);
    btnTI.addEventListener("click", () => redirecionar('ti'));
    btnManutencao.addEventListener("click", () => redirecionar('manutencao'));
}

// Redirecionamento
function redirecionar(tipo) {
    mensagemErro.textContent = "";

    if (!sala) {
        mensagemErro.textContent = "Erro: Selecione uma sala antes de continuar.";
        return;
    }

    if (tipo === 'ti') {
        window.location.href = `${linkTI}${sala}`;
    } else if (tipo === 'manutencao') {
        const link = linksManutencao[sala];
        if (link) {
            window.location.href = link;
        } else {
            mensagemErro.textContent = `Erro: Sala ${sala} não possui link de manutenção cadastrado.`;
        }
    }
}

// Seleciona sala
function selecionarSala() {
    const salaSelecionada = selectSala.value;
    if (salaSelecionada) {
        window.location.href = `?sala=${salaSelecionada}`;
    }
}

// Inicia a aplicação
document.addEventListener("DOMContentLoaded", init);