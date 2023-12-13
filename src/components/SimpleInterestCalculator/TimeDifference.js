import { Button, TextField, Stack, Typography, InputAdornment } from "@mui/material"
import { useState } from "react"



const TimeDifference = () => {

    

    const [date, setDate] = useState({ date1: '', date2: '', time1: '', time2: '' })

    // const [final, setFinal] = useState({
    //     years: 0,
    //     months: 0,
    //     days: 0
    // })
    
    const [days, setDays] = useState({
        days: ''
        
    })

    const [hours, setHours] = useState({
        hours: ''
    })

    const [minutes, setMinutes] = useState({
        mins : ''
    })

    const [isDisplay, setIsDisplay] = useState(false)

    const [amount, setAmount] = useState({ amount: 0 })

    // const [totalAmount, setTotalAmount] = useState({ totalAmount : 0})

    const [interest, setInterest] = useState({ interest: 0 })
    
    const [finalInterest, setFinalInterest] = useState({finalInterest : 0})
    
    const onChangeAmount = (e) => {
        setAmount({...amount, amount : e.target.value })
    }

    

    const onChangeInterest = (e) => {
        setInterest({...interest, interest : e.target.value})
    }
    
    const onChangeDate1 = (e) => {
        setDate({...date, date1 : (e.target.value)})
    }

    const onChangeDate2 = (e) => {
        setDate({...date, date2 : (e.target.value)})
    }

    const onChangeTime1 = (e) => {
        setDate({...date, time1 : (e.target.value)})
    }

    const onChangeTime2 = (e) => {
        setDate({...date, time2 : (e.target.value)})
    }

    const onClickButton = () => {
        const Date1 = new Date(date.date1)
        const Date2 = new Date(date.date2)

        const year1 = Date1.getFullYear()
        const year2 = Date2.getFullYear()

        const month1 = Date1.getMonth()
        const month2 = Date2.getMonth()

        const day1 = Date1.getDate()
        const day2 = Date2.getDate()


        const Time1 = date.time1.split(":")
        const Time2 = date.time2.split(":")

        const hour1 = parseInt(Time1[0])
        const min1 = parseInt(Time1[1])

        const hour2 = parseInt(Time2[0])
        const min2 = parseInt(Time2[1])

        // console.log(min1)
        // console.log(min2)

        setIsDisplay(true)

        


        if (year1 > year2) {

            const Difference_In_Time = Date1.getTime() - Date2.getTime()

            let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24)

            // if (Difference_In_Days >= 365) {

            //     const difference_in_years = Math.floor(Difference_In_Days / 365)

            //     console.log(difference_in_years)

            //     let remaining_days_after_years = Difference_In_Days - (difference_in_years * 365)

            //     setFinal({...final, years: difference_in_years, days : remaining_days_after_years })
                
            //     if (remaining_days_after_years >= 30) {

            //         const difference_in_months = Math.floor(remaining_days_after_years / 30)

            //         let remaining_days_after_months = remaining_days_after_years - (difference_in_months * 30)

            //         setFinal({...final, months : difference_in_months, days : remaining_days_after_months})

                    
            //     }
            // } else if (Difference_In_Days >= 30) {
            //     const difference_in_months = Math.floor(Difference_In_Days / 30)

            //     let remaining_days_after_months = Difference_In_Days - (difference_in_months * 30)

            //     setFinal({...final, months : difference_in_months, days : remaining_days_after_months})

            // }

            

           

            // console.log(hour1)
            // console.log(hour2)

            const interestAmount = (amount.amount * Difference_In_Days * interest.interest) / (100 * 365)

            setFinalInterest({ ...finalInterest, finalInterest: Math.floor(interestAmount) })

            // const amountPlusInterest = parseInt(amount.amount) + parseInt(finalInterest.finalInterest)
            
            // setTotalAmount({  totalAmount: amountPlusInterest })
            
            let differnce_in_hours = hour1 - hour2
            // console.log(differnce_in_hours)

            let differnce_in_mins = min1 - min2 

            

            if (differnce_in_hours < 0) {
                Difference_In_Days -= 1
                // differnce_in_hours = differnce_in_hours.toString()
                // console.log(differnce_in_hours)
                // differnce_in_hours = parseInt(differnce_in_hours)
                differnce_in_hours = 24 + differnce_in_hours
                
                console.log(Difference_In_Days)
                console.log(differnce_in_hours)
                setDays({ days: Difference_In_Days })
                setHours({ hours: differnce_in_hours })

                
            }
            else if (differnce_in_hours >= 0) {
                console.log(Difference_In_Days)
                console.log(differnce_in_hours)
                setDays({ days: Difference_In_Days })
                setHours({ hours: differnce_in_hours })

                

            }
            // else {
            //     if (differnce_in_mins < 0) {
            //         differnce_in_hours = 24
            //         Difference_In_Days -= 1
            //         setDays({ days: Difference_In_Days })
            //         setHours({ hours: differnce_in_hours })
            //     }
            // }


            
            if (differnce_in_mins < 0) {
                
                if (differnce_in_hours === 0) {
                    differnce_in_hours = 23
                    Difference_In_Days -= 1
                    differnce_in_mins = 60 + differnce_in_mins
                    setDays({ days: Difference_In_Days })
                    setHours({ hours: differnce_in_hours })
                    setMinutes({mins : differnce_in_mins})
                }
                else {
                    differnce_in_hours -= 1
                    // differnce_in_mins = differnce_in_mins.toString()
                    // differnce_in_mins = parseInt(differnce_in_mins)
                    differnce_in_mins = 60 + differnce_in_mins
                    // console.log(differnce_in_hours)
                    console.log(differnce_in_mins)
                    setHours({ hours : differnce_in_hours})
                    setMinutes({mins : differnce_in_mins})

                }
            }
            else if (differnce_in_mins >= 0) {
                // console.log(differnce_in_hours)
                console.log(differnce_in_mins)
                setMinutes({mins : differnce_in_mins})

            }
        
        
            
            

        }

        else if (year1 < year2) {
            const Difference_In_Time = Date2.getTime() - Date1.getTime()

            let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24)

            const interestAmount = (amount.amount * Difference_In_Days * interest.interest) / (100 * 365)

            setFinalInterest({ ...finalInterest, finalInterest: Math.floor(interestAmount) })

            let differnce_in_hours = hour2 - hour1

            let differnce_in_mins = min2 - min1

            if (differnce_in_hours < 0) {
                Difference_In_Days -= 1
                // differnce_in_hours = differnce_in_hours.toString()
                // differnce_in_hours = parseInt(differnce_in_hours)
                differnce_in_hours = 24 + differnce_in_hours
                console.log(Difference_In_Days)
                console.log(differnce_in_hours)
                setDays({ days: Difference_In_Days })
                setHours({ hours  : differnce_in_hours})

            }
            else if (differnce_in_hours >= 0) {
                console.log(Difference_In_Days)
                console.log(differnce_in_hours)
                setDays({ days: Difference_In_Days })
                setHours({ hours  : differnce_in_hours})

            }
            // else if (differnce_in_hours === 0)  {
            //     if (differnce_in_mins < 0) {
            //         Difference_In_Days -= 1
            //         differnce_in_hours = 24 + differnce_in_mins
            //         setDays({ days: Difference_In_Days })
            //         setHours({ hours  : differnce_in_hours})

            //     }
            // }

            if (differnce_in_mins < 0) {
                if (differnce_in_hours === 0) {
                    differnce_in_hours = 23
                    Difference_In_Days -= 1
                    differnce_in_mins = 60 + differnce_in_mins
                    setDays({ days: Difference_In_Days })
                    setHours({ hours: differnce_in_hours })
                    setMinutes({mins : differnce_in_mins})
                }
                else {
                    differnce_in_hours -= 1
                    // differnce_in_mins = differnce_in_mins.toString()
                    // differnce_in_mins = parseInt(differnce_in_mins)
                    differnce_in_mins = 60 + differnce_in_mins
                    // console.log(differnce_in_hours)
                    console.log(differnce_in_mins)
                    setHours({ hours : differnce_in_hours})
                    setMinutes({mins : differnce_in_mins})

                }
            }
            else if (differnce_in_mins >= 0) {
                // console.log(differnce_in_hours)
                console.log(differnce_in_mins)
                setMinutes({mins : differnce_in_mins})
            }

        }

        else {
            if (month1 > month2) {
                const Difference_In_Time = Date1.getTime() - Date2.getTime()

                let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24)

                const interestAmount = (amount.amount * Difference_In_Days * interest.interest) / (100 * 365)

                setFinalInterest({ ...finalInterest, finalInterest: Math.floor(interestAmount) })

                let differnce_in_hours = hour1 - hour2

                if (differnce_in_hours < 0) {
                    Difference_In_Days -= 1
                    // differnce_in_hours = differnce_in_hours.toString()
                    // differnce_in_hours = parseInt(differnce_in_hours)
                    differnce_in_hours = 24 + differnce_in_hours
                    console.log(Difference_In_Days)
                    console.log(differnce_in_hours)
                    setDays({ days: Difference_In_Days })
                    setHours({ hours  : differnce_in_hours})


                }
                else if (differnce_in_hours >= 0) {
                    console.log(Difference_In_Days)
                    console.log(differnce_in_hours)
                    setDays({ days: Difference_In_Days })
                    setHours({ hours  : differnce_in_hours})

                }

                let differnce_in_mins = min1 - min2 

                if (differnce_in_mins < 0) {
                    if (differnce_in_hours === 0) {
                        differnce_in_hours = 23
                        Difference_In_Days -= 1
                        differnce_in_mins = 60 + differnce_in_mins
                        setDays({ days: Difference_In_Days })
                        setHours({ hours: differnce_in_hours })
                        setMinutes({mins : differnce_in_mins})
                    }
                    else {
                        differnce_in_hours -= 1
                        // differnce_in_mins = differnce_in_mins.toString()
                        // differnce_in_mins = parseInt(differnce_in_mins)
                        differnce_in_mins = 60 + differnce_in_mins
                        // console.log(differnce_in_hours)
                        console.log(differnce_in_mins)
                        setHours({ hours : differnce_in_hours})
                        setMinutes({mins : differnce_in_mins})
    
                    }
                }
                else if (differnce_in_mins >= 0) {
                    // console.log(differnce_in_hours)
                    console.log(differnce_in_mins)
                    setMinutes({mins : differnce_in_mins})
                }
            }
            else if (month1 < month2) {
                const Difference_In_Time = Date2.getTime() - Date1.getTime()

                let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24)

                const interestAmount = (amount.amount * Difference_In_Days * interest.interest) / (100 * 365)

                setFinalInterest({ ...finalInterest, finalInterest: Math.floor(interestAmount) })

                let differnce_in_hours = hour2 - hour1


                if (differnce_in_hours < 0) {
                    Difference_In_Days -= 1
                    // differnce_in_hours = differnce_in_hours.toString()
                    // differnce_in_hours = parseInt(differnce_in_hours)
                    differnce_in_hours = 24 + differnce_in_hours
                    console.log(Difference_In_Days)
                    console.log(differnce_in_hours)
                    setDays({ days: Difference_In_Days })
                    setHours({ hours  : differnce_in_hours})

                }
                else if (differnce_in_hours >= 0) {
                    console.log(Difference_In_Days)
                    console.log(differnce_in_hours)
                    setDays({ days: Difference_In_Days })
                    setHours({ hours  : differnce_in_hours})

                }

                let differnce_in_mins = min2 - min1

                if (differnce_in_mins < 0) {
                    if (differnce_in_hours === 0) {
                        differnce_in_hours = 23
                        Difference_In_Days -= 1
                        differnce_in_mins = 60 + differnce_in_mins
                        setDays({ days: Difference_In_Days })
                        setHours({ hours: differnce_in_hours })
                        setMinutes({mins : differnce_in_mins})
                    }
                    else {
                        differnce_in_hours -= 1
                        // differnce_in_mins = differnce_in_mins.toString()
                        // differnce_in_mins = parseInt(differnce_in_mins)
                        differnce_in_mins = 60 + differnce_in_mins
                        // console.log(differnce_in_hours)
                        console.log(differnce_in_mins)
                        setHours({ hours : differnce_in_hours})
                        setMinutes({mins : differnce_in_mins})
    
                    }
                }
                else if (differnce_in_mins >= 0) {
                    // console.log(differnce_in_hours)
                    console.log(differnce_in_mins)
                    setMinutes({mins : differnce_in_mins})
                }
            }
            else {
                if (day1 >= day2) {
                    const Difference_In_Time = Date1.getTime() - Date2.getTime()

                    let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24)

                    const interestAmount = (amount.amount * Difference_In_Days * interest.interest) / (100 * 365)

                    setFinalInterest({ ...finalInterest, finalInterest: Math.floor(interestAmount) })

                    let differnce_in_hours = hour1 - hour2

                    if (differnce_in_hours < 0) {
                        Difference_In_Days -= 1
                        // differnce_in_hours = differnce_in_hours.toString()
                        // differnce_in_hours = parseInt(differnce_in_hours)
                        differnce_in_hours = 24 + differnce_in_hours
                        console.log(Difference_In_Days)
                        console.log(differnce_in_hours)
                        setDays({ days: Difference_In_Days })
                        setHours({ hours  : differnce_in_hours})
    

                    }
                    else if (differnce_in_hours >= 0) {
                        console.log(Difference_In_Days)
                        console.log(differnce_in_hours)
                        setDays({ days: Difference_In_Days })
                        setHours({ hours  : differnce_in_hours})

                    }

                    let differnce_in_mins = min1 - min2 

                    if (differnce_in_mins < 0) {
                        if (differnce_in_hours === 0) {
                            differnce_in_hours = 23
                            Difference_In_Days -= 1
                            differnce_in_mins = 60 + differnce_in_mins
                            setDays({ days: Difference_In_Days })
                            setHours({ hours: differnce_in_hours })
                            setMinutes({mins : differnce_in_mins})
                        }
                        else {
                            differnce_in_hours -= 1
                            // differnce_in_mins = differnce_in_mins.toString()
                            // differnce_in_mins = parseInt(differnce_in_mins)
                            differnce_in_mins = 60 + differnce_in_mins
                            // console.log(differnce_in_hours)
                            console.log(differnce_in_mins)
                            setHours({ hours : differnce_in_hours})
                            setMinutes({mins : differnce_in_mins})
        
                        }
                    }
                    else if (differnce_in_mins >= 0) {
                        // console.log(differnce_in_hours)
                        console.log(differnce_in_mins)
                        setMinutes({mins : differnce_in_mins})
                    }
                }
                else if (day1 < day2) {
                    const Difference_In_Time = Date2.getTime() - Date1.getTime()

                    let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24)

                    const interestAmount = (amount.amount * Difference_In_Days * interest.interest) / (100 * 365)

                    setFinalInterest({ ...finalInterest, finalInterest: Math.floor(interestAmount) })

                    let differnce_in_hours = hour2 - hour1


                    if (differnce_in_hours < 0) {
                        Difference_In_Days -= 1
                        // differnce_in_hours = differnce_in_hours.toString()
                        // differnce_in_hours = parseInt(differnce_in_hours)
                        differnce_in_hours = 24 + differnce_in_hours
                        console.log(Difference_In_Days)
                        console.log(differnce_in_hours)
                        setDays({ days: Difference_In_Days })
                        setHours({ hours  : differnce_in_hours})

                    }
                    else if (differnce_in_hours >= 0) {
                        console.log(Difference_In_Days)
                        console.log(differnce_in_hours)
                        setDays({ days: Difference_In_Days })
                        setHours({ hours  : differnce_in_hours})

                    }

                    let differnce_in_mins = min2 - min1

                    if (differnce_in_mins < 0) {
                        if (differnce_in_hours === 0) {
                            differnce_in_hours = 23
                            Difference_In_Days -= 1
                            differnce_in_mins = 60 + differnce_in_mins
                            setDays({ days: Difference_In_Days })
                            setHours({ hours: differnce_in_hours })
                            setMinutes({mins : differnce_in_mins})
                        }
                        else {
                            differnce_in_hours -= 1
                            // differnce_in_mins = differnce_in_mins.toString()
                            // differnce_in_mins = parseInt(differnce_in_mins)
                            differnce_in_mins = 60 + differnce_in_mins
                            // console.log(differnce_in_hours)
                            console.log(differnce_in_mins)
                            setHours({ hours : differnce_in_hours})
                            setMinutes({mins : differnce_in_mins})
        
                        }
                    }
                    else if (differnce_in_mins >= 0) {
                        // console.log(differnce_in_hours)
                        console.log(differnce_in_mins)
                        setMinutes({mins : differnce_in_mins})
                    }
                }
            }
        }



        
        
        


        





    }

    return (
        <>
            <Stack spacing={2} direction='column'>
                <Stack spacing={2} direction='row'>
                    <TextField
                        type='date'
                        
                        sx={{ width : "20%"}}
                        // label='Date-1'
                        value={date.date1}
                        variant="outlined"
                        // helperText='format should be in yyyy-mm-dd or dd-mm-yyyy or yyyy/mm/dd or dd/mm/yyyy'
                        onChange={onChangeDate1}
                    />
                    <TextField
                        type='time'
                        sx={{ width : "10%"}}
                        // label='time-1 in 24hrs clock'
                        value={date.time1}
                        variant="outlined"
                        onChange={onChangeTime1}
                        // helperText='format should be in hrs:mins'
                        required
                    />
                </Stack>

                <Stack spacing={2} direction='row'>
                <TextField
                    sx={{ width : "20%"}}
                    type='date'
                    // label='Date-2'
                    value={date.date2}
                    variant="outlined"
                    onChange={onChangeDate2}
                    // helperText='format should be in yyyy-mm-dd or dd-mm-yyyy or yyyy/mm/dd or dd/mm/yyyy'
                />
                <TextField
                        sx={{ width : "10%"}}
                        type='time'
                        // label='time-2 in 24hrs clock'
                        value={date.time2}
                        variant="outlined"
                        onChange={onChangeTime2}
                        // helperText='format should be in hrs:mins'
                        required
                    />
                </Stack>

                <Stack spacing={2} direction='column'>
                    <TextField
                        label='Principle Amount'
                        type='text'
                        sx={{ width: "20%" }}
                        onChange={onChangeAmount}
                        InputProps={{
                            startAdornment : <InputAdornment position='start'>₹</InputAdornment>
                        }}

                    />
                    <TextField
                        label='Interest' 
                        sx={{ width: '15%' }}
                        onChange={onChangeInterest}
                        InputProps={{
                            endAdornment : <InputAdornment position='end'>%</InputAdornment>
                        }} />
                </Stack>

                <Button
                    onClick={onClickButton}
                    sx={{ width: '20%' }}
                    variant='contained'
                >Calculate</Button>
                {
                    isDisplay &&
                    <>
                        <Typography variant="h4" color='success'>{days.days} Days {hours.hours} Hours {minutes.mins} Mins</Typography>
                        {/* <Typography variant="h5">{final.years} Years {final.months} Months { final.days } Days</Typography> */}
                        <Typography variant="h5" >Interest : {finalInterest.finalInterest}</Typography>
                        <Typography>Total Amount : {parseInt(amount.amount) + parseInt(finalInterest.finalInterest)}</Typography>
                        </>
                }
            </Stack>
        </>
    )
}

export default TimeDifference