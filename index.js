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

    

    let resultHorasAnlistaJunior = horasAnlistaJunior(numServioresFisicos,numeroColaboradores,numeroSistemasUtilizados,numeroFiliais,possuiPlanoEstrategioc);
    let resultHorasAnlistaSenior = horasAnlistaSênior(numServioresFisicos,numeroColaboradores,numeroSistemasUtilizados,numeroFiliais,possuiPlanoEstrategioc);
    let resultHorasEspecialista = horasEspecialista(numServioresFisicos,numeroColaboradores,numeroSistemasUtilizados,numeroFiliais,possuiPlanoEstrategioc);
    let resultCustoHH = custoHH(numServioresFisicos,numeroColaboradores,numeroSistemasUtilizados,numeroFiliais,possuiPlanoEstrategioc);
    let resultValorVenda = ValorVenda(numServioresFisicos,numeroColaboradores,numeroSistemasUtilizados,numeroFiliais,possuiPlanoEstrategioc);

    salvarCalculolocalSotrage(resultHorasAnlistaJunior,resultHorasAnlistaSenior,resultHorasEspecialista,resultCustoHH,resultValorVenda);
    
    let valoresDiv = document.getElementById('valores');
        valoresDiv.innerHTML = `
            <p>Horas Anlista Junior: ${localStorage.getItem("HorasAnlistaJuniorF")}</p>
            <p>Horas Anlista Sênior: ${localStorage.getItem("HorasAnlistaJuniorF")}</p>
            <p>Horas Especialista: ${localStorage.getItem("HorasAnlistaJuniorF")}</p>
            <p>Custo HH: ${localStorage.getItem("resultCustoHHF")}</p>
            <p>Valor Venda: ${localStorage.getItem("resultValorVendaF")}</p>
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

    const printWindow = window.open('relatorioModelo.html', '_blank');

    printWindow.print();
}
function salvarCalculolocalSotrage(resultHorasAnlistaJunior,resultHorasAnlistaSenior,resultHorasEspecialista,resultCustoHH,resultValorVenda){
    localStorage.setItem("HorasAnlistaJuniorF", resultHorasAnlistaJunior.toFixed(1));
    localStorage.setItem("HorasAnlistaSeniorF", resultHorasAnlistaSenior.toFixed(1));
    localStorage.setItem("HorasEspecialistaF", resultHorasEspecialista.toFixed(1));
    localStorage.setItem("resultCustoHHF", resultCustoHH.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
    localStorage.setItem("resultValorVendaF", resultValorVenda.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));

    localStorage.setItem("HorasAnlistaJunior", resultHorasAnlistaJunior);
    localStorage.setItem("HorasAnlistaSenior", resultHorasAnlistaSenior);
    localStorage.setItem("HorasEspecialista", resultHorasEspecialista);
    localStorage.setItem("resultCustoHH", resultCustoHH);
    localStorage.setItem("resultValorVenda", resultValorVenda);

}

function saveDataToLocalStorage() {
        

        localStorage.setItem("imposto", document.getElementById("imposto").value);
        localStorage.setItem("lucro", document.getElementById("lucro").value);
        localStorage.setItem("analistaJR", document.getElementById("analistaJR").value);
        localStorage.setItem("analistaSr", document.getElementById("analistaSr").value);
        localStorage.setItem("especialista", document.getElementById("especialista").value);
    
        window.location.href = "index.html";
        
        
}

function limpar(){
    document.getElementById('numServidoresFisicos').value = "";
    document.getElementById('numeroColaboradores').value="";
    document.getElementById('numeroSistemasUtilizados').value = "";
    document.getElementById('numeroFiliais').value = "";
    document.getElementById('possuiPlanoEstrategico').checked = false;

}
