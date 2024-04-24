let imposto = localStorage.getItem('imposto') /100;
let lucro = localStorage.getItem('lucro') /100;

let analistaJR = localStorage.getItem('analistaJR');
let analistaSr = localStorage.getItem('analistaSr');
let especialista = localStorage.getItem('especialista');


function camposPrechidos(numServioresFisicos,numeroColaboradores,numeroSistemasUtilizados,numeroFiliais,possuiPlanoEstrategioc){
    
    console.log(numServioresFisicos == NaN )
    if((numServioresFisicos == 0 || numeroColaboradores == 0 || numeroSistemasUtilizados == 0 || numeroFiliais == 0 || possuiPlanoEstrategioc == 0) ||(numServioresFisicos == "" || numeroColaboradores == '' || numeroSistemasUtilizados == '' || numeroFiliais == '' || possuiPlanoEstrategioc == '')){
        return false;
    }
    return true; 
}

function camposPrechidosConfiguracoes(){

    /*const imposto = localStorage.getItem("imposto");
    const lucro = localStorage.getItem("lucro");
    const analistaJR = localStorage.getItem("analistaJR");
    const analistaSr = localStorage.getItem("analistaSr");
    const especialista = localStorage.getItem("especialista");*/
    
    console.log(imposto == NaN, imposto )
    if((imposto == 0 || lucro == 0 || analistaJR == 0 || analistaSr == 0 || especialista == 0) 
    ||(imposto == "" || lucro == '' || analistaJR == '' || especialista == '' 
    ||(imposto == null || lucro == null || analistaJR == null || especialista == null ))){

        localStorage.setItem("imposto", 20);
        localStorage.setItem("lucro", 10);
        localStorage.setItem("analistaJR", 150);
        localStorage.setItem("analistaSr", 250);
        localStorage.setItem("especialista", 350);
        
    }
}

function camposPrechidosConfiguracoes(imposto,lucro,analistaJR,analistaSr,especialista){

    
    console.log(imposto == NaN, imposto )
    if((imposto == 0 || lucro == 0 || analistaJR == 0 || analistaSr == 0 || especialista == 0) 
    ||(imposto == '' || lucro == '' || analistaJR == '' || especialista == '' 
    ||(imposto == null || lucro == null || analistaJR == null || especialista == null ))){

        localStorage.setItem("imposto", 20);
        localStorage.setItem("lucro", 10);
        localStorage.setItem("analistaJR", 150);
        localStorage.setItem("analistaSr", 250);
        localStorage.setItem("especialista", 350);
        return false;
        
    }
    return true;
}
function isCamposPrechidosConfiguracoes(imposto,lucro,analistaJR,analistaSr,especialista){

    
    console.log(imposto == NaN, imposto )
    if((imposto == 0 || lucro == 0 || analistaJR == 0 || analistaSr == 0 || especialista == 0) 
    ||(imposto == '' || lucro == '' || analistaJR == '' || especialista == '' 
    ||(imposto == null || lucro == null || analistaJR == null || especialista == null ))){

        return false;
        
    }
    return true;
}
function construirCalculo(){

    
    let numServioresFisicos = parseInt(document.getElementById('numServidoresFisicos').value);
    let numeroColaboradores = parseInt(document.getElementById('numeroColaboradores').value);
    let numeroSistemasUtilizados = parseInt(document.getElementById('numeroSistemasUtilizados').value);
    let numeroFiliais = parseInt(document.getElementById('numeroFiliais').value);
    let possuiPlanoEstrategioc = document.getElementById('possuiPlanoEstrategico').checked ? 1 : 0;
    
    

    camposPrechidosConfiguracoes(imposto,lucro,analistaJR,analistaSr,especialista)

    if(camposPrechidos(numServioresFisicos,numeroColaboradores,numeroSistemasUtilizados,numeroFiliais,possuiPlanoEstrategioc)){

    let resultHorasAnlistaJunior = horasAnlistaJunior(numServioresFisicos,numeroColaboradores,numeroSistemasUtilizados,numeroFiliais,possuiPlanoEstrategioc);
    let resultHorasAnlistaSenior = horasAnlistaSênior(numServioresFisicos,numeroColaboradores,numeroSistemasUtilizados,numeroFiliais,possuiPlanoEstrategioc);
    let resultHorasEspecialista = horasEspecialista(numServioresFisicos,numeroColaboradores,numeroSistemasUtilizados,numeroFiliais,possuiPlanoEstrategioc);
    let resultCustoHH = custoHH(numServioresFisicos,numeroColaboradores,numeroSistemasUtilizados,numeroFiliais,possuiPlanoEstrategioc);
    let resultValorVenda = ValorVenda(numServioresFisicos,numeroColaboradores,numeroSistemasUtilizados,numeroFiliais,possuiPlanoEstrategioc);

    salvarCalculolocalSotrage(resultHorasAnlistaJunior,resultHorasAnlistaSenior,resultHorasEspecialista,resultCustoHH,resultValorVenda);
    
    let valoresDiv = document.getElementById('valores');
        valoresDiv.innerHTML = `
            <p>Horas Anlista Junior: ${localStorage.getItem("HorasAnlistaJuniorF")}</p>
            <p>Horas Anlista Sênior: ${localStorage.getItem("HorasAnlistaSeniorF")}</p>
            <p>Horas Especialista: ${localStorage.getItem("HorasEspecialistaF")}</p>
            <p>Custo HH: ${localStorage.getItem("resultCustoHHF")}</p>
            <p>Valor Venda: ${localStorage.getItem("resultValorVendaF")}</p>
        `;
        var myModal = new bootstrap.Modal(document.getElementById('modalValores'));
        myModal.show();

    }else{
        alert('Preencha todos os campos');
    }    
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
    console.log(imposto)
    return (custoHH(numServioresFisicos,numeroColaboradores,numeroSistemasUtilizados,numeroFiliais,possuiPlanoEstrategioc)/(1-(imposto+lucro)));
}

function gerarPDF() {
    construirCalculo()
    const printWindow = window.open('relatorioModelo.html', '_blank');
    //printWindow.print();
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
