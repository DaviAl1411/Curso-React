import { useEffect, useState } from "react"
import { InputAdd } from "../components/InputAdd"
import { List } from "../components/List"
import { TodoItem } from "../components/TodoItem"
import { TodoAPI, type ITodo } from "../shared/services/api/TodoAPI"
import { PageLayout } from "../shared/layout/page-layout/PageLayout"



export const Home = () => {
 const [list,setList] = useState<ITodo[]>([])

  useEffect(() => {
    TodoAPI.getAll().then(data => setList(data))
  },[])

  const handleAdd = (value:string) => {

    TodoAPI.create({ label: value, complete: false })
    .then(data => {
      setList(item => [...item, data])
    })
  }

  const handleComplete = (id:string) => {
       TodoAPI.updateById(id,{complete : true})
       .then(() => {
        setList([
          ...list.map(item => ({
            ...item,
            complete:item.id === id ? true : item.complete
          }))
        ])
       })
    }

    const handleListRemove = (id:string) => {
        TodoAPI.deleteById(id)
        .then(data => {setList([ ...list.filter (item => item.id !== id)])})
    }

  return (
    <PageLayout title="Página Inicial">
      <InputAdd
      onAdd = {handleAdd}
      />
      <List>
        {list.map ((listItem) => (
          <TodoItem
            key={listItem.id}
            id = {listItem.id}
            label = {listItem.label}
            complete = {listItem.complete}
            
            onConclude = {() => handleComplete(listItem.id)}
            onRemove = {() => handleListRemove(listItem.id)}/>
          ))} 
        </List>
    </PageLayout>
  )
}