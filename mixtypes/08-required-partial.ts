export { }

interface Todo {
    readonly id: string;
    title: string;
    description?: string;
    completed: boolean;
    createdAt: number;
}

// all values of this annotation become readonly
type ReadOnlyTodo = Readonly<Todo>;

// all values become not mandatory
type PartialTodo = Partial<Todo>;

function updateTodo(todo: Todo, fieldsToUpdate: PartialTodo) {
    return { ...todo, ...fieldsToUpdate };
}

type RequiredTodo = Required<Todo>;

