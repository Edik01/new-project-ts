const button = document.querySelector("button");
button?.addEventListener("click", handleClick);

function handleClick(this: HTMLElement, event: MouseEvent): void {
  console.log(event.target);
  alert("im clicked");
}
