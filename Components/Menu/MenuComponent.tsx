import Link from "next/link"
import { useRouter } from "next/router";
import { FC } from "react"

interface page {
    title: string,
    href: string
}

interface props {
    pages: page[]
}
// <li className="font-bold cursor-pointer text-green-400 underline text-lg">Mention legales</li>

const LinkPage: FC<page> = ({ title, href }) => {
    const router = useRouter();
    return (
        <li className={`font-bold cursor-pointer text-lg ${router.pathname === href ? "" : "text-green-400 underline"}`}>
            <Link href={href}>{title}</Link>
        </li>
    )
}

const MenuComponent: FC<props> = ({ pages }) => {
    return (
        <>
            <div className="w-full justify-end items-end max-w-7xl py-12 px-6 mx-auto flex">
                <ul className="space-x-12 hidden sm:flex">
                    {
                        pages.map((e, i) => {
                            return (
                                <LinkPage title={e.title} href={e.href} key={i} />
                            )
                        })
                    }
                </ul>
                <div className="sm:hidden">Icone</div>
            </div>
        </>
    )
}

export default MenuComponent