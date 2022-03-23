

const MenuComponent = () => {
    return (
        <div className="w-full justify-end items-end flex max-w-7xl py-12">
            <ul className="flex space-x-12">
                <li className="font-bold cursor-pointer hover:text-teal-400 hover:underline text-lg">Accueil</li>
                <li className="font-bold cursor-pointer hover:text-teal-400 hover:underline text-lg">In English</li>
                <li className="font-bold cursor-pointer hover:text-teal-400 hover:underline text-lg">Blog</li>
                <li className="font-bold cursor-pointer hover:text-teal-400 hover:underline text-lg">CGV</li>
                <li className="font-bold cursor-pointer hover:text-teal-400 hover:underline text-lg">Mention legales</li>
            </ul>
        </div>
    )
}

export default MenuComponent