import React from "react";

import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
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
    loginContainer: {
        margin: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    loginForm: {
        marginTop: theme.spacing(3),
        width: '100%',
    },
    loginComponent: {
        marginTop: theme.spacing(2),
    },
    gridComponent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            role: 'Student',
        };
        this.jumpLinks = {
            'Student': '/customer/main_page/CustomerMain',
            'Truck': '/t',
        };
    }

    selectRole = (e) => {
        this.setState({
            role: e.target.value,
        });
    }

    render() {
        const { classes } = this.props;

        return (
            <Container component='main' maxWidth='sm'>
                <div className={ classes.loginContainer } >
                    <Typography component='h1' variant='h5'>Sign In</Typography>
                    <FormControl className={ classes.loginForm } component='form'>
                        <TextField className={ classes.loginComponent } label='Email Address' type='email' variant='outlined' required fullWidth autoFocus />
                        <TextField className={ classes.loginComponent } label='Password' type='password' variant='outlined' required fullWidth />
                        <Grid className={ classes.loginComponent } container>
                            <Grid className={ classes.gridComponent } item xs={ 3 }>
                                <FormLabel required>Role</FormLabel>
                            </Grid>
                            <Grid item xs>
                                <RadioGroup value={ this.state.role } onChange={ this.selectRole } row>
                                    <FormControlLabel name='loginAsStudent' value='Student' control= { <Radio color='primary' /> } label='Student' />
                                    <FormControlLabel name='loginAsTruck' value='Truck' control= { <Radio color='primary' /> } label='Truck Manager' />
                                </RadioGroup>
                            </Grid>
                        </Grid>
                        <FormControlLabel className={ classes.loginComponent } control={ <Checkbox value='Remember' color='primary' /> } label='Remember me?' />
                        <Button className={ classes.loginComponent } variant='contained' color='primary' href={ this.jumpLinks[this.state.role] } fullWidth>Log me in</Button>
                        <Grid className={ classes.loginComponent } container>
                            <Grid className={ classes.gridComponent } item xs={ 6 }>
                                <Link variant='body2' href='/reset'>Forget Password?</Link>
                            </Grid>
                            <Grid className={ classes.gridComponent } item xs={ 6 }>
                                <Link variant='body2' href='/register'>Register Here!</Link>
                            </Grid>
                        </Grid>
                    </FormControl>
                </div>
            </Container>
        );
    }
}


export default withStyles(styles, {withTheme: true})(Login);