const PROJETO = {
  nome: "Moto 2026",
  modelo: "Royal Enfield Guerrilla 450",
  versao: "Smoke Silver OP BAS G 2026",
  metaCompra: null
};

const OBJETIVO = {
  valorMoto: 29490,
  entradaDesejada: 12000
};

const DOCUMENTACAO = {
  valorFipe: 29000,
  fipeAproximado: true,
  ipva: 580,
  ipvaPercentual: 2,
  ipvaUf: "DF",
  licenciamento: 106.26,
  custoTotal: 686.26
};

const CENARIO_DISTRIBUICAO = {
  id: "00",
  titulo: "Cenário 01",
  nome: "Distribuição dos cartões",
  tipo: "distribuicao",
  pendente: false,
  prazo: 21,
  entrada: 16000,
  valorNoCartao: 13490,
  parcelaTotal: 809,
  cartoes: [
    { banco: "Banco do Brasil", valor: 11590, parcela: 695, percentual: 85.9 },
    { banco: "Nubank", valor: 1900, parcela: 114, percentual: 14.1 }
  ],
  observacao: "Os valores das parcelas por cartão são aproximados, pois a divisão é proporcional ao valor lançado em cada cartão. Na prática, a maquininha pode gerar diferença de alguns centavos."
};

const CENARIO_01 = {
  id: "01",
  titulo: "Cenário 03",
  nome: "Pré-financiamento Safra",
  tipo: "safra",
  pendente: false,
  simulacao: "83599659",
  banco: "Safra",
  parceiro: "Royal Enfield",
  tipoAnalise: "Pré-analisado",
  valorMoto: 29490,
  entradaSelecionada: 12000,
  entradaDisponivel: true,
  opcoesEntrada: [
    { valor: 5898, chance: "menor", label: "Menor chance de aprovação" },
    { valor: 12000, chance: "boa", label: "Boa chance de aprovação", selecionada: true, entradaAtual: true },
    { valor: 24490, chance: "maior", label: "Maior chance de aprovação" }
  ],
  parcelasMaiorChance: [
    { prazo: 24, parcela: 1128.35 },
    { prazo: 30, parcela: 948.78 },
    { prazo: 36, parcela: 830.08 },
    { prazo: 42, parcela: 750.57 },
    { prazo: 48, parcela: 688.54 }
  ],
  condicoesEscolhidas: {
    prazo: 48,
    parcela: 688.54,
    valorFinanciar: 17490,
    valorTotalPago: 45049.92,
    observacao: "Entrada de R$ 12.000 já disponível na conta"
  }
};

const CENARIO_02 = {
  id: "02",
  titulo: "Cenário 02",
  nome: "Cartão de crédito",
  tipo: "cartao",
  pendente: false,
  prazo: 21,
  parcela: 899.56,
  valorTotal: 18890.73,
  limiteAtual: 15533,
  limiteEmUso: 187.56,
  limiteNecessario: 18890.73,
  objetivo: "Na segunda-feira, falar com o gerente para conseguir limite de R$ 18.890,73 para comprar a moto",
  simulacaoEntradas: [
    { entrada: 10000, valorFinanciado: 19490, parcela: 1352, totalParcelas: 28392, exato: false },
    { entrada: 11000, valorFinanciado: 18490, parcela: 1262, totalParcelas: 26502, exato: false },
    { entrada: 12000, valorFinanciado: 17490, parcela: 1171, totalParcelas: 24591, exato: false },
    { entrada: 13000, valorFinanciado: 16490, parcela: 1081, totalParcelas: 22701, exato: false },
    { entrada: 14000, valorFinanciado: 15490, parcela: 990, totalParcelas: 20790, exato: false },
    { entrada: 15000, valorFinanciado: 14490, parcela: 899.56, totalParcelas: 18890.73, exato: true },
    { entrada: 16000, valorFinanciado: 13490, parcela: 809, totalParcelas: 16989, exato: true, guardado: true },
    { entrada: 17000, valorFinanciado: 12490, parcela: 718, totalParcelas: 15078, exato: false, atual: true },
    { entrada: 18000, valorFinanciado: 11490, parcela: 628, totalParcelas: 13188, exato: false },
    { entrada: 19000, valorFinanciado: 10490, parcela: 537, totalParcelas: 11277, exato: false, melhor: true },
    { entrada: 20000, valorFinanciado: 9490, parcela: 447, totalParcelas: 9387, exato: false }
  ],
  melhorCenario: {
    entrada: 19000,
    valorFinanciado: 10490,
    parcela: 537,
    totalParcelas: 11277,
    texto: "Cenário ideal no cartão: com R$ 19.000 de entrada, a parcela cai para ~R$ 537 (21x) e o total no cartão de crédito fica em ~R$ 11.277 — o caminho mais confortável, alinhado à meta limite do cartão e com menor comprometimento mensal."
  }
};

