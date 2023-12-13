import { Component } from 'react'
import { Button } from '@mui/material'

class ClassCounter extends Component  {

    constructor(props) {
        super(props)

        this.state = {
            count : 0
        }
    }
    
    onClickButton = () => {
        this.setState(prevState => (
            {count : prevState.count + 1 }
        ) )
    }
    
    render() {

        const { count } = this.state

        
        return (
            <>
                <div>
                    <Button variant='outlined' onClick={this.onClickButton}>Class Counter Count: {count}</Button>
                </div>
            </>
        )
    }


    
}

export default ClassCounter