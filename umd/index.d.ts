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
    (message: string, options?: IOptions): Promise<unknown>;
    white(text: string, opt?: IOptions): Promise<unknown>;
    black(text: string, opt?: IOptions): Promise<unknown>;
    info(text: string, opt?: IOptions): Promise<unknown>;
    success(text: string, opt?: IOptions): Promise<unknown>;
    error(text: string, opt?: IOptions): Promise<unknown>;
};
export default Message;
