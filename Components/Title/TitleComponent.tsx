import { FC } from "react";

interface props {
    title: string
}

const TitleComponent: FC<props> = ({ title }) => {
    return (
        <h1 className="text-5xl font-bold py-6">{title}</h1>
    )
}

export default TitleComponent;