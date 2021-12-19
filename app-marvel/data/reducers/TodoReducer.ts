import * as TodoConstants from '../actions/TodoActions';

const TodoReducer = (todoList = [], action: any) => {
    switch(action.type){
        case TodoConstants.TODO_LIST_RESPONSE:
            return action.todoList;
        case TodoConstants.TODO_CREATE_RESPONSE:
            return [
                ...todoList,
                action.newItem
            ]     
default: return todoList }
}

export default TodoReducer;
