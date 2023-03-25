let numeroBinario = document.querySelector('.form-campo-binario');
let result = document.querySelector('.form-campo-result');
let botao = document.querySelector('.form-botao')


botao.addEventListener("click",aoClickar)

function aoClickar (event) {
    event.preventDefault()
    let valorBinario = parseInt((numeroBinario.value), 2);

    if(!isNaN(valorBinario)){
        result.value = valorBinario;
    }else{
        result.value = "atenção digite 1 ou 0";
    }
    
    
}
