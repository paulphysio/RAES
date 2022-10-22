function file(){
    const hide = document.querySelector('.hide-file')
    const hideBut = document.querySelector('.hide')
    if (hideBut.innerText==="upload"){
        hide.classList.remove("not-visible")
        hideBut.innerText = "Hide"
    }else{
        hide.classList.add("not-visible")
        hideBut.innerText = "upload"
    }
   
}


const spin = document.querySelector('.loginspin')
spin.addEventListener('click', function(e){
    // e.preventDefault()
    spin.innerHTML = `  <div class="spinner-border text-primary" role="status" style='height:20px; width:20px'>
                            <span class="sr-only">Loading...</span>
                        </div> `
    spin.onmouseover = function(){
        spin.innerHTML = `  <div class="spinner-border text-primary" role="status" style='height:20px; width:20px'>
                            <span class="sr-only">Loading...</span>
                        </div> `
    }
    spin.onmouseleave = function(){
    spin.innerHTML = `  <div class="spinner-border text-light" role="status" style='height:20px; width:20px'>
                                            <span class="sr-only">Loading...</span>
                                        </div> `
        }
    }    
)

const Signupspin = document.querySelector('.signupspin')
Signupspin.addEventListener('click', function(e){
    // e.preventDefault()
    Signupspin.innerHTML = `  <div class="spinner-border text-primary" role="status" style='height:20px; width:20px'>
                            <span class="sr-only">Loading...</span>
                        </div> `
    Signupspin.onmouseover = function(){
        spin.innerHTML = `  <div class="spinner-border text-primary" role="status" style='height:20px; width:20px'>
                            <span class="sr-only">Loading...</span>
                        </div> `
    }
    Signupspin.onmouseleave = function(){
        Signupspin.innerHTML = `  <div class="spinner-border text-light" role="status" style='height:20px; width:20px'>
                                            <span class="sr-only">Loading...</span>
                                        </div> `
        }
    }
)

// const question = document.querySelector('.question')
// let text = document.querySelector('[id*="question"]')
// var intervalId = window.setInterval(function(){
//     var val = text.value;
//     console.log(val)
// }
//   , 1000);

// if (text.value){
//         question.classList.remove('disabled')
//     }
// question.addEventListener('click', function(e){
    
//     console.log(text.value)
//     e.preventDefault()
//     question.innerHTML = `  <div class="spinner-border text-primary" role="status" style='height:20px; width:20px'>
//                             <span class="sr-only">Loading...</span>
//                         </div> `
//     question.onmouseover = function(){
//         question.innerHTML = `  <div class="spinner-border text-primary" role="status" style='height:20px; width:20px'>
//                             <span class="sr-only">Loading...</span>
//                         </div> `
//     }
//     question.onmouseleave = function(){
//         question.innerHTML = `  <div class="spinner-border text-light" role="status" style='height:20px; width:20px'>
//                                             <span class="sr-only">Loading...</span>
//                                         </div> `
//         }
//     }
// )

