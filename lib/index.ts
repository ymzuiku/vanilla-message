import vanillaSpring from 'vanilla-spring';
import { IStyle } from './IStyle';

vanillaSpring({
  name: 'moveToast',
  makeReverse: true,
  keyframe: v => `
  transform: translateY(${35 * (1 - v)}px);
  opacity: ${v};
`,
});

interface IOptions {
  outTime?: number;
  isTop?: boolean;
  onClick?: Function;
  onHidden?: Function;
  style?: IStyle;
}

const Message = (message: string, options?: IOptions) => {
  const { isTop = true, outTime = 3000, onClick = () => {}, onHidden = () => {}, style = {} } = options || {};
  const toast = document.createElement('div');

  const hidden = () => {
    if (toast) {
      toast.style.animation = 'moveToast-reverse 1s';
      toast.style.animationFillMode = 'forwards';
      if (onHidden) {
        onHidden();
      }
      setTimeout(() => {
        toast.remove();
      }, 1000);
    }
  };

  toast.setAttribute('class', 'normal-body');
  toast.style.width = '100%';
  toast.style.zIndex = '9999';
  toast.style.position = 'fixed';
  toast.style.pointerEvents = 'none';
  toast.style.left = '0px';
  if (isTop) {
    toast.style.top = '0px';
  } else {
    toast.style.bottom = '20px';
  }
  const button = document.createElement('button');
  button.style.display = 'block';
  button.style.border = 'none';
  button.style.outline = 'none';
  button.style.margin = '30px auto';
  button.style.background = 'rgba(50,50,50,0.85)';
  button.style.padding = '16px';
  button.style.borderRadius = '6px';
  button.style.color = '#fff';
  button.style.animation = 'moveToast 1s';

  button.onclick = () => {
    if (onClick) {
      onClick();
    }
    hidden();
  };
  button.textContent = message;

  Object.keys(style).forEach(k => {
    (button as any).style[k] = style[k];
  });

  toast.appendChild(button);

  setTimeout(hidden, outTime);
  document.body.appendChild(toast);
};

export default Message;
