const codeBlocks = Array.from(document.getElementsByTagName('pre'));


codeBlocks.forEach(codeBlock => {
  const copyButton = document.createElement("button")

  copyButton.innerHTML = "Copy"
  copyButton.style = "margin-left:auto; margin-right:0"
  codeBlock.parentElement.insertBefore(copyButton, codeBlock)

  copyButton.onclick = (event) => {
    var range = document.createRange();
    range.selectNode(codeBlock);
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges()
  }

})