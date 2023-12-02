const button = document.querySelector("button");
button?.addEventListener("click", handleClick);

function handleClick(this: HTMLElement, event: MouseEvent): void {
  console.log(event.target);
  alert("im clicked");
}
const input = document.querySelector("input");
input?.addEventListener("click", onClick);

function onClick(this: HTMLElement, event: MouseEvent): void {
  console.log(event.target);
  alert("im her");
}
