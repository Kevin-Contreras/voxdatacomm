import React from 'react';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Filtros = ({setPiscina,setBalcon,setJardin,setHabitaciones,setAnimal,setCostoMinimo,setCostoMaximo,setMetraje,setPdf}) => {
    const handleKeyDown = (event) => {
        // Permitir las teclas de navegación y edición (Flechas, Retroceso, Suprimir, etc.)
        if ([46, 8, 9, 27, 13, 110, 190].includes(event.keyCode)) {
          return;
        }
        // Permitir solo dígitos (0-9)
        if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
          event.preventDefault();
        }
      };
    
      const handleKeyPress = (event) => {
        // Permitir solo dígitos (0-9)
        const pattern = /^[0-9\b]+$/;
        if (!pattern.test(event.key)) {
          event.preventDefault();
        }
      };
    
  return (
    <>
<Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextField
          label="NUMERO DE HABITACIONES (OPCIONAL)"
          type="text"
          onKeyDown={handleKeyDown}
          
          onChange={(event) => setHabitaciones(event.target.value)}
          onKeyPress={handleKeyPress}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="COSTO MINIMO (OPCIONAL)"
          type="text"
          onKeyDown={handleKeyDown}
          onChange={(event) => setCostoMinimo(event.target.value)}

          onKeyPress={handleKeyPress}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="COSTO MAXIMO (OPCIONAL)"
          type="text"
          onChange={(event) => setCostoMaximo(event.target.value)}

          onKeyDown={handleKeyDown}
          onKeyPress={handleKeyPress}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="METRAJE METROS CUADRADOS (OPCIONAL)"
          onChange={(event) => setMetraje(event.target.value)}

          type="text"
          onKeyDown={handleKeyDown}
          onKeyPress={handleKeyPress}
          fullWidth
        />
      </Grid>
    </Grid>
    
    <Grid container spacing={2} mt={2}>
      <Grid item xs={12} sm={6} md={3}>
        <Box sx={{ minWidth: 110 }}>
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              JARDIN
            </InputLabel>
            <NativeSelect
              onChange={(event)=>setJardin(event.target.value)}
              inputProps={{
                name: 'age',
                id: 'uncontrolled-native',
              }}
            >
                                 <option value={""}></option>

               <option value={"TRUE"}>SI</option>
              <option value={"FALSE"}>NO</option>
            </NativeSelect>
          </FormControl>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              PISCINA
            </InputLabel>
            <NativeSelect
              onChange={(event)=>setPiscina(event.target.value)}
              inputProps={{
                name: 'age',
                id: 'uncontrolled-native',
              }}
            >
                                 <option value={""}></option>

         <option value={"TRUE"}>SI</option>
              <option value={"FALSE"}>NO</option>
            </NativeSelect>
          </FormControl>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
            PET FRIENDLY
            </InputLabel>
            <NativeSelect

onChange={(event)=>setAnimal(event.target.value)}
              inputProps={{
                name: 'age',
                id: 'uncontrolled-native',
              }}
            >
                                 <option value={""}></option>

             <option value={"TRUE"}>SI</option>
              <option value={"FALSE"}>NO</option>
            </NativeSelect>
          </FormControl>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
            POSEE BALCON
            </InputLabel>
            <NativeSelect
              onChange={(event)=>setBalcon(event.target.value)}
              inputProps={{
                name: 'age',
                id: 'uncontrolled-native',
              }}
            >
                                 <option value={""}></option>
              <option value={"TRUE"}>SI</option>
              <option value={"FALSE"}>NO</option>
            </NativeSelect>
          </FormControl>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Descargar Archivo (OPCIONAL)
            </InputLabel>
            <NativeSelect
              onChange={(event)=>setPdf(event.target.value)}
              inputProps={{
                name: 'age',
                id: 'uncontrolled-native',
              }}
            >
                 <option value={""}></option>
              <option value={"PDF"}>PDF</option>
              <option value={"CSV"}>CSV</option>
            </NativeSelect>
          </FormControl>
        </Box>
      </Grid>
    </Grid>
    </>
    
    
    
  );
};

export default Filtros;