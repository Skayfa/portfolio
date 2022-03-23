import { FC } from "react";

interface props {

}
export const ListItem: FC = ({ children }) => {
    return (
        <li>{children}</li>
    )
}

const ListComponent: FC<props> = ({ children }) => {
    return <ul className="list-disc list-outside ml-12">
        {children}
    </ul>
}

export default ListComponent;