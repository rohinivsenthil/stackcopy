const codeBlocks = Array.from(document.getElementsByTagName('pre'));
const enabledButton = "height:.5rem; width:4rem; font-size:.7rem; border:none; margin-bottom:.5rem";
const disabledButton = "height:.5rem; width:4rem; font-size:.7rem; border:none; margin-bottom:.5rem; color:gray";

codeBlocks.forEach(codeBlock => {
  const copyButton = document.createElement("button");
  const wrapper = document.createElement("div");

  copyButton.innerHTML = "Copy";
  copyButton.style = enabledButton;
  wrapper.appendChild(copyButton);
  wrapper.style = "width:100%; display:flex; justify-content:flex-end";
  codeBlock.parentElement.insertBefore(wrapper, codeBlock);

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