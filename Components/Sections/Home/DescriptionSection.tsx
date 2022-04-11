import React from "react";
import Image from "next/image"
import { ContainerDivider, ContainerParagraphComponent } from "../../Container";
import { Title } from "../../Title";
import profile from "../../../assets/profile.jpg"

const DescriptionSection = () => {
    return <div className="flex flex-col sm:flex-row">
        <div className="flex items-center min-w-[250px] md:min-w-[350px] min-h-[100px] pr-6">
            <div className=" h-full relative rounded-xl overflow-hidden min-h-[200px] w-full" >
                <Image
                    src={profile}
                    alt="Picture of the author"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    className="w-full h-full transform md:scale-150"
                    placeholder="blur"
                />
            </div>
        </div>
        <ContainerDivider>
            <Title title="Tech lead" />
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
    </div>

}

export default DescriptionSection;