const btnLike1 = document.getElementById("btnLike1")
const countLike1 = document.getElementById("countLike1")

const btnLike2 = document.getElementById("btnLike2")
const countLike2 = document.getElementById("countLike2")
//Dislike
const btnDisLike3 = document.getElementById("btnDisLike3")
const countDisLike3 = document.getElementById("countDisLike3")
const btnDisLike4 = document.getElementById("btnDisLike4")
const countDisLike4 = document.getElementById("countDisLike4")

const submit = document.getElementById("submit")
const comment = document.getElementById("comment")
const commentbox = document.getElementById("commentbox")
function submitComment(){
  commentbox.textContent += comment.value.toString() + "\n"
  comment. value=""
}
submit.addEventListener("click", submitComment)

function clickLike1(){
  let totalLike1 = parseInt(countLike1.value) + 1
  countLike1.textContent = totalLike1.toString()
}
function clickLike2(){
  let totalLike2 = parseInt(countLike2.value) + 1
  countLike2.textContent = totalLike2.toString()

  //DiskLike
}
function clickDisLike3(){
  let totalDisLike3 = parseInt(countDisLike3.value) + 1
  countDisLike3.textContent = totalDisLike3.toString()
}
function clickDisLike4(){
  let totalDisLike4 = parseInt(countDisLike4.value) + 1
  countDisLike4.textContent = totalDisLike4.toString()
}
btnLike1.addEventListener("click",clickLike1)
btnLike2.addEventListener("click",clickLike2)
btnLike3.addEventListener("click",clickDisLike3)
btnLike4.addEventListener("click",clickDisLike4)


