interface Todo {
    id: number,
    title: string,
    completed: boolean,
    userId?: number,
    metadata?: any
}

interface User {
    id: number,
    name: string,
    email?: string
}

interface TodoWithMetadata extends Todo {
    metadata: any
}