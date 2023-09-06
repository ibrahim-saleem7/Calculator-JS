let inputBtn = document.querySelectorAll('.input-btn')
let input = document.getElementById('input')
let clipboardSpan = document.querySelector('span')
var audioBtn = new Audio("./audio/click-btn.wav");
var audioAC = new Audio("./audio/click-AC.wav");
var audioEqual = new Audio("./audio/click-equal.wav");
var audioCopy = new Audio("./audio/click-copy.wav");

inputBtn.forEach(btn=>{
    btn.addEventListener('click',(e)=>{
    if(e.target.value == 'DEL'){
        input.value = input.value.replace(input.value[input.value.length-1], '')
        audioAC.play()
    }else if(e.target.value == 'AC'){
        input.value = ''
        audioAC.play()
    }else{
        if(e.target.value == '='){
            
            input.value = eval(input.value) ?? '';
            audioEqual.play()
        }else{
            input.value += e.target.value
            audioBtn.play()
        }
    }
    })
})

function copy(){
    navigator.clipboard.writeText(input.value)
    audioCopy.play()
    clipboardSpan.innerHTML = "check"
    setTimeout(()=>{
        clipboardSpan.innerHTML = "copy_all"
    }, 2000)
}
