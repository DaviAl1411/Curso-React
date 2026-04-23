import { useState, type ChangeEvent } from "react";

interface IInputAddProps{
    onAdd(value:string): void;
}

export const InputAdd = (props:IInputAddProps) => {

    const [value,setValue] = useState('');

    const handleValue = (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    setValue(e.target.value)
    }

    const handleAdd = () =>{
        props.onAdd(value);
        setValue('');
    }

    return(
      <div>
        <input 
        value={value}
        onChange={handleValue} />

        <button
        onClick={handleAdd}>
        Adicionar
        </button>
      </div>  
    );
}