const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let colorIndex = 0;
let intervalId = null;


const trafficLight = (e) => {
    stopAutomatic();
    //Chamando a propriedade do objeto turnOn usando colchetes.
    turnOn[e.target.id]();
}

const nextIndex = () => {
    
    colorIndex < 2 ? colorIndex++ : colorIndex = 0;
  
}


//Função criada em decorrência da função setInterval abaixo
//1º Criação do array de cores
//2º Definição da const color, inicializada no indice 0 (colorIndex);
//3º Inicialização de colorIndex = 0 no escopo global (acima), pois está para mais de 1 função;
//turnOn[color]() é chamando a respectiva cor dentro do objeto;
//nextIndex - função que faz mudar o index no array de cores; 
const changeColor = () => {
    const colors = ['red', 'yellow', 'green']
    const color = colors[colorIndex];
    turnOn[color]();
    nextIndex();
}

const stopAutomatic = () => {
    clearInterval( intervalId );
}

//Objeto com 3 funções, 1 para cada botão
const turnOn = {
    'red': () =>    img.src="./img/vermelho.png",
    'green': () =>  img.src="./img/verde.png",
    'yellow': () => img.src="./img/amarelo.png",
    'automatic': () => intervalId = setInterval (changeColor, 1000)

}

buttons.addEventListener('click', trafficLight);

