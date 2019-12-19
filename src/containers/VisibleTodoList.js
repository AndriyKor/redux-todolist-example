import { connect } from "react-redux";
import { toggleTodo, fetchTodos } from "../actions";
import TodoList from "../components/TodoList";
import { VisibilityFilters } from "../actions";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      console.log("all");
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      console.log("completed");
      return todos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      console.log("not completed");
      return todos.filter(t => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos.items, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
  fetchTodos: () => dispatch(fetchTodos()),
  toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
