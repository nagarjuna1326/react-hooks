import { Button, Stack } from "@mui/material"
import { useState } from "react"

const HookCounterTwo = () => {

    const initialCount = 0
    
    const [count, setCount] = useState(initialCount)

    const [clearTimerId, setClearTimerId] = useState(null)

    const [minCount, setMinCount] = useState(0)
    
    const [clearTimerMinId, setClearTimerMinId] = useState(null)

    const [milliSeconds, setMilliSeconds] = useState(0)

    const [clearTimerMilliId, setClearTimerMilliId] = useState(null)

    const [stopWatchClickCount, setStopWatchClickCount] = useState(1)

    const onClickReset = () => {
        setCount(0)
        setMinCount(0)
        setMilliSeconds(0)
        if (stopWatchClickCount % 2 === 0) {
            setStopWatchClickCount(prevState => (
                prevState + 1
            ))
            clearInterval(clearTimerId)
            clearInterval(clearTimerMinId)
            clearInterval(clearTimerMilliId)
        }
    }

    const onClickIncreament = () => {
        setCount(prevCount => (
            prevCount + 1
        ))
    }

    const onClickDecreament = () => {
        setCount(prevCount => (
            prevCount - 1
        ))
    }

    const onClickIncreamentBy5 = () => {
        setCount(prevCount => (
            prevCount + 5
        ))
    }

    let clearTimerMinId2 = null

    if (count === 60) {
        setCount(0)
        
    }

    if (milliSeconds === 100) {
        setMilliSeconds(0)
    }

    
    
    let clearTimerId1 = null

    let clearTimerId2 = null

    
    const onClickTimer = () => {

        // setCount(0)
        setStopWatchClickCount(prevState => (
            prevState + 1
        ))

        if (stopWatchClickCount % 2 === 1) {
            clearTimerId1 = setInterval(() => {
                setCount(prevCount => (
                    prevCount + 1
                ))
            }, 1000)

            setClearTimerId(clearTimerId1)

            clearTimerId2 = setInterval(() => {
                setMilliSeconds(prevmilliCount => (
                    prevmilliCount + 1
                ))
            }, 10)

            setClearTimerMilliId(clearTimerId2)

            clearTimerMinId2 = setInterval(() => {
                setMinCount(prevMinCount => (
                    prevMinCount + 1
                ))
            }, 60000)
    
            setClearTimerMinId(clearTimerMinId2)
        }

        else if (stopWatchClickCount % 2 === 0) {
            clearInterval(clearTimerId)
            clearInterval(clearTimerMinId)
            clearInterval(clearTimerMilliId)
        }
        
        
     
    }

    //console.log(clearTimerId)

    // const onClickTimerStop = () => {
        
    //     clearInterval(clearTimerId)
    // }

    
    
    return (
        <>
            <Stack spacing={2} direction='row'>
                
                    <Button sx={{width : '200px',outline : 'none', border : '0px'}} variant="outlined" >Count: {minCount} : {count} : {milliSeconds}</Button>
                    
                    <Button variant="contained" onClick={onClickIncreament}>Increament</Button>
                    <Button variant="contained" onClick={onClickDecreament}>Decreament</Button>
                    <Button variant="contained" onClick={onClickIncreamentBy5}>Increament By 5</Button>
                
                    
                    <Button variant="contained" onClick={onClickReset}>Reset</Button>
                    
                    <Button variant="contained" onClick={onClickTimer}>Stop Watch</Button>
                
                
                {/* <Button variant="contained" onClick={onClickTimerStop}>Timer Stop</Button> */}
            </Stack>
        </>
    )
}

export default HookCounterTwo