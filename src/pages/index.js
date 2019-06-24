import React, { Component } from 'react'
import MiniDrawer from '../components/Layout'
import EnhancedTable from '../components/Tables'
import Sidebar from '../components/Sidebar'
import Grid from '@material-ui/core/Grid'
import axios from 'axios'
import Actionbar from '../components/Actionbar'
//import Topbar from '../components/Topbar'

class Home extends Component {

    state = {
        persons : []
    }

    componentDidMount(){
        axios.get(`http://localhost:3004/posts`)
        .then(res => {
          const persons = res.data;
          this.setState({ persons });
        })
    }

    render() {
        const { persons } = this.state;
        return (
            <MiniDrawer>
                <Grid container spacing={2}>
                    <Grid item sm={10}>
                        <Actionbar />  
                        <EnhancedTable persons={persons} />
                    </Grid>
                    <Grid item sm={2}>
                        <Sidebar />
                    </Grid>
                </Grid>
            </MiniDrawer>
        )
    }
}

export default Home