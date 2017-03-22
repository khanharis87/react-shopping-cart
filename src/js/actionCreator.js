import { ACTIONS } from './actions'

/**
 * Actions that are fired up when checkbox of product is checked or unchecked
 * @param item
 * @return {{type: string, item: {}}}
 */
export function setStatusToReserved (item) {
  return { type: ACTIONS.SET_STATUS_TO_RESERVED, item }
}

export function setStatusToNew (item) {
  return { type: ACTIONS.SET_STATUS_TO_NEW, item }
}
