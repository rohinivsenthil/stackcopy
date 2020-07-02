const codeBlocks = Array.from(document.getElementsByTagName('pre'));

codeBlocks.forEach(codeBlock => {
  const copyButton = document.createElement("button");
  copyButton.innerHTML = "Copy";
  copyButton.classList.add("copy-button");

  const wrapper = document.createElement("div");
  wrapper.classList.add("code-wrapper");

  wrapper.appendChild(codeBlock.cloneNode(true));
  wrapper.appendChild(copyButton);

  codeBlock.parentElement.insertBefore(wrapper, codeBlock);
  codeBlock.remove();

  copyButton.onclick = async (event) => {
    await navigator.clipboard.writeText(codeBlock.innerText);
    copyButton.innerHTML = "Copied!";
    copyButton.disabled = true;

    setTimeout(() => {
      copyButton.innerHTML = "Copy";
      copyButton.disabled = false;
    }, 2000);
  }
})