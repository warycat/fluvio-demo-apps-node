import * as React from 'react';
import { withFormik, FormikProps } from 'formik';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import UnLock from '@material-ui/icons/LockOpen';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { FormLayoutFixed } from '../components/FormLayoutFixed';
import { MyTextField } from '../components/MyTextField';
import MyButton from '../components/MyButton';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        icon: {
            width: '140px',
        },
        iconWrapper: {
            textAlign: 'center',
            display: 'block',
            marginTop: theme.spacing(5),
            marginBottom: theme.spacing(5),
        },
        form: {
            width: '100%', // Fix IE 11 issue.
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2),
        },
        title: {
            marginTop: 20,
            minHeight: 50,
        },
        titleFont: {
            fontSize: 30,
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1),
        },
        logo: {
            fontSize: 34,
            verticalAlign: 'middle',
            marginBottom: 5,
            marginRight: 10,
        },
        container: {
            padding: 0,
        },
        button: {
            width: '100%',
            paddingTop: theme.spacing(1),
        },
        footer: {
            textAlign: 'left',
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4),
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(3),
            fontSize: 17,
        },
        leftLink: {
            display: 'inline',
            [theme.breakpoints.down('xs')]: {
                display: 'block',
                float: 'none',
                width: '100%',
                textAlign: 'center',
                paddingTop: theme.spacing(1),
            },
        },
        rightLink: {
            display: 'inline',
            float: 'right',
            [theme.breakpoints.down('xs')]: {
                display: 'block',
                float: 'none',
                width: '100%',
                textAlign: 'center',
                paddingTop: theme.spacing(2),
            },
        },
        links: {
            color: theme.palette.text.secondary,
            textDecoration: 'none',
        },
    }),
);

export interface LoginFields {
    user: string;
}

interface FormProps {
    user?: string;

    onSubmit: (user: LoginFields) => void;
}

const InnerForm = (props: FormProps & FormikProps<LoginFields>) => {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.iconWrapper}>
                <img src="/fav/android-chrome-192x192.png" className={classes.icon}></img>
            </div>
            <FormLayoutFixed>
                <form onSubmit={props.handleSubmit} className={classes.form}>
                    <Box className={classes.title}>
                        <Typography className={classes.titleFont} color='textSecondary'>
                            <UnLock className={classes.logo} />
                        Login
                    </Typography>
                    </Box>
                    <MyTextField
                        id="user"
                        name="Nickname"
                        required
                        hideLabel
                        values={props.values}
                        errors={props.errors}
                        onHandleChange={props.handleChange.bind(this)}
                    />
                    <Container className={classes.container}>
                        <Box className={classes.button} >
                            <MyButton
                                buttonText="Login"
                                variant="contained"
                                type="submit"
                                disabled={props.isSubmitting}
                            />
                        </Box>
                    </Container>
                    <Box className={classes.footer}>
                        <Box component="div" className={classes.leftLink}>
                            <a
                                href="/register"
                                className={classes.links}
                            >
                                Register User
                    </a>
                        </Box>
                    </Box>
                </form>
            </FormLayoutFixed>
        </div>
    );
}

export const LoginForm = withFormik<FormProps, LoginFields>({
    enableReinitialize: true,
    mapPropsToValues: () => ({
        user: '',
    }),
    handleSubmit: (values, { props, setSubmitting }) => {
        props.onSubmit(values);
        setSubmitting(false);
    },
})(InnerForm);
