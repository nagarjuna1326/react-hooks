import { Button } from "@mui/material"
import { useState } from "react"

const HookCounter = () => {
    
    const initialCount = 0

    const [count, setCount] = useState(initialCount)

    const onClickButton = () => {
        setCount(prevCount => (
            prevCount + 1
        ))
    }
    
    return (
        <>
            <div>
                <Button variant="outlined" onClick={onClickButton}>Hook Counter Count: { count }</Button>
            </div>
        </>
    )
}

export default HookCounter