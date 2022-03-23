interface props {
    title: string
}
const ContainerSectionComponent: React.FC = ({ children }) => {
    return <div>
        {children}
    </div>
}

export default ContainerSectionComponent;