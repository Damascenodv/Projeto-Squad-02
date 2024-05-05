let imposto = localStorage.getItem('imposto') /100;
let lucro = localStorage.getItem('lucro') /100;

let analistaJR = localStorage.getItem('analistaJR');
let analistaSr = localStorage.getItem('analistaSr');
let especialista = localStorage.getItem('especialista');


function camposPrechidos(numServioresFisicos,numeroColaboradores,numeroSistemasUtilizados,numeroFiliais,possuiPlanoEstrategioc){
    //console.log('validando camposPrechidos()')
    let numServpreenchido  = (isNaN(numServioresFisicos) )
    let numColabpreenchido = (isNaN(numeroColaboradores) )
    let numSistpreenchido = (isNaN(numeroSistemasUtilizados) )
    let numFilpreenchido = (isNaN(numeroFiliais) )
    
    if(numServpreenchido || numColabpreenchido || numSistpreenchido || numFilpreenchido ){
        return false;
    }

    return true; 
}
function camposPrechidos(){
    let numServioresFisicos = parseInt(document.getElementById('numServidoresFisicos').value);
    let numeroColaboradores = parseInt(document.getElementById('numeroColaboradores').value);
    let numeroSistemasUtilizados = parseInt(document.getElementById('numeroSistemasUtilizados').value);
    let numeroFiliais = parseInt(document.getElementById('numeroFiliais').value);
    let possuiPlanoEstrategioc = document.getElementById('possuiPlanoEstrategico').checked ? 1 : 0;
    
    //console.log('validando camposPrechidos()')
    let numServpreenchido  = (isNaN(numServioresFisicos) )
    let numColabpreenchido = (isNaN(numeroColaboradores) )
    let numSistpreenchido = (isNaN(numeroSistemasUtilizados) )
    let numFilpreenchido = (isNaN(numeroFiliais) )

    
    if(numServpreenchido || numColabpreenchido || numSistpreenchido || numFilpreenchido ){
        return false;
    }

    return true; 
}

function camposPrechidosConfiguracoes(){
    
    
    //console.log(imposto == NaN, imposto )
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

    
    //console.log(imposto == NaN, imposto )
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

    
    //console.log(imposto == NaN, imposto )
    if((imposto == 0 || lucro == 0 || analistaJR == 0 || analistaSr == 0 || especialista == 0) 
    ||(imposto == '' || lucro == '' || analistaJR == '' || especialista == '' 
    ||(imposto == null || lucro == null || analistaJR == null || especialista == null ))){

        return false;
        
    }
    return true;
}

function calcularObjeto(){
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

    salvarCalculolocalSotrage(resultHorasAnlistaJunior,resultHorasAnlistaSenior,resultHorasEspecialista,resultCustoHH,resultValorVenda,numServioresFisicos,numeroColaboradores,numeroSistemasUtilizados,numeroFiliais,possuiPlanoEstrategioc);
    }else{
        alert('Preencha todos os campos');
    }    
}
window.onload = function(){
    getDados()
}
function carregarDadosBanco(numServioresFisicos,numeroColaboradores,numeroSistemasUtilizados,numeroFiliais,possuiPlanoEstrategioc,impostop,lucrop,analistaJRp,analistaSrp,especialistap){
    if(localStorage.length ==0){
        localStorage.setItem("imposto", impostop);
        localStorage.setItem("lucro", lucrop);
        localStorage.setItem("analistaJR", analistaJRp);
        localStorage.setItem("analistaSr", analistaSrp);
        localStorage.setItem("especialista", especialistap);  
        localStorage.setItem("numServioresFisicos", numServioresFisicos);
        localStorage.setItem("numeroColaboradores", numeroColaboradores);
        localStorage.setItem("numeroSistemasUtilizados", numeroSistemasUtilizados);
        localStorage.setItem("numeroFiliais", numeroFiliais);
        localStorage.setItem("possuiPlanoEstrategioc", possuiPlanoEstrategioc);
    }

}

