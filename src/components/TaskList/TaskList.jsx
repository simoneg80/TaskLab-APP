import TaskListItem from "../TaskListItem/TaskListItem";

export default function TaskList({ tasks }) {
  const taskListItems = tasks.map((task, idx) => (
    <TaskListItem task={task} index={idx} key={task} />
  ));
  return <ul>{taskListItems}</ul>;
}
