export default function createButton(props) {
  const { label, handleClick } = props;
  const button = document.createElement("button");
  button.textContent = label;
  button.addEventListener("click", handleClick);

  return button;
}
