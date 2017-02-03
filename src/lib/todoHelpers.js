export const addTodo = (startTodos, newTodo) => [...startTodos, newTodo];

export const randomNumGenerator = () => Math.floor(Math.random() * 1000);

export const findById = (id, list) => list.find(item => item.id === id)

export const toggleTodo = (todo) => ({...todo, isComplete: !todo.isComplete})

export const updateTodo = (list, updated) => {
  const index = list.findIndex(item => item.id === updated.id);
  return [
    ...list.slice(0, index),
    updated,
    ...list.slice(index + 1)
  ]
};

export const removeTodo = (list, id) => {
  const index = list.findIndex(item => item.id === id);
  return [
    ...list.slice(0, index),
    ...list.slice(index + 1),
  ];
};

export const filterTodos = (list, route) => {
  switch(route){
    case '/active':
      return list.filter(item => !item.isComplete)
    case '/complete':
      return list.filter(item => item.isComplete)
    default:
      return list;

  }

};
