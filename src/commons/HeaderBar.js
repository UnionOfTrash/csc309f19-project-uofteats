import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { withStyles } from "@material-ui/core/styles";


const styles = theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(1),
    },
    items: {
        flexGrow: 1,
        margin: theme.spacing(1),
    },
});


class HeaderBar extends React.Component {

    render() {
        const { classes, title, username } = this.props;

        return (
            <AppBar color='default' position='static'>
                <Toolbar className={ classes.root }>
                    <Typography className={ classes.items } variant='h6'>{ title }</Typography>
                    <a href={"../customer/profile_page/UserProfileMain"}>
                        <p> { username } </p>
                    </a>
                    {/*<Button color='inherit'> { username } </Button>*/}
                </Toolbar>
            </AppBar>
        );
    }
}


export default withStyles(styles, {withTheme: true})(HeaderBar);