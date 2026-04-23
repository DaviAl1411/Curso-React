

interface ITodoItemProps {
    id: string;
    label:string;
    complete:boolean;
    onConclude():void;
    onRemove():void;
}
export const TodoItem = (props:ITodoItemProps) =>{


    return (
        <li key = {props.id}>
            {props.label}

            {props.complete ? 'Concluído' : ''}
            <button onClick={props.onConclude}>
            Concluir
            </button>
            <button onClick={props.onRemove}>Remover</button>
        </li>
    )
}