function calcularObjetoLocalHost(numServioresFisicos,numeroColaboradores,numeroSistemasUtilizados,numeroFiliais,possuiPlanoEstrategioc,impostop,lucrop,analistaJRp,analistaSrp,especialistap){
    
       camposPrechidosConfiguracoes(impostop,lucrop,analistaJRp,analistaSrp,especialistap)
	
   if(camposPrechidos(numServioresFisicos,numeroColaboradores,numeroSistemasUtilizados,numeroFiliais,possuiPlanoEstrategioc)){
   let resultHorasAnlistaJunior = horasAnlistaJunior(numServioresFisicos,numeroColaboradores,numeroSistemasUtilizados,numeroFiliais,possuiPlanoEstrategioc);
     let resultHorasAnlistaSenior = horasAnlistaSênior(numServioresFisicos,numeroColaboradores,numeroSistemasUtilizados,numeroFiliais,possuiPlanoEstrategioc);
     let resultHorasEspecialista = horasEspecialista(numServioresFisicos,numeroColaboradores,numeroSistemasUtilizados,numeroFiliais,possuiPlanoEstrategioc);
     let resultCustoHH = custoHH(numServioresFisicos,numeroColaboradores,numeroSistemasUtilizados,numeroFiliais,possuiPlanoEstrategioc);
     let resultValorVenda = ValorVenda(numServioresFisicos,numeroColaboradores,numeroSistemasUtilizados,numeroFiliais,possuiPlanoEstrategioc);
         console.log(resultHorasAnlistaJunior);
     	 console.log(resultHorasAnlistaSenior);
    	    console.log(resultHorasEspecialista);
    	    console.log(resultCustoHH);
    	    console.log(resultValorVenda);
    	
    	
    	    salvarCalculolocalHost(resultHorasAnlistaJunior,resultHorasAnlistaSenior,resultHorasEspecialista,resultCustoHH,resultValorVenda,numServioresFisicos,numeroColaboradores,numeroSistemasUtilizados,numeroFiliais,possuiPlanoEstrategioc);
    	    }else{
    	     alert('Preencha todos os campos');
    	    }    
    	}


