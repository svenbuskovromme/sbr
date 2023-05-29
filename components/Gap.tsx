import { FC, HTMLAttributes, PropsWithChildren } from "react";

const Component: FC<{x?: number, y?: number}> = ({x = 0, y = 0}) => {
    return <div style={{height: y, width: x}} />
}

export default Component;