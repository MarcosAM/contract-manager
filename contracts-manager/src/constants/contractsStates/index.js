const COLORS = ['blue', 'yellow', 'green', 'grey']
const [ColorNew, ColorPreparing, ColorReady, ColorDone] = COLORS

const STATES = ['New', 'Preparing', 'Ready', 'Done']
const [New, Preparing, Ready, Done] = STATES

const getColorByState = (state) => COLORS[STATES.indexOf(state)]

export {
    New, Preparing, Ready, Done,
    ColorNew, ColorPreparing, ColorReady, ColorDone, STATES,
    getColorByState
}