const CENARIOS = [CENARIO_DISTRIBUICAO, CENARIO_02, CENARIO_01];

const RECURSOS = [
  { id: "saldo", origem: "Saldo em conta", valor: 16000, status: "disponivel" },
  { id: "lenovo", origem: "Venda do Lenovo V14", valor: 1900, status: "vendido" },
  { id: "teclado", origem: "Venda do Logitech MX Keys Mini", valor: 450, status: "vendido" },
  { id: "ssd", origem: "Venda do SSD Kingston Sata 480GB", valor: 350, status: "vendido" },
  { id: "wavlink", origem: "Venda do Adaptador Wavlink HDMI 3.0", valor: 350, status: "anunciado" },
  { id: "caneta", origem: "Venda da Caneta Baseus Stylus Lite Led", valor: 100, status: "vendido" },
  { id: "suporte", origem: "Venda do Suporte Articulado", valor: 100, status: "vendido" },
  { id: "monitor", origem: 'Venda do Monitor Samsung 27"', valor: 500, status: "vendido" },
  { id: "ipad", origem: "Venda do iPad Pro", valor: 1850, status: "vendido" }
];

const VALORES_RECEBER = [
  { id: "renata", origem: "Renata", valorTotal: 3730, recebido: 500, faltaReceber: 3230 },
  { id: "fernando-remedio", origem: "Fernando — Remédio do Victor (3x R$ 147,30)", valorTotal: 441.90, recebido: 441.90, faltaReceber: 0 },
  { id: "fernando-gasolina", origem: "Fernando — Gasolina", valorTotal: 100, recebido: 100, faltaReceber: 0 }
];

const PROXIMOS_PASSOS = [
  { id: "limite", tarefa: "Falar com o gerente para limite de R$ 18.890,73", concluida: true, resultado: "negado" },
  { id: "monitor", tarefa: "Vender Monitor Samsung 27\" (R$ 500)", concluida: true },
  { id: "ipad", tarefa: "Vender iPad", concluida: true },
  { id: "teclado", tarefa: "Vender Logitech MX Keys Mini (R$ 450)", concluida: true },
  { id: "ssd", tarefa: "Vender SSD Kingston 480GB (R$ 350)", concluida: true },
  { id: "notebook", tarefa: "Vender Lenovo V14 (R$ 1.900)", concluida: true },
  { id: "wavlink", tarefa: "Vender Adaptador Wavlink HDMI (R$ 350)", concluida: false },
  { id: "caneta", tarefa: "Vender Caneta Baseus (R$ 100)", concluida: true },
  { id: "suporte", tarefa: "Vender Suporte Articulado (R$ 100)", concluida: true },
];

const META = {
  valorDisponivelHoje: 16000,
  metasEntrada: [
    { id: "minima", icone: "🎯", label: "Meta mínima", valor: 12000 },
    { id: "ideal", icone: "🚀", label: "Meta ideal", valor: 15000 },
    { id: "limite", icone: "🏆", label: "Meta limite do cartão", valor: 19000 }
  ]
};

