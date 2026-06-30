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

const CENARIO_01 = {
  id: "01",
  titulo: "Cenário 01",
  nome: "Pré-financiamento Safra",
  tipo: "safra",
  pendente: false,
  simulacao: "83599659",
  banco: "Safra",
  parceiro: "Royal Enfield",
  tipoAnalise: "Pré-analisado",
  valorMoto: 29490,
  entradaSelecionada: 12000,
  opcoesEntrada: [
    { valor: 5898, chance: "menor", label: "Menor chance de aprovação" },
    { valor: 12000, chance: "boa", label: "Boa chance de aprovação", selecionada: true },
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
    valorTotalPago: 45049.92
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
  limiteEmUso: 5788,
  limiteNecessario: 18890.73,
  objetivo: "Na segunda-feira, falar com o gerente para conseguir limite de R$ 18.890,73 para comprar a moto",
  simulacaoEntradas: [
    { entrada: 10000, valorFinanciado: 19490, parcela: 899.56, totalParcelas: 18890.73, exato: true },
    { entrada: 11000, valorFinanciado: 18490, parcela: 853, totalParcelas: 17913, exato: false },
    { entrada: 12000, valorFinanciado: 17490, parcela: 807, totalParcelas: 16940, exato: false, atual: true },
    { entrada: 13000, valorFinanciado: 16490, parcela: 761, totalParcelas: 15980, exato: false },
    { entrada: 14000, valorFinanciado: 15490, parcela: 715, totalParcelas: 15010, exato: false },
    { entrada: 15000, valorFinanciado: 14490, parcela: 669, totalParcelas: 14050, exato: false, equilibrio: true },
    { entrada: 16000, valorFinanciado: 13490, parcela: 623, totalParcelas: 13080, exato: false },
    { entrada: 17000, valorFinanciado: 12490, parcela: 577, totalParcelas: 12120, exato: false },
    { entrada: 18000, valorFinanciado: 11490, parcela: 531, totalParcelas: 11150, exato: false },
    { entrada: 19000, valorFinanciado: 10490, parcela: 484, totalParcelas: 10170, exato: false },
    { entrada: 20000, valorFinanciado: 9490, parcela: 438, totalParcelas: 9200, exato: false }
  ],
  pontoEquilibrio: {
    entrada: 15000,
    texto: "R$ 15.000 de entrada parece um excelente ponto de equilíbrio: parcela cai de R$ 899 para cerca de R$ 670; você reduz bastante o comprometimento mensal; ainda evita financiar um valor muito alto."
  }
};

const CENARIOS = [CENARIO_01, CENARIO_02];

const RECURSOS = [
  { id: "saldo", origem: "Saldo em conta", valor: 8607.56, status: "disponivel" },
  { id: "lenovo", origem: "Venda do Lenovo V14", valor: 2800, status: "anunciado" },
  { id: "monitor", origem: 'Venda do Monitor Samsung 27"', valor: 650, status: "anunciado" },
  { id: "suporte", origem: "Venda do Suporte Articulado", valor: 100, status: "anunciado" },
  { id: "caneta", origem: "Venda da Caneta Baseus", valor: 140, status: "anunciado" },
  { id: "ipad", origem: "Venda do iPad Pro", valor: 1200, status: "anunciado" },
  { id: "teclado", origem: "Venda do Teclado Logitech", valor: 650, status: "anunciado" },
];

const VALORES_RECEBER = [
  { id: "renata", origem: "Renata", valorTotal: 3730, recebido: 500, faltaReceber: 3230 }
];

const PROXIMOS_PASSOS = [
  { id: "limite", tarefa: "Segunda-feira: falar com o gerente para limite de R$ 18.890,73", concluida: false },
  { id: "cartao", tarefa: "Confirmar valor exato no cartão (21x de R$ 899,56)", concluida: false },
  { id: "notebook", tarefa: "Vender notebook", concluida: false },
  { id: "monitor", tarefa: "Vender monitor", concluida: false },
  { id: "caneta", tarefa: "Vender caneta", concluida: false },
  { id: "suporte", tarefa: "Vender suporte", concluida: false },
  { id: "emprego", tarefa: "Aguardar retorno do novo emprego", concluida: false },
  { id: "seguranca", tarefa: "Comprar equipamentos de segurança restantes", concluida: false },
  { id: "ipad", tarefa: "vender ipad", concluida: false },
  { id: "teclado", tarefa: "vender teclado", concluida: false },
];

const META = {
  entrada: 12000,
  valorDisponivelHoje: 8607.56,
  valorPotencialVendas: 3690,
  faltaParaMeta: 3392.44
};

const GASTOS_CARTAO = [
  { mes: "Julho", gastosFixos: 1509.71, economia: 0, observacoes: "Todos os gastos ativos" },
  { mes: "Agosto", gastosFixos: 1200.54, economia: 309.17, observacoes: "Terminam: Invictus e Calvin Klein" },
  { mes: "Setembro", gastosFixos: 1107.69, economia: 92.85, observacoes: "Termina: AirBNB" },
  { mes: "Outubro", gastosFixos: 582.77, economia: 524.92, observacoes: "Terminam: Brooksfield e Botox Renata" },
  { mes: "Novembro", gastosFixos: 476.61, economia: 106.16, observacoes: "Termina: Óculos" },
  { mes: "Dezembro", gastosFixos: 370.45, economia: 106.16, observacoes: "Apenas gastos recorrentes permanecem" }
];

const DATA = {
  projeto: PROJETO,
  objetivo: OBJETIVO,
  cenarios: CENARIOS,
  recursos: RECURSOS,
  valoresReceber: VALORES_RECEBER,
  proximosPassos: PROXIMOS_PASSOS,
  meta: META,
  gastosCartao: GASTOS_CARTAO
};
