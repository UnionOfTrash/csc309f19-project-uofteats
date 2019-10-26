import React from "react";

import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import { withStyles } from "@material-ui/core/styles";


const styles = theme => ({
    registerContainer: {
        margin: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    registerForm: {
        marginTop: theme.spacing(3),
        width: '100%',
    },
    registerComponent: {
        marginTop: theme.spacing(2),
    },
    gridComponent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


class Register extends React.Component {

    render() {
        const { classes } = this.props;

        return (
            <Container component='main' maxWidth='sm'>
                <div className={ classes.registerContainer } >
                    <Typography component='h1' variant='h5'>Get U a ticket to UofTEats!</Typography>
                    <FormControl className={ classes.registerForm } component='form'>
                        <TextField className={ classes.registerComponent } label='Username' type='text' variant='outlined' required fullWidth autoFocus />
                        <TextField className={ classes.registerComponent } label='Email Address' type='email' variant='outlined' required fullWidth/>
                        <TextField className={ classes.registerComponent } label='Password' type='password' variant='outlined' required fullWidth />
                        <TextField className={ classes.registerComponent } label='Confirm Password' type='password' variant='outlined' required fullWidth />
                        <Grid className={ classes.registerComponent } container>
                            <Grid className={ classes.gridComponent } item xs={ 3 }>
                                <FormLabel required>Role</FormLabel>
                            </Grid>
                            <Grid item xs>
                                <RadioGroup row>
                                    <FormControlLabel name='loginAsStudent' value='Student' control= { <Radio color='primary' /> } label='Student' />
                                    <FormControlLabel name='loginAsTruck' value='Truck' control= { <Radio color='primary' /> } label='Truck Manager' disabled/>
                                </RadioGroup>
                            </Grid>
                        </Grid>
                        <Button className={ classes.registerComponent } variant='contained' color='secondary' fullWidth>Register</Button>
                        <Grid className={ classes.registerComponent } container>
                            <Grid className={ classes.gridComponent } item xs>
                                <Link variant='body2' href='/login'>Already have an account? Login here!</Link>
                            </Grid>
                        </Grid>
                    </FormControl>
                </div>
            </Container>
        );
    }
}


export default withStyles(styles, {withTheme: true})(Register);