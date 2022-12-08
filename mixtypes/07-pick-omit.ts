export { };

type WellKnownBrands = 'apple' | 'lenovo' | 'hp' | 'dell' | 'microsoft' | 'huawei';

type Names = Record<string, number>;
type BrandNames = Record<WellKnownBrands, string>;

// const myBrands: BrandNames = {
//     huawei: "",
// }

interface Todo {
    id: string;
    title: string;
    description: string;
    completed: boolean;
    createdAt: number;
}

type SimpleTodo = Pick<Todo, 'id' | 'title' | 'completed'>;

const todo1: SimpleTodo = {
    id: "1",
    title: 'Wash the dishes',
    completed: false,
}

type SimpleTodo2 = Omit<Todo, 'description' | 'createdAt'>;

const todo2: SimpleTodo2 = {
    id: "2",
    title: 'Buy apples',
    completed: true,
}

type NewTodo = Pick<Todo, 'title' | 'description' >;
