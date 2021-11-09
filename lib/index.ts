import { IStyle } from "./IStyle";

const moveY = 20;
let sty: HTMLElement;

if (typeof window !== "undefined") {
  sty = document.createElement("style");

  sty.textContent = `
.vanilla-message-btn {
  cursor:pointer;
  background: rgba(0,0,0,0);
}
.vanilla-message-btn:hover {
  background: rgba(0,0,0,0.08);
}
.vanilla-message-btn:active {
  background: rgba(0,0,0,0.16);
}
@keyframes move-toast {
  0% {
    transform: translateY(-${moveY * 1.5}px);
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
    transform: translateY(-${moveY * 1.5}px);
    opacity: 0;
  }
}
@keyframes move-toast-down {
  0% {
    transform: translateY(${moveY * 1.5}px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}
@keyframes move-toast-down-reverse {
  0% {
    transform: translateY(0px);
    opacity: 1;
  }
  100% {
    transform: translateY(${moveY * 1.5}px);
    opacity: 0;
  }
}

.move-toast-in {
  animation: move-toast 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}
.move-toast-out {
  animation: move-toast-reverse 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  animation-fill-mode: forwards;
}

.move-toast-in-down {
  animation: move-toast-down 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}
.move-toast-out-down {
  animation: move-toast-down-reverse 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  animation-fill-mode: forwards;
}
`;

  document.head.append(sty);
}
function createLabel(text: string, style: any) {
  const label = document.createElement("div");
  label.className = "vanilla-message-btn";
  label.style.display = "block";
  label.style.border = "none";
  label.style.textAlign = "center";
  label.style.height = "100%";
  label.style.outline = "none";
  label.style.userSelect = "none";
  label.style.padding = "10px 3px";
  label.style.fontSize = "12px";
  label.style.width = "100%";
  label.textContent = text;
  label.style.minWidth = "80px";
  label.style.color = style && style.color ? style.color : "#fff";
  // label.style.cursor = "pointer";
  return label;
}

interface IOptions {
  ok?: string;
  cancel?: string;
  className?: string;
  outTime?: number;
  position?: "top" | "center" | "bottom";
  onClick?: Function;
  onHidden?: Function;
  style?: IStyle;
}

const Message = async (
  message: string,
  options: IOptions = {}
): Promise<boolean> => {
  if (typeof window === "undefined") {
    return new Promise((res) => res(true));
  }
  return new Promise((res) => {
    let {
      position,
      className = "",
      outTime,
      onClick = () => {},
      onHidden = () => {},
      style = {},
      ok,
      cancel,
    } = options;
    if (typeof message === "undefined" || message === "") {
      return;
    }
    if (!position) {
      if (ok || cancel) {
        position = "center";
      } else {
        position = "top";
      }
    }
    const toast = document.createElement("div");

    const hidden = (success: boolean) => {
      if (toast) {
        if (position === "top") {
          toast.className = "move-toast-out " + className;
        } else {
          toast.className = "move-toast-out-down " + className;
        }

        if (onHidden) {
          onHidden();
        }
        setTimeout(() => {
          toast.remove();
        }, 1000);
        res(success);
      }
    };

    toast.className = "normal-body vanilla-message-box " + className;
    toast.style.width = "100%";
    toast.style.zIndex = (style.zIndex as any) || "9999";
    toast.style.position = "fixed";
    toast.style.pointerEvents = "none";
    toast.style.display = "flex";
    toast.style.flexDirection = "column";
    toast.style.justifyContent = "center";
    toast.style.alignItems = "flex-start";
    toast.style.left = "0px";
    toast.style.fontSize = "16px";
    if (position === "top") {
      toast.style.top = "0px";
      toast.className = "move-toast-in";
    } else if (position === "bottom") {
      toast.style.bottom = "20px";
      toast.className = "move-toast-in-down";
    } else {
      toast.style.bottom = "50%";
      toast.className = "move-toast-in-down";
    }

    const button = document.createElement("div");
    button.className = "vanilla-message";
    button.style.border = "none";
    button.style.outline = "none";
    button.style.pointerEvents = "auto";
    button.style.margin = `${moveY}px auto`;
    button.style.textAlign = `center`;
    button.style.alignSelf = "center";
    button.style.background = "rgb(50,50,50)";
    button.style.display = "flex";
    button.style.flexDirection = "column";
    button.style.justifyContent = "flex-start";
    button.style.alignItems = "center";
    button.style.borderRadius = "3px";

    Object.keys(style).forEach((k) => {
      (button as any).style[k] = style[k];
    });

    if (!ok && !cancel) {
      button.onclick = (e) => {
        if (onClick) {
          onClick();
        }
        hidden(false);
      };
    }
    const text = document.createElement("div");
    text.style.padding = "12px";
    text.style.fontSize = "14px";
    if (typeof message === "string") {
      text.textContent = message;
    } else {
      text.appendChild(message);
    }
    text.style.color = style && style.color ? style.color : "#fff";
    button.appendChild(text);
    let isConfirm = false;
    const cell = document.createElement("div");
    cell.style.display = "flex";
    cell.style.flexDirection = "row";
    cell.style.justifyContent = "flex-start";
    cell.style.alignItems = "center";
    cell.style.width = "100%";
    cell.style.borderTop = "1px solid rgba(0,0,0,0.08)";
    // cell.style.padding = "10px";
    button.appendChild(cell);

    if (cancel) {
      isConfirm = true;
      const ele = createLabel(cancel, style);
      ele.style.opacity = "0.7";
      ele.onclick = () => {
        hidden(false);
      };

      cell.appendChild(ele);
    }
    if (ok) {
      isConfirm = true;
      const ele = createLabel(ok, style);
      ele.onclick = () => {
        hidden(true);
      };
      cell.appendChild(ele);
    }

    button.appendChild(cell);
    toast.appendChild(button);

    if (!isConfirm) {
      setTimeout(() => hidden(false), outTime || 3000);
    }

    document.body.appendChild(toast);
  });
};

Message.white = (text: string, opt: IOptions = {}) => {
  const { style, ...rest } = opt;
  return Message(text, {
    style: {
      color: "var(--black, #000)",
      background: "var(--white, #fff)",
      ...style,
    },
    ...rest,
  });
};

Message.black = (text: string, opt: IOptions = {}) => {
  const { style, ...rest } = opt;
  return Message(text, {
    style: { background: "var(--black, #000)", ...style },
    ...rest,
  });
};

Message.info = (text: string, opt: IOptions = {}) => {
  const { style, ...rest } = opt;
  return Message(text, {
    style: { background: "var(--primary5, #488)", ...style },
    ...rest,
  });
};

Message.success = (text: string, opt: IOptions = {}) => {
  const { style, ...rest } = opt;
  return Message(text, {
    style: { background: "var(--primary9, #67f)", ...style },
    ...rest,
  });
};

Message.error = (text: string, opt: IOptions = {}) => {
  const { style, ...rest } = opt;
  return Message(text, {
    style: { background: "var(--red5, #f33)", ...style },
    ...rest,
  });
};

export default Message;
