import { ContainerParagraphComponent, ContainerSectionComponent } from "../../Container";
import { List, ListItem } from "../../Liste";

const WorkSection = () => {
    return (
        <>
            <ContainerSectionComponent title={"On bosse ensemble ?"}>
                <ContainerParagraphComponent>
                    Mes disponibilités sont indiquées sur mon profil LinkedIn, parce que c&apos;est plus rapide à faire que d&apos;ouvrir un éditeur de texte pour mettre à jour la présente page.
                </ContainerParagraphComponent>
                <ContainerParagraphComponent>
                    Disclaimer : j&apos;aimerais beaucoup apporter mes compétences dans les domaines de la fintech, crypto, aéronautique ou encore aérospatiale. Donc si tu travailles dans une société telle que Binance, Coinbase ou encore Ledger, contacte moi dès maintenant !
                </ContainerParagraphComponent>
            </ContainerSectionComponent>
            <ContainerSectionComponent title={"On s'fait une bouffe ?"}>
                <ContainerParagraphComponent>
                    Tu peux me retrouver via les liens suivants, parce que le téléphone c&apos;est so has been. Et de toute façon, j&apos;ai pas de réseau dans mon bureau à la campagne.
                </ContainerParagraphComponent>
                <ContainerParagraphComponent>
                    <List>
                        <ListItem>Email</ListItem>
                        <ListItem>Twitter</ListItem>
                        <ListItem>Linkdin</ListItem>
                        <ListItem>Github</ListItem>
                        <ListItem>Blog</ListItem>
                        <ListItem>Skype</ListItem>
                    </List>
                </ContainerParagraphComponent>
            </ContainerSectionComponent>
            <ContainerSectionComponent title={"Contributions open-source"}>
                <ContainerParagraphComponent>
                    Durant mon temps libre, et comme on a rien d&pos;autre à faire à la campagne, je développe des projets open-sources que personne n&pos;utilise mais dans lesquels je mets tout mon amour :
                </ContainerParagraphComponent>
                <ContainerParagraphComponent>
                    <List>
                        <ListItem>Amazon Alternatives : une extension navigateur (Chrome & Firefox) qui propose une liste de magasins en ligne alternatifs à l&apos;ogre Amazon directement sur les fiches produits</ListItem>
                        <ListItem>Orion : un générateur de blog statique en Go, que j&apos;utilise entre autres pour mon blog.</ListItem>
                        <ListItem>Un monorepo de modules NPM : en vrac un vérificateur de numéro de TVA, un shuffle de tableau, un workflow Alfred pour Travis, un convertisseur d&apos;id Salesforce, ...</ListItem>
                        <ListItem>Shush! : une extension navigateur (encore !) pour cacher une liste de mot sur pleins de site. Et oui, tout est parti de l&apos;overdose Covid-19.</ListItem>
                        <ListItem>Le présent site web : quelques pages HTML modifiées à la main, une favicon et une feuille de style. Certifié sans trackers !</ListItem>
                    </List>
                </ContainerParagraphComponent>
            </ContainerSectionComponent>


        </>
    )
}

export default WorkSection;