type Action<T> = { type: string, payload: T }

type ActionCreator<T> = (payload: T) => Action<T>

type Reducer<P> = (state: P, action: Action<any>) => P

// Type for state for reducer Todo
type Todos = ({ todos: Array, showDone: Boolean})

// Type for state for reducer createTodo
type createTodo = ({ value: string })

// Type for over-all shape of Redux
type OverallReduxShape = (Todos: Todos, createTodo: createTodo) => { Todos: Todos, createTodo: createTodo }