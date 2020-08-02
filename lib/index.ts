import { IStyle } from "./IStyle";

const sty = document.createElement("style");
sty.textContent = `
@keyframes move-toast {
  0% {
    transform: translateY(-35px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}
@keyframes move-toast-reverse {
  0% {
    transform: translateY(0px);
    opacity: 1;
  }
  100% {
    transform: translateY(-35px);
    opacity: 0;
  }
}
.move-toast-in {
  animation: move-toast 0.7s cubic-bezier(0.23, 1, 0.32, 1);
}
.move-toast-out {
  animation: move-toast-reverse 0.7s cubic-bezier(0.23, 1, 0.32, 1);
  animation-fill-mode: forwards;
}
`;

document.head.append(sty);

interface IOptions {
  outTime?: number;
  isTop?: boolean;
  onClick?: Function;
  onHidden?: Function;
  style?: IStyle;
}

const Message = (message: string, options?: IOptions) => {
  const {
    isTop = true,
    outTime = 3000,
    onClick = () => {},
    onHidden = () => {},
    style = {},
  } = options || {};
  if (typeof message === "undefined" || message === "") {
    return;
  }
  const toast = document.createElement("div");

  const hidden = () => {
    if (toast) {
      toast.className = "move-toast-out";
      if (onHidden) {
        onHidden();
      }
      setTimeout(() => {
        toast.remove();
      }, 1000);
    }
  };

  toast.className = "normal-body vanilla-message-box";
  toast.style.width = "100%";
  toast.style.zIndex = "9999";
  toast.style.position = "fixed";
  toast.style.pointerEvents = "none";
  toast.style.left = "0px";
  if (isTop) {
    toast.style.top = "0px";
  } else {
    toast.style.bottom = "20px";
  }
  const button = document.createElement("button");
  button.className = "vanilla-message";
  button.style.display = "block";
  button.style.border = "none";
  button.style.outline = "none";
  button.style.margin = "30px auto";
  button.style.background = "rgba(50,50,50,0.85)";
  button.style.padding = "16px";
  button.style.borderRadius = "6px";
  button.style.color = "#fff";
  toast.className = "move-toast-in";

  button.onclick = () => {
    if (onClick) {
      onClick();
    }
    hidden();
  };
  button.textContent = message;

  Object.keys(style).forEach((k) => {
    (button as any).style[k] = style[k];
  });

  toast.appendChild(button);

  setTimeout(hidden, outTime);
  document.body.appendChild(toast);
};

export default Message;
