let imposto = localStorage.getItem('imposto') /100;
let lucro = localStorage.getItem('lucro') /100;

let analistaJR = localStorage.getItem('analistaJR');
let analistaSr = localStorage.getItem('analistaSr');
let especialista = localStorage.getItem('especialista');

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
function saveDataToLocalStorage() {
        
    

    localStorage.setItem("imposto", document.getElementById("imposto").value);
    localStorage.setItem("lucro", document.getElementById("lucro").value);
    localStorage.setItem("analistaJR", document.getElementById("analistaJR").value);
    localStorage.setItem("analistaSr", document.getElementById("analistaSr").value);
    localStorage.setItem("especialista", document.getElementById("especialista").value);

    window.location.href = "index.html";
    window.print();
    
}

function limpar(){
    document.getElementById('numServidoresFisicos').value = "";
    document.getElementById('numeroColaboradores').value="";
    document.getElementById('numeroSistemasUtilizados').value = "";
    document.getElementById('numeroFiliais').value = "";
    document.getElementById('possuiPlanoEstrategico') = 0;

}
