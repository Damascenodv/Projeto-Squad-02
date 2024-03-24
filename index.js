let numServioresFisicos = 20;
let numeroColaboradores = 60;
let numeroSistemasUtilizados= 5;
let numeroFiliais= 5;
let possuiPlanoEstrategioc= 1;

let imposto = 0.20;
let lucro = 0.10;

let analistaJR = 150.00;
let analistaSr = 250.00;
let especialista = 350.00;

function construirCalculo(){
    //inserir aqui o vinculo entre os componentes e os 6 paramentros 
}

function horasAnlistaJunior(){
    return (numServioresFisicos*4)+(numeroColaboradores*2)+(numeroSistemasUtilizados*4)+(numeroFiliais*8)+(possuiPlanoEstrategioc*8)
}


function horasAnlistaSênior(){
    return horasAnlistaJunior() *0.4
}


function horasEspecialista(){
    return horasAnlistaJunior() *0.3
}

function custoHH(){
    return (horasAnlistaJunior() * analistaJR ) + 
    ( horasAnlistaSênior() * analistaSr )+
    ( horasEspecialista() * especialista );
}
function ValorVenda(){
    return (custoHH()/(1-(imposto+lucro)));
}
console.log(ValorVenda());