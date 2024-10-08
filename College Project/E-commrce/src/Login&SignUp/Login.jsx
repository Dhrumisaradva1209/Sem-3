import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
  const Swal = require('sweetalert2')

  const navigate = useNavigate();
  const apiUrl = "http://localhost:5000/login";

  const [email, setEmail] = useState();
  const [password, setPass] = useState();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => {
                setPass(e.target.value);
              }}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={(e) => {
                fetch(`${apiUrl}/${email}/${password}`)
                  .then(res => res.json())
                  .then((res) => {
                    if (!res.error) {
                      console.log("res : ", res);
                      Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Successfully login",
                        showConfirmButton: false,
                        timer: 1500
                      })
                      localStorage.setItem('auth', true);
                      localStorage.setItem("authID" , res.userID);
                      console.log(res);
                      if(res.admin != null && res.admin){
                        console.log("admin");
                        localStorage.setItem("admin"  , true);
                        navigate('/Profile/admin');
                      }else{
                        console.log("user");
                        localStorage.setItem("admin" , false);
                        navigate('/Profile/user');
                      }
                      // navigate('/Profile/admin');
                    }else{
                      alert("invalid user");
                    }
                  },
                  )
              }}
            >
              Sign In
            </Button>

            {/* <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={(e) => {
                const storedData = localStorage.getItem('userData');
                const loc_data = JSON.parse(storedData);

                const storedEmail = loc_data.email;
                const storedPassword = loc_data.pass;

                console.log(storedEmail, " ", storedPassword);

                if (email == storedEmail && password == storedPassword) {
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Successfully login",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  localStorage.setItem('auth', true);
                  navigate('/Profile/admin');
                } else {
                  Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Login failed",
                    showConfirmButton: false,
                    timer: 1500
                  });
                }
              }}

            // onClick={(e) => {
            //   console.log(email, " ", password);

            //   const storedEmail = localStorage.getItem('userData');
            //   const data = JSON.parse(storedEmail)
            //   // const storedPassword = localStorage.getItem('password');

            //   if (data) {

            //     console.log('Email:', data.email);
            //     // console.log('Password:', storedPassword);
            //   } else {

            //     console.log('Data not found in localStorage');
            //   }

            // }}

            >
              Sign In
            </Button> */}


            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signUp" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}