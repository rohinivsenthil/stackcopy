const codeBlocks = Array.from(document.getElementsByTagName('pre'));


codeBlocks.forEach(codeBlock => {
  const copyButton = document.createElement("button")
  const wrapper = document.createElement("div")

  copyButton.innerHTML = "Copy"
  copyButton.style = "height:.5rem; width:4rem; font-size:.7rem; border:none; margin-bottom:.5rem"
  wrapper.appendChild(copyButton)
  wrapper.style = "width:100%; display:flex; justify-content:flex-end"
  codeBlock.parentElement.insertBefore(wrapper, codeBlock)

  copyButton.onclick = (event) => {
    const range = document.createRange();
    range.selectNode(codeBlock);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges()
  }

})