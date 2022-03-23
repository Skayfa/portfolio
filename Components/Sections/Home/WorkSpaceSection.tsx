import { ContainerParagraphComponent, ContainerSectionComponent } from "../../Container";
import { List, ListItem } from "../../Liste";

const WorkSpaceSection = () => {
    return <ContainerSectionComponent title={"Contributions open-source"}>
        <ContainerParagraphComponent>
            <List>
                <ListItem>VSCode, Webstorm et Goland en éditeurs de code / IDE</ListItem>
                <ListItem>Dougs pour la comptabilit</ListItem>
                <ListItem>Qonto pour mon compte pro</ListItem>
                <ListItem>Revolut en compte de backup</ListItem>
                <ListItem>Alan pour la complémentaire santé et la prévoyance</ListItem>
                <ListItem>Comet pour trouver de chouettes missions en développement et data</ListItem>
                <ListItem>Ilek pour l&apos;électricité au bureau</ListItem>
            </List>
        </ContainerParagraphComponent>
        <ContainerParagraphComponent>
            Voilà, c&apos;est fini ! Tu peux désormais reprendre une activité normale.
        </ContainerParagraphComponent>
        <ContainerParagraphComponent>
            #keurkeur
        </ContainerParagraphComponent>

    </ContainerSectionComponent>
}

export default WorkSpaceSection;