function construirCalculo(){

    
    calcularObjeto()
    if(camposPrechidos()){
    let valoresDiv = document.getElementById('valores');
        valoresDiv.innerHTML = `
            <p>Horas Anlista Junior: ${localStorage.getItem("HorasAnlistaJuniorF")}</p>
            <p>Horas Anlista Sênior: ${localStorage.getItem("HorasAnlistaSeniorF")}</p>
            <p>Horas Especialista: ${localStorage.getItem("HorasEspecialistaF")}</p>
            <p>Custo HH: ${localStorage.getItem("resultCustoHHF")}</p>
            <p>Valor Venda: ${localStorage.getItem("resultValorVendaF")}</p>
        `;
        enviarDadosResultados()
        var myModal = new bootstrap.Modal(document.getElementById('modalValores'));
        myModal.show();
    }    

    
}
function enviarDadosParaServidor(){
    return fetch('http://localhost:8082/Parametros')
    .then(response => response.json())
    .then(data => {
        console.log(data.length); 
       
              
        if(data.length >0){
            calcularObjetoLocalHost(data[0].numServioresFisicos,data[0].numeroColaboradores,data[0].numeroSistemasUtilizados,data[0].numeroFiliais,data[0].possuiPlanoEstrategioc,data[0].imposto,data[0].lucro,data[0].analistaJR,data[0].analistaSr,data[0].especialista)
            enviarDadosParaServidorPut(data[0].codigo)

        }else{
            enviarDadosParaServidorPost()
        }
        
        return data;
    })
    .catch(error => {
        console.error('Erro ao recuperar os dados:', error);
    });

}
function enviarDadosResultados() {
    if (camposPrechidos()) {
        const dados = {
            horasAnlistaSenior: parseFloat(localStorage.getItem("HorasAnlistaSeniorF")),
            horasAnlistaJunior: parseFloat(localStorage.getItem("HorasAnlistaJuniorF")),
            horasEspecialista: parseFloat(localStorage.getItem("HorasEspecialistaF")),
            custoHH: parseFloat(localStorage.getItem("resultCustoHH")),
            valorVenda: parseFloat(localStorage.getItem("resultValorVenda")),
            parametro: {
                codigo: 1,
              
            }
        };

        fetch('http://localhost:8082/HistoricoCalculo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        })
        .then(response => {
            if (response.ok) {
                console.log('Histórico inserido com sucesso!');
            } else {
                console.error('Erro ao enviar os dados:', response.statusText);
            }
        })
        .catch(error => {
            console.error('Erro ao enviar os dados:', error);
        });
    } else {
        alert("Todos os campos devem ser preenchidos!");
    }
}

function getDados(){
    return fetch('http://localhost:8082/Parametros')
    .then(response => response.json())
    .then(data => {
        console.log(data.length); 
       
              
        if(data.length >0){        
            carregarDadosBanco(data[0].numServioresFisicos,data[0].numeroColaboradores,data[0].numeroSistemasUtilizados,data[0].numeroFiliais,data[0].possuiPlanoEstrategioc,data[0].imposto,data[0].lucro,data[0].analistaJR,data[0].analistaSr,data[0].especialista)

        }else{
            enviarDadosParaServidorPost();    
            getDados();
        }
        
        return data;
    })
    .catch(error => {
        console.error('Erro ao recuperar os dados:', error);
    });
}

function enviarDadosParaServidorPut(codigo) {
    if (true) {
        console.log(localStorage)
        const dados = {
            numServioresFisicos: parseInt(localStorage.getItem('numServioresFisicos')),
            numeroColaboradores: parseInt(localStorage.getItem('numeroColaboradores')),
            numeroSistemasUtilizados: parseInt(localStorage.getItem('numeroSistemasUtilizados')),
            numeroFiliais: parseInt(localStorage.getItem('numeroFiliais')),
            possuiPlanoEstrategioc: parseInt(localStorage.getItem('possuiPlanoEstrategico')),
            imposto: parseFloat(localStorage.getItem('imposto')),
            lucro: parseFloat(localStorage.getItem('lucro')),
            analistaJR: parseFloat(localStorage.getItem('analistaJR')),
            analistaSr: parseFloat(localStorage.getItem('analistaSr')),
            especialista: parseFloat(localStorage.getItem('especialista'))
        };
        console.log(dados,localStorage.getItem('numServioresFisicos'))

        fetch('http://localhost:8082/Parametros/'+codigo, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        })
        .then(response => {
            if (response.ok) {
                console.log('Dados atualizados com sucesso!');
            } else {
                console.error('Erro ao enviar os dados:', response.statusText);
            }
        })
        .catch(error => {
            console.error('Erro ao enviar os dados:', error);
        });
    } else {
        alert('Preencha todos os campos antes de enviar.');
    }
}
function enviarDadosParaServidorPost() {

        console.log(localStorage)
        const dados = {
            numServioresFisicos: parseInt(localStorage.getItem('numServioresFisicos')),
            numeroColaboradores: parseInt(localStorage.getItem('numeroColaboradores')),
            numeroSistemasUtilizados: parseInt(localStorage.getItem('numeroSistemasUtilizados')),
            numeroFiliais: parseInt(localStorage.getItem('numeroFiliais')),
            possuiPlanoEstrategioc: parseInt(localStorage.getItem('possuiPlanoEstrategico')),
            imposto: parseFloat(localStorage.getItem('imposto')),
            lucro: parseFloat(localStorage.getItem('lucro')),
            analistaJR: parseFloat(localStorage.getItem('analistaJR')),
            analistaSr: parseFloat(localStorage.getItem('analistaSr')),
            especialista: parseFloat(localStorage.getItem('especialista'))
        };
        console.log(dados,localStorage.getItem('numServioresFisicos'))

        fetch('http://localhost:8082/Parametros', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        })
        .then(response => {
            if (response.ok) {
                console.log('Dados inseridos com sucesso!');
            } else {
                console.error('Erro ao enviar os dados:', response.statusText);
            }
        })
        .catch(error => {
            console.error('Erro ao enviar os dados:', error);
        });
    
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
function gerarPDFoutraPagina() {
    calcularObjeto()
    if(camposPrechidos()){
    const printWindow = window.open('relatorioModelo.html', '_blank'); 
    }
}
function abrirRelatorio() {
    
    var relatorioURL = 'http://localhost:8082/relatorio';

    window.open(relatorioURL);
}
function gerarPDF() {
    //gerarPDFFlutuante()
    abrirRelatorio() 
  
}
function gerarPDFFlutuante() {

    calcularObjeto()
    

    if(camposPrechidos()){
    let conteudo = relatorio();
    let win = window.open('', '', 'height=700,width=700');
    win.document.write(conteudo);
    setTimeout(function(){
        win.print()
    }, 300);

    }
  
}
function salvarCalculolocalSotrage(resultHorasAnlistaJunior,resultHorasAnlistaSenior,resultHorasEspecialista,resultCustoHH,resultValorVenda,numServioresFisicos,numeroColaboradores,numeroSistemasUtilizados,numeroFiliais,possuiPlanoEstrategioc){
    localStorage.setItem('numServioresFisicos',numServioresFisicos);
    localStorage.setItem('numeroColaboradores',numeroColaboradores);
    localStorage.setItem('numeroSistemasUtilizados',numeroSistemasUtilizados);
    localStorage.setItem('numeroFiliais',numeroFiliais);
    localStorage.setItem('possuiPlanoEstrategico',possuiPlanoEstrategioc);
    



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
    enviarDadosParaServidor()

}
function salvarCalculolocalHost(resultHorasAnlistaJunior,resultHorasAnlistaSenior,resultHorasEspecialista,resultCustoHH,resultValorVenda,numServioresFisicos,numeroColaboradores,numeroSistemasUtilizados,numeroFiliais,possuiPlanoEstrategioc){
    localStorage.setItem('numServioresFisicos',numServioresFisicos);
    localStorage.setItem('numeroColaboradores',numeroColaboradores);
    localStorage.setItem('numeroSistemasUtilizados',numeroSistemasUtilizados);
    localStorage.setItem('numeroFiliais',numeroFiliais);
    localStorage.setItem('possuiPlanoEstrategico',possuiPlanoEstrategioc);
    



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















function relatorio(){
    const htmlString = `<body id="RelatorioCompleto">
    `+ StyleRelatorio()+`  
    <div>
        <div class="headerPdf">
            <img src="${imagem()}" alt="LOGO" srcset="">
    
            <h1>ADX</h1>
            <div></div>
        </div>
        <div class="clientInformation">
            <div class="clientName">
    
                <h3>Cliente: </h3>
                <p id="userName">Adriano</p>
    
            </div>
            <div class="clientName">
    
                <h3>Data:</h3>
                <p id="dateDay"> 22/04/2024</p>
    
            </div>
        </div>
    
        <div id="Relatorio">
            <h1 class="relatorioName">RELATÓRIO DE CUSTOS</h1>
            
        <table id="localStorageTable" border="1">
            <thead>
                <tr>
                    <th class="stylecolumn">Variáveis</th>
                    <th class="stylecolumn">Cálculos</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
        <div class="totalValue">
            <div class="valueStyle">
                <h3 class="valueLabel">Valor da Venda: </h3>
                <div class="blackbar"></div>
                <p id="valorTotalVenda" class="valueLabel">R$ 120,000</p>
            </div>
        </div>
    
        <div class="observationContent">
          <h3 class="observationText">OBSERVAÇÕES</h3>
          <p>Tres pratos de trigo para tres trigues tristes</p>  
        </div> 
        
    
    <script>
            const localStorageData = [
                { Variáveis: "Horas Anlista Junior ", Cálculos: localStorage.getItem("HorasAnlistaJuniorF") },
                { Variáveis: "Horas Anlista Senior", Cálculos: localStorage.getItem("HorasAnlistaSeniorF") },
                { Variáveis: "Horas Especialista", Cálculos: localStorage.getItem("HorasEspecialistaF") },
                { Variáveis: "Custo HH", Cálculos: localStorage.getItem("resultCustoHHF") },
                { Variáveis: "Impostos", Cálculos: localStorage.getItem("imposto")+'%' },
                { Variáveis: "Lucro", Cálculos: localStorage.getItem("lucro")+"%" },
            ];
    
            const tableBody = document.querySelector("#localStorageTable tbody");
    
            localStorageData.forEach(item => {
                const row = tableBody.insertRow();
                const keyCell = row.insertCell(0);
                const valueCell = row.insertCell(1);
    
                keyCell.textContent = item.Variáveis;
                valueCell.textContent = item.Cálculos;
            });
    
            const totalValue = document.getElementById("valorTotalVenda")
            totalValue.textContent = localStorage.getItem("resultValorVendaF")
            
            const img = new Image();

            // Ler a imagem como um Blob usando a API FileReader
            const reader = new FileReader();
            reader.onload = function(event) {
                // Criar um novo elemento de imagem
                const img = new Image();
                img.src = event.target.result; // Definir a URL da imagem como o resultado da leitura
            
                // Adicionar a imagem ao corpo do documento ou a qualquer outro elemento desejado
                document.body.appendChild(img);
            };
            
            // Carregar a imagem a partir do caminho especificado
            reader.readAsDataURL('../assets/logo-grupo-adx.png');
            
            
        </script>
        </div>
    </div>
</body>`;

    return htmlString
}
function imagem(){
    const img = `data:image/png;base64,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`
    return img;
}

function StyleRelatorio(){
    const cssString = `
    <style>
    body {
        font-family: Arial, sans-serif;
        margin: 0;
    }
    
    .headerPdf {
        padding: 1% 12% 8% 2%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    .headerPdf h1{
        display: flex;
        justify-content: center;
        font-size: 3vh;
    }
    
    .headerPdf img {
        width: 100px;
        height: 100px;
        border-radius: 10%;
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
        filter: gray; /* IE */
    }
    
    .clientInformation{
        display: flex;
        justify-content: space-evenly;
    }
    
    .clientName{
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    #userName{
        width: 300px;
        border-bottom: 2px solid black;
    }
    
    #dateDay{
        border-bottom: 2px solid black;
    }
    
    .relatorioName{
        display: flex;
        justify-content: center;
        padding: 3% 0% 0% 0%;
    }
    
    table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
    }
    
    th, td {
        padding: 10px;
        border: 1px solid #ddd;
    }
    
    th {
        background-color: rgba(128, 128, 128, 0.706);
        font-weight: bold;
        text-align: left;
    }
    
    tr:nth-child(even) {
        background-color: #f9f9f9;
    }
    
    tr:hover {
        background-color: #f2f2f2;
    }
    
    .observationContent{
        margin-top: 10%;
        border: 1px solid black;
    }
    
    .observationText{
        margin: 0;
        padding: 10px;
        border-bottom: 1px solid black;
        background-color: rgba(128, 128, 128, 0.706);
    }
    
    .observationContent p{
        padding-left: 10px;
    }
    
    .totalValue{
        gap: 10px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    
    .valueStyle{
        display: flex;
        border: 1px solid black;
        margin: 0;
        padding: 0% 1% 0% 1%;
        align-items: center;
        gap: 10px;
        width: max-content;
    }
    
    .blackbar {
        width: 1px;
        height: 30px;
        border-right: 1px solid black;
    }
    
    .valueLabel{
        margin: 0;
    }
    </style>
    `;
    return cssString;
}