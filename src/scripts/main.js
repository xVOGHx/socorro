document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('sorteador').addEventListener('submit', function(e){
        e.preventDefault();
        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = Math.random() * numeroMaximo;
        numeroAleatorio = Math.floor(numeroAleatorio + 1);

        document.getElementById('resultado-valor').innerText = numeroAleatorio; 
        document.querySelector('.resultado').style.display = 'block';

        let img1 = document.getElementById('.donatelo')
        if('.resultado'== 1){
            '.resultado' = img1
        }
    })
})