import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_shops
} from './mutation-types'
export default {
    [RECEIVE_ADDRESS] (state, {address}) {
        state.address = address
    },
    [RECEIVE_CATEGORYS] (state, {categorys}) {
        state.categorys = categorys
    },
    [RECEIVE_shops] (state, {shops}) {
        state.shops = shops
    },
}