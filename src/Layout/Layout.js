import  React, {Component} from 'react';
import  Aux from '../hoc/Aux';
import  classes from './Layout.css';
import  Toolbar from '../Components/Navigation/Toolbar/Toolbar';
import  SideDrawer from '../Components/Navigation/SideDrawer/SideDrawer';


class  Layout extends Component {

    state = {
        showSideDrawer:true
    }

    sideDrawerClosedHandler = () =>{
        this.setState({showSideDrawer:false});
    }


    render(){
        return (<Aux>
                <Toolbar></Toolbar>
                <SideDrawer
                closed={this.sideDrawerClosedHandler}
                open={this.state.showSideDrawer}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}


export  default Layout;