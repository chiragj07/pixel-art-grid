const girdCont = document.getElementById('grid-container')
const sizeInp= document.getElementById('number-input')
const colorInp= document.getElementById('color-input')

let color = colorInp.value;
let draw = false;

function setPixels(number){
    girdCont.innerHTML=""
    girdCont.style.setProperty('--size',number)
    const frag =document.createDocumentFragment()
    for(let i=0; i<number*number; i++){
        const div = document.createElement('div');
        div.classList.add('cell');
        div.addEventListener('mouseover',function(){
            if(!draw) return ; 
            this.style.backgroundColor=color
        })
        div.addEventListener('mousedown',function(){
            this.style.backgroundColor= color
        })
        frag.appendChild(div)
        
    }

    girdCont.append(frag)
}
setPixels(sizeInp.value)
window.addEventListener('mousedown',()=>draw = true)
window.addEventListener('mouseup',()=>draw = false)


sizeInp.addEventListener('change', (e)=>setPixels(e.target.value))

colorInp.addEventListener('change', (e)=>color= e.target.value)

const resetButton = document.getElementById('reset-btn')
resetButton.addEventListener('click',reset)

function reset(){
    colorInp.value ="#ff9933"
    sizeInp.value= 10;
    setPixels(10)

}