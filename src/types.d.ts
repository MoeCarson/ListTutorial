type Action<T> = { type: string, payload: T }

type ActionCreator<T> = (payload: T) => Action<T>

type Reducer<P, T> = (state: P, Action: T) => state