import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { withStyles } from "@material-ui/core/styles";


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    container: {
        padding: theme.spacing(0),
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
            <Container className={ classes.container }>
                <div className={ classes.root }>
                    <AppBar color='default' position='static'>
                        <Toolbar>
                            <Typography className={ classes.items } variant='h6'>{ title }</Typography>
                            <Button color='inherit'>{ username }</Button>
                        </Toolbar>
                    </AppBar>
                </div>
            </Container>
        );
    }
}


export default withStyles(styles, {withTheme: true})(HeaderBar);