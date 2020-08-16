window.addEventListener('load', start);

function start() {
saudacao();    
}

function saudacao() {
    var lblGood = document.querySelector('#lblGood');
    lblGood.innerHTML = '';
    const now = new Date();
    var hora = now.getHours();
    if (hora >= 0 && hora < 12){
        lblGood.innerHTML = 'Bom dia! '; 
    } else if (hora >= 12 && hora < 19){
        lblGood.innerHTML = 'Boa tarde! '; 
    } else if (hora >= 19 && hora <= 23){
        lblGood.innerHTML = 'Boa noite! '; 
    }
}