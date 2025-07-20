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
      `${params.nome} rolou o dado de ${params.tipoRodada} ${params.resultadoDado} + ${params.atributo} = ${
        diceResult + attribute
      }`
    );
  }


  (async function principal(params) {
    console.log(
        `🏁🚦 Corrida entre ${jogador1.NOME} e ${jogador2.NOME} começando...\n`
      ); 
  })();