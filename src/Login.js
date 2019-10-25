import React from "react";

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";
import { Checkbox } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    loginContainer: {
        margin: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    loginForm: {
        marginTop: theme.spacing(2),
        width: '100%',
    },
    loginText: {
        margin: theme.spacing(1),
    },
    loginRole: {
        margin: theme.spacing(1),
        paddingTop: theme.spacing(0.5),
    },
    loginButton: {
        margin: theme.spacing(3, 5, 2),
    },
}))

function Login() {
    const classes = useStyles();

    return (
        <Container component='main' maxWidth='sm'>
            <div className={ classes.loginContainer }>
                <Typography component='h1' variant='h5'>Sign In</Typography>
                <FormControl className={ classes.loginForm } component='form'>
                    <TextField className={ classes.loginText } label='Email Address' type='email' variant='outlined' required fullWidth autoFocus />
                    <TextField className={ classes.loginText } label='Password' type='password' variant='outlined' required fullWidth />
                    <RadioGroup row>
                        <FormControlLabel name='loginAsStudent' value='Student' control= { <Radio color='primary' /> } label='Student' />
                        <FormControlLabel name='loginAsTruck' value='Truck' control= { <Radio color='primary' /> } label='Truck Manager' />
                        <FormLabel className={ classes.loginRole } required>Role</FormLabel>
                    </RadioGroup>
                    <FormControlLabel control={ <Checkbox value="Remember" color='primary' /> } label='Remember me?' />
                    <ButtonGroup row>
                        <Button className={ classes.loginButton } variant='contained' color='primary'>Log me in</Button>
                        <Button className={ classes.loginButton } variant='contained' color='secondary'>Register</Button>
                    </ButtonGroup>
                </FormControl>
            </div>
        </Container>
    )
}

export default Login;