const jogador1 = {
  NOME: "Mario",
  VELOCIDADE: 4,
  MANOBRABILIDADE: 3,
  PODER: 3,
  PONTOS: 0,
};

const jogador2 = {
  NOME: "Luigi",
  VELOCIDADE: 3,
  MANOBRABILIDADE: 4,
  PODER: 4,
  PONTOS: 0,
};

async function rolarDados() {
  return Math.floor(Math.random() * 6) + 1;
}

async function retornaTipoConfronto() {
  let random = Math.random();
  let result;
  switch (true) {
    case random < 0.33:
      result = "RETA";
      break;
    case random < 0.66:
      result = "CURVA";
      break;
    default:
      result = "CONFRONTO";
  }

  return result;
}

/**
 *
 * @param {object} params
 * @param {string} params.nome
 * @param {string} params.tipoRodada
 * @param {string} params.resultadoDado
 * @param {string} params.atributo
 */

async function mostraResultadoRodada(params) {
  console.log(
    `${params.nome} rolou o dado de ${params.tipoRodada} ${
      params.resultadoDado
    } + ${params.atributo} = ${params.resultadoDado + params.atributo}`
  );
}

/**
 *
 * @param {params} object
 * @param {object} jogador1
 * @param {object} jogador2
 */
async function jogar(params) {
  for (let round = 1; round <= 5; round++) {
    console.log(`🏁 Rodada ${round}`);

    let tipo = await retornaTipoConfronto();
    console.log(`Bloco: ${tipo}`);

    let rstDados1 = await rolarDados();
    let rstDados2 = await rolarDados();

    let totalRodada1 = 0;
    let totalRodada2 = 0;

    if (tipo === "RETA") {
      totalRodada1 = rstDados1 + params.jogador1.VELOCIDADE;
      totalRodada2 = rstDados2 + params.jogador2.VELOCIDADE;
      await mostraResultadoRodada({
        nome: params.jogador1.NOME,
        tipoRodada: "Velocidade",
        resultadoDado: rstDados1,
        atributo: params.jogador1.VELOCIDADE,
      });
      await mostraResultadoRodada({
        nome: params.jogador2.NOME,
        tipoRodada: "Velocidade",
        resultadoDado: rstDados2,
        atributo: params.jogador2.VELOCIDADE,
      });
    }
    if (tipo === "CURVA") {
      totalRodada1 = rstDados1 + params.jogador1.MANOBRABILIDADE;
      totalRodada2 = rstDados2 + params.jogador2.MANOBRABILIDADE;
      await mostraResultadoRodada({
        nome: params.jogador1.NOME,
        tipoRodada: "Manobrabilidade",
        resultadoDado: rstDados1,
        atributo: params.jogador1.MANOBRABILIDADE,
      });
      await mostraResultadoRodada({
        nome: params.jogador2.NOME,
        tipoRodada: "Manobrabilidade",
        resultadoDado: rstDados2,
        atributo: params.jogador2.MANOBRABILIDADE,
      });
    }
    if (tipo === "CONFRONTO") {
      let rstForca1 = rstDados1 + params.jogador1.PODER;
      let rstForca2 = rstDados2 + params.jogador2.PODER;
      console.log(
        `${params.jogador1.NOME} confrontou com ${params.jogador2.NOME} `
      );
      await mostraResultadoRodada({
        nome: params.jogador1.NOME,
        tipoRodada: "Poder",
        resultadoDado: rstForca1,
        atributo: params.jogador1.PODER,
      });
      await mostraResultadoRodada({
        nome: params.jogador2.NOME,
        tipoRodada: "Poder",
        resultadoDado: rstForca2,
        atributo: params.jogador2.PODER,
      });

      if (rstForca1 > rstForca2 && params.jogador2.PONTOS > 0) {
        console.log(
          `${params.jogador1.NOME} venceu o confronto! ${params.jogador2.NOME} perdeu 1 ponto`
        );
        params.jogador2.PONTOS--;
      }

      if (rstForca2 > rstForca1 && params.jogador1.PONTOS > 0) {
        console.log(
          `${params.jogador2.NOME} venceu o confronto! ${params.jogador1.NOME} perdeu 1 ponto`
        );
        params.jogador1.PONTOS--;
      }

      console.log(rstForca1 === rstForca2 ? "Confronto empatado." : "");
    }

    if (totalRodada1 > totalRodada2) {
      console.log(`${params.jogador1.NOME} marcou 1 ponto`);
      params.jogador1.PONTOS++;
    } else if (totalRodada2 > totalRodada1) {
      console.log(`${params.jogador2.NOME} marcou 1 ponto`);
      params.jogador2.PONTOS++;
    }

    console.log("***********************************************************");
  }
}

/**
 *
 * @param {params} object
 * @param {object} jogador1
 * @param {object} jogador2
 */
async function vencedor(params) {
  console.log("Resultado final:");
  console.log(`${params.jogador1.NOME}: ${params.jogador1.PONTOS} ponto(s)`);
  console.log(`${params.jogador2.NOME}: ${params.jogador2.PONTOS} ponto(s)`);
  if (params.jogador1.PONTOS > params.jogador2.PONTOS) {
    console.log(`\n${params.jogador1.NOME} venceu a corrida! Parabéns!`);
  } else if (params.jogador2.PONTOS > params.jogador1.PONTOS) {
    console.log(`\n${params.jogador2.NOME} venceu a corrida! Parabéns!`);
  } else {
    console.log("A corrida terminou empatada");
  }
}

(async function principal(params) {
  console.log(
    `🏁🚦 Corrida entre ${jogador1.NOME} e ${jogador2.NOME} começando...\n`
  );
  await jogar({
    jogador1: jogador1,
    jogador2: jogador2,
  });

  await vencedor({
    jogador1: jogador1,
    jogador2: jogador2,
  });
})();