const HISTORICO_CARTAO_BB = {
  banco: "Banco do Brasil",
  limiteCredito: 15533,
  meses: ["julho", "agosto", "setembro", "outubro"],
  labels: { julho: "Julho", agosto: "Agosto", setembro: "Setembro", outubro: "Outubro" },
  itens: [
    { item: "Oculos de Grau", julho: { valor: 106.16, parcela: "03/06" }, agosto: { valor: 106.16, parcela: "04/06" }, setembro: { valor: 106.16, parcela: "05/06" }, outubro: { valor: 106.16, parcela: "06/06" } },
    { item: "QConcurso", julho: { valor: 35.90, parcela: "06/12" }, agosto: { valor: 35.90, parcela: "07/12" }, setembro: { valor: 35.90, parcela: "08/12" }, outubro: { valor: 35.90, parcela: "09/12" } },
    { item: "Anuidade", julho: { valor: 45.50, parcela: null }, agosto: { valor: 45.50, parcela: null }, setembro: { valor: 45.50, parcela: null }, outubro: { valor: 45.50, parcela: null } },
    { item: "BrooksField", julho: { valor: 439.92, parcela: "09/10" }, agosto: { valor: 439.92, parcela: "10/10" }, setembro: null, outubro: null },
    { item: "Botox", julho: { valor: 85.00, parcela: "05/06" }, agosto: { valor: 85.00, parcela: "06/06" }, setembro: null, outubro: null },
    { item: "Comando", julho: { valor: 498.33, parcela: "02/03" }, agosto: { valor: 498.33, parcela: "03/03" }, setembro: null, outubro: null },
    { item: "Tenis Renata", julho: { valor: 69.97, parcela: "04/04" }, agosto: null, setembro: null, outubro: null },
    { item: "Remedio Victor", julho: { valor: 147.30, parcela: "03/03" }, agosto: null, setembro: null, outubro: null },
    { item: "Drograria", julho: { valor: 16.49, parcela: null }, agosto: null, setembro: null, outubro: null },
    { item: "Ancar", julho: { valor: 20.25, parcela: null }, agosto: null, setembro: null, outubro: null }
  ],
  totais: {
    julho: { soma: 1464.82, limiteDisponivel: 14068.18 },
    agosto: { soma: 1210.81, limiteDisponivel: 14322.19 },
    setembro: { soma: 187.56, limiteDisponivel: 15345.44 },
    outubro: { soma: 187.56, limiteDisponivel: 15345.44 }
  }
};

