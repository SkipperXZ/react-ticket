import React, { Component } from 'react'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import IconButton from "@material-ui/core/IconButton";
import { add_circle_outline } from '@material-ui/icons';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

class Topbar extends Component {
    
    constructor(props){
        super(props)
        this.state = {ToggleButton: "1"};      
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
                <div></div>
                /*<Button>
                    <Card>
                      <CardContent>
                          <add_circle_outline />
                           Custom Filter
                      </CardContent>
                    </Card>
                </Button>*/
        )
    }
}

export default Topbar