export const transitionVariantsPage = {
    initial: {
        x: "100%",
        width: "100%",
    },

    animate: {
        x: '0%',
        width: "0%",
    },

    exit: {
        x:["0%", "100%"],
        width:["0%", "100%"],
    }
}


export const fadeIn = (position: string) => {
    return {
        visible: {
            opacity: 1,
            x: 0,
            y:0,
            transition: {
                duration: 1.4,
                delay: 0.5,
                easy: [0.25, 0.25, 0.25, 0.75],
                type: "tween",
            },
        },
        hidden: {
            opacity: 0,
            x: position === "right" ? -80 : 0,
            y: position === "bottom" ? 80 : 0,
            transition: {
                duration: 1.4,
                delay: 0.5,
                easy: [0.25, 0.25, 0.25, 0.75],
                type: "tween",
            },
        }

    }
}

