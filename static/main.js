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
