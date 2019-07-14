const DESCRIPTION_PATH = '/'
const LIST_PATH = '/list/'
const ADD_PATH = '/add/'

const convertPathToTitle = (path) => {
    switch (path) {
        case DESCRIPTION_PATH:
            return 'Description'
        case LIST_PATH:
            return 'List'
        case ADD_PATH:
            return 'Add'
        default:
            return 'Contracts Manager'
    }
}

export { DESCRIPTION_PATH, LIST_PATH, ADD_PATH, convertPathToTitle }