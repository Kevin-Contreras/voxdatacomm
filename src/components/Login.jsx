import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Outlet, Link,useNavigate } from "react-router-dom";



// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignInSide() {
  const [user,setUser] = React.useState("")
  const [password,setPassword] = React.useState("")
  const [error,setError] = React.useState("")
  const navigateTo = useNavigate();

let handleSubmit = async ()=>{
if(user && password !==""){
  let data = await fetch("http://localhost:3000/api/login",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      user,
      password
    })

  })
  let datas = await data.json();

  if(datas.error) {
    setError(datas.error)
  }else{
    localStorage.setItem("token",datas.token)
    localStorage.setItem("user",datas.user)
    window.location.replace('/home')
  }
}
}


  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5}  component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'black' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Iniciar Sesion
            </Typography>
            <Box    sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                value={user}
                onChange={(event)=> setUser(event.target.value)}
                id="email"
                color=''
                label="usuario"
                name="user"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                value={password}
                onChange={(event)=> setPassword(event.target.value)}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />

<Typography component="h8" sx={{color:"red",display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',}} variant="h10">
              {error}
            </Typography>
              <Button
                type="submit"
                fullWidth
                onClick={handleSubmit}
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Iniciar Sesion
              </Button>
          <Link to={"/register"} >
          <Button
                type="submit"
                fullWidth
                
                variant="contained"
                sx={{
                   mt: 1,
                   mb: 1,
                  backgroundColor:"black", 
                  '&:hover': {
                  backgroundColor: 'black', // Cambia el color de fondo al pasar el ratón sobre el componente
                },}}
              >
                Crear usuario
              </Button>
          </Link>
              
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}