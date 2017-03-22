import { ACTIONS } from './actions'

/**
 * Returns an updated array with check product status set to RESERVED
 * @param state
 * @param action
 * @return {[*,*,*]}
 */
const setStatusToReserved = (state, action) => {
  let updateStatus = Object.assign({}, action.item, {status: 'RESERVED'})
  let index = state.indexOf(action.item)

  return [...state.slice(0, index), updateStatus, ...state.slice(index + 1)]
}

/**
 * Returns an updated array with check product status set to NEW
 * @param state
 * @param action
 * @return {[*,*,*]}
 */
const setStatusToNew = (state, action) => {
  let updateStatus = Object.assign({}, action.item, {status: 'NEW'})
  let index = state.indexOf(action.item)

  return [...state.slice(0, index), updateStatus, ...state.slice(index + 1)]
}

/**
 * Function that takes the current state and action and return new state
 * Initial state is set to product items
 * @param state
 * @param action
 * @return {{}}
 */
const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTIONS.SET_STATUS_TO_RESERVED:
      return setStatusToReserved(state, action)

    case ACTIONS.SET_STATUS_TO_NEW:
      return setStatusToNew(state, action)

    default:
      return state
  }
}

export default rootReducer
