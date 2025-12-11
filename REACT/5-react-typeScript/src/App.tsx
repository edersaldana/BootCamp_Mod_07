import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

interface Todo {

  id: number;
  text: string;
  completed: boolean;

}

function App() {
  const [count, setCount] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<String>("");

  console.log(newTodo);

  return (
    
    <main>

    </main>
  )
}

export default App
