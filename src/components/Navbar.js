import { AppBar, Box, Stack, Toolbar, Typography } from "@mui/material"
import { useState } from "react"
import {  NavLink } from "react-router-dom"

const Navbar = () => {

    const navLinStyle = ({ isActive }) => {
        return (
            {
                backgroundColor : isActive ? 'whiteamoke' : '',
                color : isActive ? 'black' : 'whitesmoke',
                
            }
        )
    }

    const [activeBox, setActiveBox] = useState({
        previousId : 'id1',
        id1: true,
        id2: false,
        id3: false,
        id4: false,
        id5: false,
        id6: false
    })

    
    const keys = Object.keys(activeBox)
    
    const previousIdKey = activeBox.previousId
    
    const onClickBox = (e) => {
        // console.log(typeof (e.target.id))
        // const previousIdValue = e.target.value 
        // console.log(previousIdValue)
        const currentId = e.target.id
        if (previousIdKey !== currentId) {
            keys.forEach((key, index) => {
                if (key === currentId) {
                    // console.log(key)
                    setActiveBox({
                        ...activeBox,
                        [key]: true,
                        previousId: currentId,
                        [previousIdKey] : false
                    })
                }
            })
        }

    }

    const boxStyle = (isTrue) => {
        return (
            {
                backgroundColor : isTrue ? 'whitesmoke' : ''
            }
        )
    }


    return (
        <>
            
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>REACT HOOKS</Typography>
                    <Stack  spacing={0} direction='row'>
                        <NavLink  style={navLinStyle} to='/'>
                            
                            <Box
                                style={boxStyle(activeBox.id1)}
                                id='id1'
                                onClick={onClickBox}
                                sx={{ paddingTop: '20px', paddingBottom: '20px', paddingLeft: '10px', paddingRight: '10px' }}>
                                <Typography
                                    style={boxStyle(activeBox.id1)}
                                    id='id1'
                                    onClick={onClickBox}
                                    variant="body1" >Class Counter</Typography>
                            </Box>
                            
                            
                        </NavLink>
                        <NavLink style={navLinStyle} to='/hookCounter'>
                            
                            <Box
                                style={boxStyle(activeBox.id2)}
                                id='id2'
                                onClick={onClickBox}
                                sx={{ paddingTop: '20px', paddingBottom: '20px', paddingLeft: '10px', paddingRight: '10px' }}>
                                <Typography
                                    style={boxStyle(activeBox.id2)}
                                    id='id2'
                                    onClick={onClickBox}
                                    variant="body1" >Hook Counter</Typography>
                            </Box>
                            
                        </NavLink>
                        <NavLink style={navLinStyle} to='/hookCounterTwo'>
                            <Box
                                style={boxStyle(activeBox.id3)}
                                id='id3'
                                onClick={onClickBox}
                                sx={{ paddingTop: '20px', paddingBottom: '20px', paddingLeft: '10px', paddingRight: '10px' }}>
                                <Typography
                                    style={boxStyle(activeBox.id3)}
                                    id='id3'
                                    onClick={onClickBox}
                                    variant="body1" >Hook Counter Two</Typography>
                            </Box>
                        </NavLink>
                        <NavLink style={navLinStyle} to='/useStateObject'>
                            <Box
                                style={boxStyle(activeBox.id4)}
                                id='id4'
                                onClick={onClickBox}
                                sx={{ paddingTop: '20px', paddingBottom: '20px', paddingLeft: '10px', paddingRight: '10px' }}>
                                <Typography
                                    style={boxStyle(activeBox.id4)}
                                    id='id4'
                                    onClick={onClickBox}
                                    variant="body1" >Use State Object</Typography>
                            </Box>
                            
                        </NavLink>
                        <NavLink style={navLinStyle} to='/dateDifference'>
                            <Box
                                style={boxStyle(activeBox.id5)}
                                id='id5'
                                onClick={onClickBox}
                                sx={{ paddingTop: '20px', paddingBottom: '20px', paddingLeft: '10px', paddingRight: '10px' }}>
                                <Typography
                                     style={boxStyle(activeBox.id5)}
                                     id='id5'
                                     onClick={onClickBox}
                                    variant="body1" >Date Difference</Typography>
                            </Box>
                            
                        </NavLink>
                        <NavLink style={navLinStyle} to='/SICalculator'>
                            <Box
                                style={boxStyle(activeBox.id6)}
                                id='id6'
                                onClick={onClickBox}
                                sx={{ paddingTop: '20px', paddingBottom: '20px', paddingLeft: '10px', paddingRight: '10px' }}>
                                <Typography
                                    style={boxStyle(activeBox.id6)}
                                    id='id6'
                                    onClick={onClickBox}
                                    variant="body1" >S.I Calculator</Typography>
                            </Box>
                        </NavLink>
                    </Stack>
                </Toolbar>
            </AppBar>
            
            
        </>
    )
}

export default Navbar