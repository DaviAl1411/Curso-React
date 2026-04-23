import { useState } from 'react';
import { InputAdd } from './components/InputAdd';
import { TodoItem } from './components/TodoItem';

export function App() {
  const [list,setList] = useState([
    {id: '1', label:'Teste', complete:false }
  ])

  const handleAdd = (value:string) => {
    setList([
        ...list,
        { id: (list.length + 1).toString(), complete:false, label: value}
            ]
          )
  }
  const handleList = (id:string) => {
        setList([
            ...list.map(item => ({
                ...item,
                complete: item.id === id ? true : item.complete
            }))
        ])
    }

    const handleListRemove = (id:string) => {
        setList([...list.filter(item => item.id !== id)])
    }

  return (
    <div>
      <InputAdd
      onAdd = {handleAdd}
      />
      <ol>
      {list.map ((listItem) => (
        <TodoItem
        key={listItem.id}
        id = {listItem.id}
        label = {listItem.label}
        complete = {listItem.complete}
        
        onConclude = {() => handleList(listItem.id)}
        onRemove = {() => handleListRemove(listItem.id)}/>
      ))}
      
      </ol>
    </div>
  )
}
