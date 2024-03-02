import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Outlet, Link,useNavigate } from "react-router-dom";


// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Register() {
    const [user,setUser] = React.useState("")
    const [password,setPassword] = React.useState("")
    const [error,setError] = React.useState("")
    const navigateTo = useNavigate();

  let handleSubmit = async ()=>{

  if(user && password !==""){
    let data = await fetch("http://localhost:3000/api/register",{
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
   if(datas.validate!==true){
    navigateTo('/')
}
   setError(datas.error)
   console.log(datas);
  }
  }
  
  
  return (
    <>
    <Outlet/>
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
          <Avatar sx={{ m: 1, bgcolor: 'black' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Crear usuario
          </Typography>
          <Box  noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              value={user}
              onChange={(event)=> setUser(event.target.value)}
              label="Usuario"
              name="user"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              value={password}
            onChange={(event)=> setPassword(event.target.value)}
              type="password"
              id="password"
              autoComplete="current-password"
            />
           < Typography component="h8" sx={{color:"red",display: 'flex',
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
                Crear Usuario
              </Button>
           
           <Link to={"/"} >

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
                Regresar
              </Button>
          </Link>
           
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </>
   
  );
}