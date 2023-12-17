export default function TaskList({ tasks }) {
    
    return (
        <ul>
            {tasks.map(task => (
                <li task={t} index={ids} key={t}/>
            ))}
        </ul>
    );
}