$(function () {
    var userid = document.querySelector('[id="userprofileid"]').value
    var user = document.querySelector('[id="user"]').innerHTML
  $('.pop').popover({
    html:true,
    title:user,
    content: `
    
      <p><a href="/users/profile/edit/${userid}" >Profile</a></p>      
      <p><a href="/home">Result Upload</a></p>
      <p><a href="/chat">Chat</a></p>
      <p><a href="/users/logout">Logout</a></p>
   
  `
  })
})

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





const logoutbut = document.querySelector('.logout')
logoutbut.addEventListener('click', function(e){
    //  e.preventDefault()
    

    logoutbut.innerHTML = `  <div class="spinner-border text-danger" role="status" style='height:20px; width:20px'>
                                    <span class="sr-only">Loading...</span>
                                </div> `
    logoutbut.onmouseover = function(){
            logoutbut.innerHTML = `  <div class="spinner-border text-danger" role="status" style='height:20px; width:20px'>
                                    <span class="sr-only">Loading...</span>
                                </div> `
            }
    logoutbut.onmouseleave = function(){
            logoutbut.innerHTML = `  <div class="spinner-border text-light" role="status" style='height:20px; width:20px'>
                                                    <span class="sr-only">Loading...</span>
                                                </div> `
                }
    }
)

const modspin = document.querySelector('.modloginspin')
const modloginuser = document.querySelector('[id="modallogin_username"]')
const modloginpass = document.querySelector('[id="modallogin_password"]')

modspin.addEventListener('click', function(e){
    // e.preventDefault()
    if(modloginuser.value != '' && modloginpass.value != ''){

        modspin.innerHTML = `  <div class="spinner-border text-primary" role="status" style='height:20px; width:20px'>
                                    <span class="sr-only">Loading...</span>
                                </div> `
            modspin.onmouseover = function(){
                spin.innerHTML = `  <div class="spinner-border text-primary" role="status" style='height:20px; width:20px'>
                                    <span class="sr-only">Loading...</span>
                                </div> `
            }
            modspin.onmouseleave = function(){
            modspin.innerHTML = `  <div class="spinner-border text-light" role="status" style='height:20px; width:20px'>
                                                    <span class="sr-only">Loading...</span>
                                                </div> `
                }
    }
    
    }    
)

const Signupspin = document.querySelector('.signupspin')
const signupuser = document.querySelector('[id="id_username"]')
const signupfirst = document.querySelector('[id="id_first_name"]')
const signuplast = document.querySelector('[id="id_last_name"]')
const signupemail = document.querySelector('[id="id_email"]')
const signuppass = document.querySelector('[id="id_password1"]')
const signuppasscon = document.querySelector('[id="id_password2"]')


Signupspin.addEventListener('click', function(e){
    // e.preventDefault()
    if (signupuser.value != '' && signupfirst.value != '' && signuplast.value != '' && signupemail.value != '' && signuppass.value != '' && signuppasscon.value != ''){
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
    
    }
)

const question = document.querySelector('.question')
const text = document.querySelector('[id="question"]')

question.addEventListener('click', function(e){
    // e.preventDefault()
    if (text.value != ''){
        // console.log(text.value)
        
        question.innerHTML = `  <div class="spinner-border text-primary" role="status" style='height:20px; width:20px'>
                                <span class="sr-only">Loading...</span>
                            </div> `
        question.onmouseover = function(){
            question.innerHTML = `  <div class="spinner-border text-primary" role="status" style='height:20px; width:20px'>
                                <span class="sr-only">Loading...</span>
                            </div> `
        }
        question.onmouseleave = function(){
            question.innerHTML = `  <div class="spinner-border text-light" role="status" style='height:20px; width:20px'>
                                                <span class="sr-only">Loading...</span>
                                            </div> `
            }
        }
    else{
        console.log(text.value)
    }
    }
)

const spin = document.querySelector('.loginspin')
const loginuser = document.querySelector('[id="login_username"]')
const loginpass = document.querySelector('[id="login_password"]')

spin.addEventListener('click', function(e){
    // e.preventDefault()
    if(loginuser.value != '' && loginpass.value != ''){

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
    
    }    
)