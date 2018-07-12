import { FETCH_POST, NEW_POST} from '../actions/types'

const initialState = {
  items: [],
  item: {}
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POST:
      return {
        ...state,
        items: action.payload
      }
      // The code above doing the same of the code bellow
      // return {
      //   items: [...state.items, ...action.payload],
      //   item: state.item
      // }
    case NEW_POST:
      return {
        items: state.items,
        item: action.payload
      }
    default:
      return state
  }
}
