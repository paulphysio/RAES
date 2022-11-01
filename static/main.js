// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}




// Get the modal
var modal2 = document.getElementById("myModal2");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img2 = document.getElementById("myImg2");
var modalImg2 = document.getElementById("img02");
var captionText2 = document.getElementById("caption2");
img2.onclick = function(){
  modal2.style.display = "block";
  modalImg2.src = this.src;
  captionText2.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close2")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal2.style.display = "none";
}



// Get the modal
var modal3 = document.getElementById("myModal3");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img3 = document.getElementById("myImg3");
var modalImg3 = document.getElementById("img03");
var captionText3 = document.getElementById("caption3");
img3.onclick = function(){
  modal3.style.display = "block";
  modalImg3.src = this.src;
  captionText3.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close3")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal3.style.display = "none";
}



// Get the modal
var modal4 = document.getElementById("myModal4");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img4 = document.getElementById("myImg4");
var modalImg4 = document.getElementById("img04");
var captionText4 = document.getElementById("caption4");
img4.onclick = function(){
  modal4.style.display = "block";
  modalImg4.src = this.src;
  captionText4.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close4")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal4.style.display = "none";
}



// Get the modal
var modal5 = document.getElementById("myModal5");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img5 = document.getElementById("myImg5");
var modalImg5 = document.getElementById("img05");
var captionText5 = document.getElementById("caption5");
img5.onclick = function(){
  modal5.style.display = "block";
  modalImg5.src = this.src;
  captionText5.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close5")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal5.style.display = "none";
}




// Get the modal
var modal6 = document.getElementById("myModal6");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img6 = document.getElementById("myImg6");
var modalImg6 = document.getElementById("img06");
var captionText6 = document.getElementById("caption6");
img6.onclick = function(){
  modal6.style.display = "block";
  modalImg6.src = this.src;
  captionText6.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close6")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal6.style.display = "none";
}











$(function () {
    var userid = document.querySelector('[id="userprofileid"]').value
    var user = document.querySelector('[id="user"]').innerHTML
  $('.pop').popover({
    html:true,
    title:user,
    content: `
    
      <p><a href="/users/profile/edit/${userid}" >Profile</a></p>      
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

