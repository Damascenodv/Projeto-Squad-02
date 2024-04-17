let imposto = 0.20;
let lucro = 0.10;

let analistaJR = 150.00;
let analistaSr = 250.00;
let especialista = 350.00;

function construirCalculo(){
    let numServioresFisicos = parseInt(document.getElementById('numServidoresFisicos').value);
    let numeroColaboradores = parseInt(document.getElementById('numeroColaboradores').value);
    let numeroSistemasUtilizados = parseInt(document.getElementById('numeroSistemasUtilizados').value);
    let numeroFiliais = parseInt(document.getElementById('numeroFiliais').value);
    let possuiPlanoEstrategioc = document.getElementById('possuiPlanoEstrategico').checked ? 1 : 0;

    let valoresDiv = document.getElementById('valores');
        valoresDiv.innerHTML = `
            <p>Horas Anlista Junior: ${horasAnlistaJunior(numServioresFisicos,numeroColaboradores,numeroSistemasUtilizados,numeroFiliais,possuiPlanoEstrategioc).toFixed(1)}</p>
            <p>Horas Anlista Sênior: ${horasAnlistaSênior(numServioresFisicos,numeroColaboradores,numeroSistemasUtilizados,numeroFiliais,possuiPlanoEstrategioc).toFixed(1)}</p>
            <p>Horas Especialista: ${horasEspecialista(numServioresFisicos,numeroColaboradores,numeroSistemasUtilizados,numeroFiliais,possuiPlanoEstrategioc).toFixed(1)}</p>
            <p>Custo HH: ${custoHH(numServioresFisicos,numeroColaboradores,numeroSistemasUtilizados,numeroFiliais,possuiPlanoEstrategioc).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
            <p>Valor Venda: ${ValorVenda(numServioresFisicos,numeroColaboradores,numeroSistemasUtilizados,numeroFiliais,possuiPlanoEstrategioc).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
        `;
}

function horasAnlistaJunior(numServioresFisicos,numeroColaboradores,numeroSistemasUtilizados,numeroFiliais,possuiPlanoEstrategioc){
    return (numServioresFisicos*4)+(numeroColaboradores*2)+(numeroSistemasUtilizados*4)+(numeroFiliais*8)+(possuiPlanoEstrategioc*8)
}


function horasAnlistaSênior(numServioresFisicos,numeroColaboradores,numeroSistemasUtilizados,numeroFiliais,possuiPlanoEstrategioc){
    return horasAnlistaJunior(numServioresFisicos,numeroColaboradores,numeroSistemasUtilizados,numeroFiliais,possuiPlanoEstrategioc) *0.4
}


function horasEspecialista(numServioresFisicos,numeroColaboradores,numeroSistemasUtilizados,numeroFiliais,possuiPlanoEstrategioc){
    return horasAnlistaJunior(numServioresFisicos,numeroColaboradores,numeroSistemasUtilizados,numeroFiliais,possuiPlanoEstrategioc) *0.3
}

function custoHH(numServioresFisicos,numeroColaboradores,numeroSistemasUtilizados,numeroFiliais,possuiPlanoEstrategioc){
    return (horasAnlistaJunior(numServioresFisicos,numeroColaboradores,numeroSistemasUtilizados,numeroFiliais,possuiPlanoEstrategioc) * analistaJR ) + 
    ( horasAnlistaSênior(numServioresFisicos,numeroColaboradores,numeroSistemasUtilizados,numeroFiliais,possuiPlanoEstrategioc) * analistaSr )+
    ( horasEspecialista(numServioresFisicos,numeroColaboradores,numeroSistemasUtilizados,numeroFiliais,possuiPlanoEstrategioc) * especialista );
}
function ValorVenda(numServioresFisicos,numeroColaboradores,numeroSistemasUtilizados,numeroFiliais,possuiPlanoEstrategioc){
    return (custoHH(numServioresFisicos,numeroColaboradores,numeroSistemasUtilizados,numeroFiliais,possuiPlanoEstrategioc)/(1-(imposto+lucro)));
}

function gerarPDF() {
    window.location.href = "exemplo.html";
    window.print();
}
