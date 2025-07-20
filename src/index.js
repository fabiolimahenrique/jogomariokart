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

  (async function principal(params) {
    console.log(
        `🏁🚦 Corrida entre ${jogador1.NOME} e ${jogador2.NOME} começando...\n`
      ); 
  })();