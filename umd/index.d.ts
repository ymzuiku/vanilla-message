import { IStyle } from './IStyle';
interface IOptions {
    outTime?: number;
    isTop?: boolean;
    onClick?: Function;
    onHidden?: Function;
    style?: IStyle;
}
declare const Message: (message: string, options?: IOptions | undefined) => void;
export default Message;
