import { FC, PropsWithChildren } from "react";
import Header from "./Header";
import inline from "../../styles/inlines";

const Component: FC<PropsWithChildren> = ({children}) => {
    return <>
        <Header />
        <div style={{
            paddingTop: inline.header.height,
            display: 'flex', flexDirection: 'column', width: '100dvw', height: '100dvh',}}>
            {children}
        </div>
    </>;
}

export default Component;