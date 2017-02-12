module.exports = function (state = false, action) {

  switch (action.type) {

    case 'TOGGLE_MODAL':
      return !state

    case 'CLOSE_MODAL_RESET_SCORE':
      return false

    default:
      return state
  }
}
