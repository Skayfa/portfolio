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

    let style = { transitionDuration: `300ms`, transitionProperty: 'opacity', opacity: 1 }
    if (state !== VISIBLE) {
        style.opacity = 0;
    }

    return <div style={style}>
        {childRef.current}
    </div>
}

export default Fade;