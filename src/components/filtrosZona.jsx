import React from 'react';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Filtros = ({setDistancia,setLongitud,setLatitud}) => {
    const handleKeyDown = (event) => {
        // Permitir las teclas de navegación y edición (Flechas, Retroceso, Suprimir, etc.)
       if ([46, 8, 9, 27, 13, 110, 190].includes(event.keyCode)) {
    return;
  }
  // Permitir solo dígitos (0-9), el signo negativo (-) y el punto (.) como máximo una vez
  const isValidKey = (
    (event.keyCode >= 48 && event.keyCode <= 57) || // Teclas de números (0-9)
    (event.keyCode >= 96 && event.keyCode <= 105) || // Teclas numéricas del teclado numérico (0-9)
    event.keyCode === 189 || // Tecla de guion (-) para el signo negativo
    event.keyCode === 190 || // Tecla de punto (.) para el decimal
    event.ctrlKey === true || // Permitir combinaciones de teclas con Ctrl (copiar, pegar, etc.)
    event.keyCode === 86 // Permitir la tecla V para pegar
  );
  if (!isValidKey) {
    event.preventDefault();
  }
      };
      const handleKeyPress2 = (event) => {
        // Permitir solo dígitos (0-9)
        const pattern = /^-?\d+(\.\d+)?$/;
        if (!pattern.test(event.key)) {
          event.preventDefault();
        }
      };
      const handleKeyPress = (event) => {
        // Solo permitir un signo negativo al principio y un punto máximo una vez
        const pattern = /^-?\d*\.?\d*$/;
        const currentValue = event.target.value;
        const key = event.key;
        const cursorPosition = event.target.selectionStart;
        const updatedValue = currentValue.slice(0, cursorPosition) + key + currentValue.slice(cursorPosition);
        if (!pattern.test(updatedValue)) {
          event.preventDefault();
        }
      };
      
  return (
    <>
<Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextField
          label="LATITUD"
          type="text"
          onKeyDown={handleKeyDown}
          
          onChange={(event) => setLatitud(event.target.value)}
          onKeyPress={handleKeyPress}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="LONGITUD"
          type="text"
          onKeyDown={handleKeyDown}
          onChange={(event) => setLongitud(event.target.value)}

          onKeyPress={handleKeyPress}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="DISTANCIA EN (KM)"
          type="text"
          onChange={(event) => setDistancia(event.target.value)}

          onKeyDown={handleKeyDown}
          onKeyPress={handleKeyPress2}
          fullWidth
        />
      </Grid>
   
    </Grid>
    
   
    </>
    
    
    
  );
};

export default Filtros;