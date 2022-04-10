import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Fade from "../Animation/Fade";
// import MenuSVG from '../../assets/svg/menu.svg'
interface props {
    className: string,
    isOpen: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>
}

const Modal: FC<props> = ({ children, className, setOpen, isOpen }) => {
    const close = () => setOpen(false)
    return (
        <>
            <div className={`fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-30 backdrop-blur-sm w-full flex justify-end ${className} ${isOpen ? 'visible' : 'hidden'}`} onClick={close}>

            </div>
            <Fade visible={isOpen}>
                <div className="bg-white w-2/4 fixed bottom-0 top-0 right-0 p-6 transition-[width] ease-in-out delay-150">
                    <div className="flex w-full justify-end hover:cursor-pointer" onClick={close}>
                        {/* <MenuSVG /> */}
                        x
                    </div>
                    {children}
                </div>
            </Fade>
        </>
    )
}

const ModalMenuComponent: FC<props> = (props) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true)
        return () => setMounted(false);
    }, [])

    return mounted ? ReactDOM.createPortal(
        <Modal {...props} />,
        document.getElementById("myportal")!
    ) : null
}

export default ModalMenuComponent;