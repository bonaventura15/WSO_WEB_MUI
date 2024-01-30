import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Link, Stack, TextField, Typography } from '@mui/material';
import { useAuth } from 'src/hooks/use-auth';
import { Layout as AuthLayout } from 'src/layouts/auth/layout';
import Checkbox from '@mui/material/Checkbox';
import * as React from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useCallback, useState } from 'react';
import { InputAdornment } from '@mui/material';
import IconButton from '@mui/material/IconButton';

const Page = () => {
    const router = useRouter();
    const auth = useAuth();
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [showPassword, setShowPassword] = useState(false);

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            submit: null
        },
        validationSchema: Yup.object({
            username: Yup
                .string()
                .max(255)
                .required('Name is required'),
            password: Yup
                .string()
                .max(255)
                .required('Password is required'),
        }),
        onSubmit: async (values, helpers) => {
            const { username, password } = values;
            try {
                const res = await auth.smdlogin(username, password);
                if (res != 'err') {
                    router.push(res);
                }
            } catch (err) {
                if (err.message === 'Validation Error') {
                    helpers.setErrors(err.data.detail.map(error => error.msg));
                } else {
                    helpers.setStatus({ success: false });
                    helpers.setErrors({ submit: 'An unexpected error occurred during registration.' });
                }
                helpers.setSubmitting(false);
            }
        }
    });


    return (
        <>
            <Head>
                <title>
                    Register | Devias Kit
                </title>
            </Head>
            <Box
                sx={{
                    display: 'flex',
                }}
            >
                <Box sx={{
                    maxWidth: 950,
                    px: 3,
                    py: '50px',
                    width: '100%'
                }}>
                    <div style={{ width: '650px' }}>
                        <Typography style={{ fontSize: '56px', fontFamily: 'inter', fontWeight: '600' }}>Connect To Sync, Manage, Direct (SMD)</Typography>
                    </div>
                    <div style={{
                        width: '850px',
                        height: '400px',
                        background: 'url("/Backgrounds.png"), lightgray 50% / cover no-repeat',
                        marginTop: '60px'
                    }}></div>
                </Box>
                <Box
                    sx={{
                        maxWidth: 550,
                        px: 3,
                        py: '70px',
                        width: '100%'
                    }}
                >
                    <div>
                        <Stack
                            spacing={1}
                            sx={{ mb: 5 }}
                        >
                            <Typography variant="h2">
                                Sign in
                            </Typography>
                        </Stack>
                        <form
                            noValidate
                            onSubmit={formik.handleSubmit}
                        >
                            <Stack spacing={3}>
                                <TextField
                                    fullWidth
                                    label="username"
                                    name="username"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.username}
                                />
                                <TextField
                                    fullWidth
                                    label="Password"
                                    name="password"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type={showPassword ? 'text' : 'password'}
                                    value={formik.values.password}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    edge="end"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                >
                                                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Stack>
                            <div style={{ display: 'flex', marginTop: '15px' }}>
                                <Checkbox {...label} />
                                <Typography color="text.secondary" style={{ fontSize: '20px', fontFamily: 'inter', fontWeight: '600' }}>
                                    I agree to the
                                    <Link
                                        component={NextLink}
                                        href="/auth/login-smd"
                                        underline="hover"
                                        style={{ fontSize: '20px', fontFamily: 'inter', fontWeight: '600', marginLeft: '5px' }}
                                    >
                                        terms and service
                                    </Link>
                                </Typography>
                            </div>
                            {formik.errors.submit && (
                                <Typography
                                    color="error"
                                    sx={{ mt: 3 }}
                                    variant="body2"
                                >
                                    {formik.errors.submit}
                                </Typography>
                            )}
                            <Button
                                fullWidth
                                size="large"
                                sx={{ mt: 2 }}
                                type="submit"
                                style={{ backgroundColor: 'black', color: '#fff' }}
                            >
                                Continue
                            </Button>
                        </form>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                            <Typography color="text.secondary" style={{ fontSize: '20px', fontFamily: 'inter', fontWeight: '600' }}>
                                Don’t have an account?&nbsp;
                                <Link
                                    component={NextLink}
                                    href="/auth/register-smd"
                                    underline="hover"
                                    style={{ fontSize: '20px', fontFamily: 'inter', fontWeight: '600' }}
                                >
                                    Sign up
                                </Link>
                            </Typography>
                        </div>

                    </div>
                </Box>
            </Box>
        </>
    );
};

export default Page;