const HISTORICO_PARCELA_MOTO = {
  meses: ["julho", "agosto", "setembro", "outubro"],
  labels: { julho: "Julho", agosto: "Agosto", setembro: "Setembro", outubro: "Outubro" },
  parcelaMoto: 790,
  salario: 3894.67,
  itens: [
    { item: "Oculos de Grau", julho: { valor: 106.16, parcela: "03/06" }, agosto: { valor: 106.16, parcela: "04/06" }, setembro: { valor: 106.16, parcela: "05/06" }, outubro: { valor: 106.16, parcela: "06/06" } },
    { item: "QConcurso", julho: { valor: 35.90, parcela: "06/12" }, agosto: { valor: 35.90, parcela: "07/12" }, setembro: { valor: 35.90, parcela: "08/12" }, outubro: { valor: 35.90, parcela: "09/12" } },
    { item: "Anuidade", julho: { valor: 45.50, parcela: null }, agosto: { valor: 45.50, parcela: null }, setembro: { valor: 45.50, parcela: null }, outubro: { valor: 45.50, parcela: null } },
    { item: "Apple", julho: { valor: 5.90, parcela: null }, agosto: { valor: 5.90, parcela: null }, setembro: { valor: 5.90, parcela: null }, outubro: { valor: 5.90, parcela: null } },
    { item: "CNPJ", julho: { valor: 63.00, parcela: null }, agosto: { valor: 63.00, parcela: null }, setembro: { valor: 63.00, parcela: null }, outubro: { valor: 63.00, parcela: null } },
    { item: "Google One", julho: { valor: 14.99, parcela: null }, agosto: { valor: 14.99, parcela: null }, setembro: { valor: 14.99, parcela: null }, outubro: { valor: 14.99, parcela: null } },
    { item: "SmartFit", julho: { valor: 144.04, parcela: null }, agosto: { valor: 144.04, parcela: null }, setembro: { valor: 144.04, parcela: null }, outubro: { valor: 144.04, parcela: null } },
    { item: "Cursor", julho: { valor: 106.27, parcela: null }, agosto: { valor: 106.27, parcela: null }, setembro: { valor: 106.27, parcela: null }, outubro: { valor: 106.27, parcela: null } },
    { item: "Spotify", julho: { valor: 15.95, parcela: null }, agosto: { valor: 15.95, parcela: null }, setembro: { valor: 15.95, parcela: null }, outubro: { valor: 15.95, parcela: null } },
    { item: "Apple Music", julho: { valor: 19.90, parcela: null }, agosto: { valor: 19.90, parcela: null }, setembro: { valor: 19.90, parcela: null }, outubro: { valor: 19.90, parcela: null } },
    { item: "PosGraduacao", julho: { valor: 260.00, parcela: "16/24" }, agosto: { valor: 260.00, parcela: "17/24" }, setembro: { valor: 260.00, parcela: "18/24" }, outubro: { valor: 260.00, parcela: "19/24" } },
    { item: "Parcela Fernando", julho: { valor: 813.67, parcela: "15/60" }, agosto: { valor: 813.67, parcela: "16/60" }, setembro: { valor: 813.67, parcela: "17/60" }, outubro: { valor: 813.67, parcela: "18/60" } },
    { item: "Amazon Prime", julho: { valor: 19.90, parcela: null }, agosto: { valor: 19.90, parcela: null }, setembro: { valor: 19.90, parcela: null }, outubro: { valor: 19.90, parcela: null } },
    { item: "BrooksField", julho: { valor: 439.92, parcela: "09/10" }, agosto: { valor: 439.92, parcela: "10/10" }, setembro: null, outubro: null },
    { item: "Botox", julho: { valor: 85.00, parcela: "05/06" }, agosto: { valor: 85.00, parcela: "06/06" }, setembro: null, outubro: null },
    { item: "Comando", julho: { valor: 498.33, parcela: "02/03" }, agosto: { valor: 498.33, parcela: "03/03" }, setembro: null, outubro: null },
    { item: "Amazon", julho: { valor: 49.71, parcela: "01/02" }, agosto: { valor: 49.71, parcela: "02/02" }, setembro: null, outubro: null },
    { item: "Amazon 2", julho: { valor: 52.87, parcela: "01/02" }, agosto: { valor: 52.87, parcela: "02/02" }, setembro: null, outubro: null },
    { item: "Tenis Renata", julho: { valor: 69.97, parcela: "04/04" }, agosto: null, setembro: null, outubro: null },
    { item: "Remedio Victor", julho: { valor: 147.30, parcela: "03/03" }, agosto: null, setembro: null, outubro: null },
    { item: "AirBNB", julho: { valor: 92.85, parcela: "03/03" }, agosto: null, setembro: null, outubro: null },
    { item: "Drograria", julho: { valor: 16.49, parcela: null }, agosto: null, setembro: null, outubro: null },
    { item: "Ancar", julho: { valor: 20.25, parcela: null }, agosto: null, setembro: null, outubro: null },
    { item: "Nubank Credito", julho: { valor: 266.72, parcela: null }, agosto: null, setembro: null, outubro: null },
    { item: "Sorveteria", julho: { valor: 22.95, parcela: null }, agosto: null, setembro: null, outubro: null },
    { item: "Hortifrute", julho: { valor: 31.58, parcela: null }, agosto: null, setembro: null, outubro: null },
    { item: "Eletronica", julho: { valor: 36.00, parcela: null }, agosto: null, setembro: null, outubro: null },
    { item: "Cafe", julho: { valor: 48.02, parcela: null }, agosto: null, setembro: null, outubro: null },
    { item: "Amazon 3", julho: { valor: 2.99, parcela: null }, agosto: null, setembro: null, outubro: null }
  ],
  totais: {
    julho: { gastos: 3087.13, salario: 3894.67, sobra: 807.54, moto: 790, final: 17.54 },
    agosto: { gastos: 2777.01, salario: 3894.67, sobra: 1117.66, moto: 790, final: 327.66 },
    setembro: { gastos: 1651.18, salario: 3894.67, sobra: 2243.49, moto: 790, final: 1453.49 },
    outubro: { gastos: 1651.18, salario: 3894.67, sobra: 2243.49, moto: 790, final: 1453.49 }
  }
};

const DATA = {
  projeto: PROJETO,
  objetivo: OBJETIVO,
  documentacao: DOCUMENTACAO,
  cenarios: CENARIOS,
  recursos: RECURSOS,
  valoresReceber: VALORES_RECEBER,
  proximosPassos: PROXIMOS_PASSOS,
  meta: META,
  historicoCartaoBB: HISTORICO_CARTAO_BB,
  historicoParcelaMoto: HISTORICO_PARCELA_MOTO
};
