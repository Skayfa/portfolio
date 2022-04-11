import { CSSProperties, FC, useEffect, useRef, useState } from "react";

const VISIBLE = 1;
const HIDDEN = 2;
const ENTERING = 3;
const LEAVING = 4;

interface props {
    visible: boolean,
    duration?: number
}
const Fade: FC<props> = ({ visible, children, duration = 300 }) => {
    const childRef = useRef(children)
    const [state, setState] = useState(visible ? VISIBLE : HIDDEN);

    let style: CSSProperties = {
        transitionDuration: `${duration}ms`,
        transitionProperty: 'opacity'
    }

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
            }, duration)
            return () => {
                clearTimeout(timer);
            }
        } else if (state === ENTERING) {
            document.body.offsetHeight;
            setState(VISIBLE);
        }
    }, [state, duration])

    if (state === HIDDEN) {
        return null;
    }


    if (state !== VISIBLE) {
        style.opacity = 0;
    }

    return <div style={style}>
        {childRef.current}
    </div>
}

export default Fade;