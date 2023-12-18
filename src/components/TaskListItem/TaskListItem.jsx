export default function TaskListItem({ task }) {
    return (

        <ul className="content">
            <li>{task.name}</li>
        </ul>
    )
}
