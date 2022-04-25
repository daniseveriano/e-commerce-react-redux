export const ADD = (item) => {
    return {
        type: "ADD_CART",
        payload: item
    }
}

//remover itens
export const DLT = (id) => {
    return {
        type: "RMV_CART",
        payload: id
    }
}

//remover itens individualmente
export const REMOVE = (item) => {
    return {
        type: "RMV_ONE",
        payload: item
    }
}