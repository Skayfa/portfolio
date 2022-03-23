import React from "react";
import { ContainerDivider, ContainerParagraphComponent } from "../../Container";
import { Title } from "../../Title";

const DescriptionSection = () => {
    return <ContainerDivider>
        <Title title="Tech lead senior" />
        <>
            <ContainerParagraphComponent>
                TL&#59;DR
            </ContainerParagraphComponent>
            <ContainerParagraphComponent>
                Younes Beaila - Tech Lead sénior (Node.js, Typescript) freelance - Télétravail uniquement - 4 jours / semaine
            </ContainerParagraphComponent>
        </>
        <>
            <ContainerParagraphComponent>
                Salut à toi noble visiteur, et bienvenue sur cette page dépouillée mais non moins très intéressante, qui est un hommage personnel au HTML de ma jeunesse.
            </ContainerParagraphComponent>
            <ContainerParagraphComponent>
                Ici pas de Google Fonts ou encore de jQuery. Encore moins de Node.js, PHP ou Jekyll. Cette page est la quintessence du web : une page HTML comme on les aime.
            </ContainerParagraphComponent>
            <ContainerParagraphComponent>
                <p className="text-opacity-50 text-white">Et oui, ce site est un peu un troll à tous les templates et CMS que j&apos;ai utilisés dans ma vie.</p>
            </ContainerParagraphComponent>
        </>
    </ContainerDivider>
}

export default DescriptionSection;