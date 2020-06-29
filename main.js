// const codeBlocks = Array.from(document.getElementsByTagName('pre'));
const codeBlocks = Array.from(document.getElementsByTagName('pre'));


codeBlocks.forEach(codeBlock => {
  const copyButton = document.createElement("button")
  //const parentOfButton = document.createElement("div")
  // parentOfButton.appendChild(copyButton)
  copyButton.innerHTML = "Copy"
  copyButton.style = "margin-left:auto; margin-right:0"
  // parentOfButton.style = "display:flex; flex-direction:flex-end"
  codeBlock.parentElement.insertBefore(copyButton, codeBlock)

})