import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import ReactDOM from "react-dom";

interface props {
    className: string,
    isOpen: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>
}

const Modal: FC<props> = ({ children, className, setOpen }) => {
    const close = () => setOpen(false)
    return (
        <>
            <div className={`fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-30 backdrop-blur-sm w-full flex justify-end ${className}`} onClick={close}>

            </div>
            <div className="bg-white w-2/4 fixed bottom-0 top-0 right-0 p-6">
                <div className="flex w-full justify-end hover:cursor-pointer" onClick={close}>
                    X
                </div>
                {children}
            </div>
        </>
    )
}

const ModalComponent: FC<props> = (props) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true)
        return () => setMounted(false);
    }, [])

    return mounted && props.isOpen ? ReactDOM.createPortal(
        <Modal {...props} />,
        document.getElementById("myportal")!
    ) : null
}

export default ModalComponent;