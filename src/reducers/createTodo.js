//Reducer File

// 1) has an export called initState. That will be the shape of the "state" the reducer is expected 
//to control as well as the initializer for the redux state store
export const initState = { value: '' }

// 2) has an export called reducer with signature (state = initState, action) => NEWSTATE
export const reducer = (state = initState, action) => {
    switch (action.type) {
      case PLACEHOLDER:
        return 
          {

          }
      default:
        return state
    }
}

// 3) has an export called a selector with signature state => grab your state for this reducer off the global redux state
export const selector = state => state.createTodo
