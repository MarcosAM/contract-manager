const COLORS = ['blue', 'yellow', 'green', 'grey']
const [ColorNew, ColorPreparing, ColorReady, ColorDone] = COLORS

const STATES = ['New', 'Preparing', 'Ready', 'Done', 'Deleted']
const [New, Preparing, Ready, Done, Deleted] = STATES

const getColorByState = state => COLORS[STATES.indexOf(state)]

const forwardState = state => {
    const currIndex = STATES.indexOf(state)

    if (currIndex === STATES.length - 1)
        return state

    return STATES[currIndex + 1]
}

export {
    New, Preparing, Ready, Done, Deleted,
    ColorNew, ColorPreparing, ColorReady, ColorDone, STATES,
    getColorByState, forwardState
}