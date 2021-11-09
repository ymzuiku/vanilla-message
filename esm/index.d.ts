import { IStyle } from "./IStyle";
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
declare const Message: {
    (message: string, options?: IOptions): Promise<boolean>;
    white(text: string, opt?: IOptions): Promise<boolean>;
    black(text: string, opt?: IOptions): Promise<boolean>;
    info(text: string, opt?: IOptions): Promise<boolean>;
    success(text: string, opt?: IOptions): Promise<boolean>;
    error(text: string, opt?: IOptions): Promise<boolean>;
};
export default Message;
