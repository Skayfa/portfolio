import { ReactElement } from "react";

interface props {
    children: Array<ReactElement> | ReactElement
}
const ContainerComponent: React.FC<props> = ({ children }) => {
    return <div className="flex divide-y flex-col">
        {Array.isArray(children) ? children.map((e, i) => {
            return (
                <div key={i}>{e}</div>
            )
        }) : <div>{children}</div>}
    </div>
}

export default ContainerComponent;