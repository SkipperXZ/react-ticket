import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { Refresh } from '@material-ui/icons';

class Actionbar extends Component {
    
    constructor(props){
        super(props)
        this.state = {ToggleButton: "1"};      
    }

    handleClick = (e) => {
        const ToggleButton = e.currentTarget.getAttribute("dataKey")
        this.setState({ToggleButton}, (state) => ({
            ToggleButton
        }));
    }

    render(){ 
        const style = { 
            root : {
                padding : 20
            },
            actionButton : {
                fontWeight : 'bold',
                marginRight : 20
            },
            textField :{
                padding: '10px 14px'
            }
        }
         
        return(
            <Grid container style={style.root}>
                <Grid item xs={6}>
                    <Box component="div" display="inline">
                        <Button datakey={1} className={"btn-action-toggle " + (this.state.ToggleButton==="1"?'active':'')} style={style.actionButton} display="inline" onClick={this.handleClick} >My Team</Button>
                        <Button datakey={2} className={"btn-action-toggle " + (this.state.ToggleButton==="2"?'active':'')} style={style.actionButton} display="inline" onClick={this.handleClick} >Other</Button>
                    </Box>   
                    <IconButton>
                         <Refresh fontSize="large" style={{verticalAlign: 'bottom'}} />
                    </IconButton>
                </Grid>
                <Grid item xs={6} style={{textAlign:'right'}}>
                    <TextField
                        id="outlined-bare"
                        placeholder="Search Summary"
                        variant="outlined"
                        className="search-input"
                        InputProps={{
                            'aria-label': 'search',
                            endAdornment: (
                                <InputAdornment>
                                    <IconButton>
                                        <SearchIcon />
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />
                </Grid>
            </Grid>
        )
    }
}

export default Actionbar