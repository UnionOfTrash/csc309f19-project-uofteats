import React from "react";

import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import { withStyles } from "@material-ui/core/styles";


const styles = theme => ({
    resetContainer: {
        margin: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    resetForm: {
        marginTop: theme.spacing(3),
        width: '100%',
    },
    resetComponent: {
        marginTop: theme.spacing(2),
    },
    gridComponent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


class Reset extends React.Component {

    render() {
        const { classes } = this.props;

        return (
            <Container component='main' maxWidth='sm'>
                <div className={ classes.resetContainer } >
                    <Typography component='h1' variant='h5'>Reset your password here</Typography>
                    <FormControl className={ classes.resetForm } component='form'>
                        <Grid className={ classes.resetComponent} container>
                            <Grid className={ classes.gridComponent } item xs={ 9 } >
                                <TextField label='Email Address' type='email' variant='outlined' required fullWidth/>
                            </Grid>
                            <Grid className={ classes.gridComponent } item xs>
                                <Button variant='contained' color='primary'>Send Code</Button>
                            </Grid>
                        </Grid>
                        <TextField className={ classes.resetComponent } label='Code' type='text' variant='outlined' required fullWidth/>
                        <TextField className={ classes.resetComponent } label='New Password' type='password' variant='outlined' required fullWidth disabled/>
                        <TextField className={ classes.resetComponent } label='Confirm New Password' type='password' variant='outlined' required fullWidth disabled/>
                        <Button className={ classes.resetComponent } variant='contained' color='secondary' fullWidth>Reset</Button>
                        <Grid className={ classes.resetComponent } container>
                            <Grid className={ classes.gridComponent } item xs>
                                <Link variant='body2' href='/login'>Login here!</Link>
                            </Grid>
                            <Grid className={ classes.gridComponent } item xs>
                                <Link variant='body2' href='/register'>Or register here!</Link>
                            </Grid>
                        </Grid>
                    </FormControl>
                </div>
            </Container>
        );
    }
}


export default withStyles(styles, {withTheme: true})(Reset);