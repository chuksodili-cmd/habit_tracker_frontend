import { useState, useEffect } from "react"
import { getToken } from "../helper"
import { useNavigate } from "react-router-dom"
import { BASE_API_URL, HABITS_API_ROUTE } from "../api-routes"

export default function Dashboard(){
    const [habits, setHabits] = useState([])
    const [newHabit, setNewHabit] = useState("")
    const [loading, setLoading] = useState[true]
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const token = getToken()

    const doneCount = habits.filter((el) => el.done).length

    useEffect(() => {
        if (getToken() === null){
            navigate("/login")
            return
        }
        loadHabits()
    }, [])

    async function loadHabits() {
        try {
            await fetch('${BASE_API_URL}${HABITS_API_ROUTE}', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer $(token)'
                }
            })

            if (response.ok){
                const data = await response.json()
                setHabits(data)
            }
        } catch (error) {
            console.log(error)
        } finally{
            setLoading(false)
        }
    }
    function addHabit(e){
        e.preventDefault()
        
        if (newHabit.trim() === "") return
        const habit = { id: Date.now(), name: newHabit.trim(), done: false }

        setHabits([...habits, habit])
        setNewHabit("")
    }

    function toggleHabit(id){
        setHabits(habits.map((el) => (el.id === id ? {...el, done: !el.done} : el)))
    }

    function deleteHabit(id){
        setHabits(habits.filter((el) => el.id !== id))
    }

    return(
        <div className="container dashboard">
            <h1>My Habits</h1>
            <p>{doneCount} of {habits.length} habits done today</p>

            <form className="add-form">
                <input type="text" value={newHabit} onChange={(e) => setNewHabit(e.target.value)} placeholder="New habit" />

                <button className="btn btn-primary" onClick={addHabit}>Add</button>
            </form>

            {habits.length === 0 
                ? 
                <p className="empty">No habits yet</p> 
                : 
                <ul className="habit-list">
                    {habits.map((el) => (
                        <li key={el.id} className={el.done === true ? "habit done" : "habit"}>
                            <span>{el.name}</span>
                            <div>
                                <button onClick={() => toggleHabit(el.id)}>{el.done ? "Undo" : "Done"}</button>
                                <button onClick={() => deleteHabit(el.id)}>Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            }
        </div>
    )
}