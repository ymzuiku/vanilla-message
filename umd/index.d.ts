import { IStyle } from "./IStyle";
interface IOptions {
    ok?: string;
    cancel?: string;
    className?: string;
    outTime?: number;
    isTop?: boolean;
    onClick?: Function;
    onHidden?: Function;
    style?: IStyle;
}
declare const Message: {
    (message: string, options?: IOptions): Promise<unknown>;
    white(text: string, ok?: string | undefined, cancel?: string | undefined): Promise<unknown>;
    black(text: string, ok?: string | undefined, cancel?: string | undefined): Promise<unknown>;
    info(text: string, ok?: string | undefined, cancel?: string | undefined): Promise<unknown>;
    success(text: string, ok?: string | undefined, cancel?: string | undefined): Promise<unknown>;
    error(text: string, ok?: string | undefined, cancel?: string | undefined): Promise<unknown>;
};
export default Message;
