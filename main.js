const codeBlocks = Array.from(document.getElementsByTagName('pre'));
const enabledButton = "font-size:.7rem; border:none; position:absolute; top:0; right:0; background-color: rgba(0, 0, 0, 0); color:gray";
const disabledButton = "font-size:.7rem; border:none; position:absolute; top:0; right:0; background-color: rgba(0, 0, 0, 0); color:gray";

codeBlocks.forEach(codeBlock => {
  const copyButton = document.createElement("button");
  const wrapper = document.createElement("div");

  copyButton.innerHTML = "Copy";
  copyButton.style = enabledButton;
  wrapper.appendChild(codeBlock.cloneNode(true))
  wrapper.appendChild(copyButton);
  wrapper.style = "position: relative;"
  console.log(wrapper);
  codeBlock.parentElement.insertBefore(wrapper, codeBlock);
  codeBlock.remove()
  console.log('hello');


  copyButton.onclick = async (event) => {
    await navigator.clipboard.writeText(codeBlock.innerText)
    copyButton.innerHTML = "Copied!"
    copyButton.style = disabledButton;
    copyButton.disabled = true;

    setTimeout(() => {
      copyButton.innerHTML = "Copy";
      copyButton.style = enabledButton;
      copyButton.disabled = false;
    }, 2000);
  }

})