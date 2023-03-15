import { createContext, useContext } from "react"

const CyclesContext = createContext({
    activeCycle: 5
})

function newCycleForm() {
    let {activeCycle} = useContext(CyclesContext)

    return(
        <h1>
            newCycleForm: {activeCycle}
        </h1>
    )
}

export function Home() {
    return(<h1>Home</h1>)
}