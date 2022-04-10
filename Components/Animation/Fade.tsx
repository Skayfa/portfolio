import { FC, useEffect, useRef, useState } from "react";

const VISIBLE = 1;
const HIDDEN = 2;
const ENTERING = 3;
const LEAVING = 4;

interface props {
    visible: boolean
}
const Fade: FC<props> = ({ visible, children }) => {
    const childRef = useRef(children)
    const [state, setState] = useState(visible ? VISIBLE : HIDDEN);
    const className = state === VISIBLE ? "fade" : "fade out";

    if (visible) {
        childRef.current = children
    }

    useEffect(() => {
        if (!visible) {
            setState(LEAVING);
        } else {
            setState((s) => s === HIDDEN ? ENTERING : VISIBLE);
        }
    }, [visible]);

    useEffect(() => {
        if (state === LEAVING) {
            const timer = setTimeout(() => {
                setState(HIDDEN);
            }, 300)
            return () => {
                clearTimeout(timer);
            }
        } else if (state === ENTERING) {
            document.body.offsetHeight;
            setState(VISIBLE);
        }
    }, [state])

    if (state === HIDDEN) {
        return null
    }
    return <div className={className}>
        {childRef.current}
    </div>
}

export default Fade;