import { FC, HTMLAttributes, PropsWithChildren } from "react";

const Component: FC<PropsWithChildren<{expand: boolean, min: string, max?: string} & HTMLAttributes<HTMLDivElement>>> = ({children, expand, min, max = '1fr', ...props}) => {
    const gridTemplateColumns = `repeat( auto-${expand ? 'fit' : 'fill'}, minmax(${min}, ${max}) )`;

    return <div {...props} style={{
        gridAutoFlow: 'row', display: 'grid', gridTemplateColumns,
        ...props.style}}>
        {children}
    </div>
}

export default Component;