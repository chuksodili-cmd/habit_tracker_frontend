import { userState } from "react"

export default function Counter(){
    const [count, setCount]= userState(0)

    function increment(){
        setCount(count + 1)
    }

    return( 
        <button onClick={increment}>
            Clicked {count} times
        </button>
    )
}