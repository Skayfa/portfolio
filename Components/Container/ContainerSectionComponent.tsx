import { TitleSection } from "../Title";

interface props {
    title: string
}
const ContainerSectionComponent: React.FC<props> = ({ children, title }) => {
    return <div>
        <TitleSection title={title} />
        {children}
    </div>
}

export default ContainerSectionComponent;