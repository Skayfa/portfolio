import { FC } from "react";

interface props {
    title: string
}

const TitleSectionComponent: FC<props> = ({ title }) => {
    return (
        <h1 className="text-3xl font-bold py-6 text-green-400">{title}</h1>
    )
}

export default TitleSectionComponent;