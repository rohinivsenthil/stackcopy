const codeBlocks = Array.from(document.getElementsByTagName('pre'));


codeBlocks.forEach(codeBlock => {
  const copyButton = document.createElement("button")

  copyButton.innerHTML = "Copy"
  copyButton.style = "height:1rem; width:4rem; font-size:.8rem; background:orange; border:none; margin-bottom:.5rem"
  codeBlock.parentElement.insertBefore(copyButton, codeBlock)

  copyButton.onclick = (event) => {
    var range = document.createRange();
    range.selectNode(codeBlock);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges()
  }

})