import { FC, PropsWithChildren } from "react";
import Header from "./Header";
import themeStyles from '../components/themeStyles.module.css';
import inline from "../styles/inlines";

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