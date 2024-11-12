import { useState,useEffect } from 'react'
import './App.css'
// import ControlPanel from './Components/ControlPanel'
import KanbanBoard from './Components/KanbanBoard'
function App() {
const [tickets,setTickets]= useState([])
const [users,setUsers]= useState([])
const [grouping, setGrouping] = useState("status");
const [sorting, setSorting] = useState('priority');
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment ')
      const data = await response.json()
      console.log(data)
      setTickets(data.tickets)
      setUsers(data.users)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  fetchData()
}, [])
  return (
    <div>
      {/* <ControlPanel grouping={grouping} setGrouping={setGrouping} ordering={ordering} setOrdering={setOrdering} /> */}
      <KanbanBoard
        tickets={tickets}
        users={users}
        grouping={grouping}
        sorting={sorting}
        setGrouping={setGrouping}
        setSorting={setSorting}
      />
    </div>
  )
}

export default App