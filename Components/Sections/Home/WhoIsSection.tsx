import { ContainerParagraphComponent, ContainerSectionComponent } from "../../Container";

const WhoIsSection = () => {
    return (
        <>
            <ContainerSectionComponent title={"C'est qui lui?"}>
                <ContainerParagraphComponent>
                    Je m&apos;appelle Adrian Tombu, Franco-Belge de profession (avec un fort penchant pour la bière brune d&apos;Abbaye), développeur de naissance, né durant l&apos;inoubliable année 1986 : catastrophe de Tchernobyl, explosion de la navette Challenger en direct devant des millions de téléspectateurs, ou encore passage de la magnifique Comète de Halley (une révolution tous les 76 ans, ça se fête !). Ah et niveau vin, c&apos;est également un millésime exceptionnel.
                </ContainerParagraphComponent>
                <ContainerParagraphComponent>
                    Né en Belgique, j&apos;ai un peu bougé en sortant des études (tout est indiqué sur mon LinkedIn qui me sert de CV centralisé), avant d&apos;atterrir début 2017 à... Puygaillard-de-Quercy, dans la campagne du Tarn-et-Garonne. Un village de 387 âmes qui se situe à 1h de la capitale historique du Languedoc, mais Toulouse vous parlera certainement plus que mon bled perdu entre Montricoux et Bruniquel !
                </ContainerParagraphComponent>
            </ContainerSectionComponent>
            <ContainerSectionComponent title={"C'est qui lui?"}>
                <ContainerParagraphComponent>
                    Dans ma vie de tech lead freelance à Toulouse, je travaille principalement avec tout ce qui touche de près ou de loin au back end :
                </ContainerParagraphComponent>
                <ContainerParagraphComponent>
                    <ul>
                        <li>Node.js avec Koa, Express, Next le tout parsemé d&apos;une couche de Typescript</li>
                        <li>J&apos;ai eu l&apos;occasion de jouer un peu avec Go (Gin, Viper, Cobra, gRPC), et j&apos;ai commencé à me former à Rust fin 2021</li>
                        <li>Dans une autre vie je faisais aussi du front avec React et du mobile avec React Native</li>
                        <li>A côté de ces trucs un peu barbares, je suis également Expert en Qualité Web Opquast. Et on peut dire que le web a bien besoin des Chevaliers des Bonnes Pratiques !</li>
                        <li>Pour toutes les autres compétences que je ne maîtrise pas, tu peux aller te renseigner auprès du réseau de freelances Greaaat dont je fais partie, c&apos;est rempli de gens talentueux !</li>
                    </ul>
                </ContainerParagraphComponent>
                <ContainerParagraphComponent>
                    Sache également que je n&apos;accepte que les missions en télétravail (pour rappel, je vis au milieu de rien).
                </ContainerParagraphComponent>
            </ContainerSectionComponent>
        </>
    )
}

export default WhoIsSection;