const btnLike1 = document.getElementById("btnLike1")
const countLike1 = document.getElementById("countLike1")
const btnDisLike1 = document.getElementById("btnDisLike1")
const countDisLike1 = document.getElementById("countDisLike1")

const btnLike2 = document.getElementById("btnLike2")
const countLike2 = document.getElementById("countLike2")
const btnDisLike2 = document.getElementById("btnDisLike2")
const countDisLike2 = document.getElementById("countDisLike2")

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
}
btnLike1.addEventListener("click",clickLike1)
btnLike2.addEventListener("click",clickLike2)

