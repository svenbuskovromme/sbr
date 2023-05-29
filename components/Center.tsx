import { FC, HTMLAttributes, PropsWithChildren } from "react";

const Component: FC<PropsWithChildren<HTMLAttributes<HTMLDivElement>>> = ({children, ...props}) => {
    return <div {...props} style={{display: 'flex', alignItems: 'center', justifyContent: 'center', ...props.style}}>
        {children}
    </div>
}

export default Component;