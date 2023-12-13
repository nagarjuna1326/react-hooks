import { Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

const UseStateObject = () => {
    const [name, setName] = useState({
        firstName: '',
        lastName : ''
    })

    return (
        <><Stack spacing={2} direction='column'>
            <Stack spacing={2} direction='row'>
                <TextField
                    sx={{ width : '30%'}}
                    label='First Name'
                    variant="outlined"
                    onChange={e => setName({
                        ...name,
                        firstName: e.target.value,
                        // lastName : name.lastName
                    })}>{name.firstName}</TextField>
                <TextField
                    sx={{ width : '30%'}}
                    label='Last Name'
                    variant="outlined"
                    onChange={e => setName({
                        // firstName : name.firstName,
                        ...name,
                        lastName: e.target.value
                    })}>{name.lastName}</TextField>
            </Stack>
            <Stack spacing={2} direction='column'>
                <Typography variant="h6">First Name: <span style={{fontSize : '15px'}}>{name.firstName}</span></Typography>
                <Typography variant="h6">Last Name: <span style={{ fontSize: '15px' }}>{name.lastName}</span></Typography>
            </Stack>
            </Stack>
        </>
    )
}

export default UseStateObject