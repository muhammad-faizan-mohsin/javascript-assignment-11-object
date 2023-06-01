// function addtodo() {
// var todosinput = document.getElementById("inpt-todo")
// var list = document.getElementById("list")
//  list.innerHTML+=  `<li>${todosinput.value}</li> <button onlclick = "deltodo" >Delete</button><button  onlclick = "edttodo" >edit</button>`
// todosinput.value = ""

// }

// function deltodo() {
// alert("hello")
// }


function popup(){
    var popupmain = document.getElementById("popup_main");
    var main = document.getElementById("main")
    popupmain.style.display = "flex";  
}

function post() {
   var textbox = document.getElementById("textarea")
 var posts = document.getElementById("post-mains")
 var post_btn = document.getElementById("post_btn")
 var popupmain = document.getElementById("popup_main");


//  if(textbox.value === ""){
//     post_btn.enabled = true;
//  }

 posts.innerHTML += `<div class="first-main"><div class="post-head">
   <div class="post-head-1"><img src="./img/profile.jpg" alt="" width="200px"></div>
   <div class="post-head-2">
     <p> Muhammad Faizan</p>
   </div>

 </div>
 <div class="post-content">
   <h2>${textbox.value}</h2>
 </div>
 <div class="flx-parent end">
   <div class="icon-text icons  " id="pra" onclick ="color_chng()"><i class="fa-regular fa-thumbs-up"></i>
     <p >Like</p>
   </div>
   <div class="icon-text icons"><i class="fa-regular fa-message"></i>
     <p>Comment</p>
   </div>
   <div class="icon-text icons"><i class="fa-solid fa-share"></i>
     <p>Share </p>
   </div>
 </div>
 </div>
`
popupmain.style.display = "none";
textbox.value = ""

}
function color_chng(){
    var clr_chng = document.getElementById("pra")
  clr_chng.style.color="#1b74e4"
}