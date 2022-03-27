export function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      if (state.some((product) => product.id === action.payload.id)) {
        return state
      }
      const newProduct = { ...action.payload, quantity: 1 }
      return [newProduct, ...state]

    case 'INCREASE':
      return state.map((item) => {
        if (item.id !== action.payload.id) return item
        return {
          ...item,
          quantity: item.quantity++,
        }
      })

    case 'DECREASE':
      return state.map((item) => {
        if (item.id !== action.payload.id) return item
        return {
          ...item,
          quantity: item.quantity--,
        }
      })

    case 'REMOVE':
      return state.filter((product) => product.id !== action.payload.id)

    case 'CLEAN':
      return []

    default:
      return state
  }
}
