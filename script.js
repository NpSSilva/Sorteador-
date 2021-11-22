



    
    var number = document.getElementById('randomnumber')// numero
    var titulo = document.getElementById('titulo') // titulo


 
    
var valor // variável do valor
var coloor = generateRandomColor() // cor aleátoria

function sortear() {

    let random = Math.floor(Math.random() * valor) + 1;

        
        number.textContent = random // mudou o numero
    
            number.style.color = coloor
            titulo.style.color = coloor
    
            let inicio = document.getElementById('inicio')
                inicio.classList.add('inicio-display')
            let sorteador = document.getElementById('sorteador')
                setsorteador.classList.remove('sorteador-display')
    
            let info = document.getElementById('info')
            info.innerHTML = "Até o numero: " + valor
}   
        function numberInput(element){
            valor = element.value
        }       

    function retornar(){
        let inicio = document.getElementById('inicio')
            inicio.classList.remove('inicio-display')
        let sorteador = document.getElementById('sorteador')
            sorteador.classList.add('sorteador-display')
    }


//Clicar e mudar

let buttonChange = document.getElementById('alterar') // butão alterar
function clickEMudar(){

    let randomNumber = Math.floor(Math.random() * valor) + 1
    coloor = generateRandomColor()
    number.textContent = randomNumber
    number.style.color = coloor
    titulo.style.color = coloor 

    
}
let buttonDelete = document.getElementById('deletar') // butão deletar
function clickEDeletar(){        
    number.textContent = "0" // numero exibido
    number.style.color = 'black' //cor do numero
    titulo.style.color = 'black' //cor do titulo
}

function generateRandomColor(){
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);
    return `#${randColor.toUpperCase()}`
}



// localStorage.setItem()
// localStorage.getItem()
// localStorage.removeItem()
// localStorage.clear()

console.log()
