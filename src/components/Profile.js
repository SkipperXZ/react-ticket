import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
class Profile extends Component {
   
    render(){
        const style = { 
            padding: '20px' 
        };

        return(
            <div className="profile-wrapper">
                <div style={style}>
                    <Grid container spacing={2}>
                        <Grid item sm={6}><img src="https://d17fnq9dkz9hgj.cloudfront.net/uploads/2012/11/152964589-welcome-home-new-cat-632x475.jpg" alt="cat" width="100%" /> </Grid>
                        <Grid item sm={6}> <Typography style={{fontSize:'18px'}}>John Doe</Typography> </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default Profile