import {
    GET_BUILDING_FETCHING,
    GET_BUILDING_FULFILLED,
    GET_BUILDING_REJECTED,
    ADD_BUILDING_FETCHING,
    ADD_BUILDING_FULFILLED,
    ADD_BUILDING_REJECTED,
    DEL_BUILDING_FETCHING,
    DEL_BUILDING_FULFILLED,
    DEL_BUILDING_REJECTED,
    EDIT_BUILDING_FETCHING,
    EDIT_BUILDING_FULFILLED,
    EDIT_BUILDING_REJECTED
} from '../types/types-buildings'

let nextBuildingId = 0;

export const AddBuilding = text =>({
    type: ADD_BUILDING,
    id: nextBuildingId++,
    text
    }
)

export const delBuilding = id =>({
    type: DEL_BUILDING,
    id
    }
)

export const editBuilding = text =>({
    type: EDIT_BUILDING,
    buildings
    }
)
