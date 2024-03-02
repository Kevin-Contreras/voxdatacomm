import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Grid from '@mui/material/Grid';
const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 10,
  left: 10,
  whiteSpace: 'nowrap',

  width: 1,
});

// Uso de la función para convertir un archivo seleccionado por el usuario

export default function InputFileUpload({setData}) {
    const fileToBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => {
            resolve(reader.result); // El resultado es el contenido del archivo en base64
          };
      
          reader.onerror = (error) => {
            reject(error);
          };
        });
      };
      
      // Uso de la función para convertir un archivo seleccionado por el usuario
      const handleFileChange = async (event) => {
        const file = event.target.files[0];
        
        try {
          const base64String = await fileToBase64(file);
         let base64StringModificada = base64String.replace("data:text/csv;base64,","");
          const fileDate = await fetch("https://api-voxdatacomm-kevin-contreras.vercel.app/api/upload",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "authorization":localStorage.getItem("token"),
               
            },

            body:JSON.stringify({
                data:base64StringModificada
               
            })
            
        })
        let dataFile = await fileDate.json();
        setData(dataFile)
        } catch (error) {
          console.error('Error al convertir el archivo a base64:', error);
        }

      };
  return (
    <Grid container justifyContent="center" spacing={2}>
    <Grid item xs={12} sm={6} md={4}>
      <Button
        component="label"
        role={undefined}
        variant="contained"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: 'auto',
          marginTop: '50px',
          marginBottom: '50px',
          background:"black",
         
          
          width: '90%',
        }}
        startIcon={<CloudUploadIcon />}
      >
        Upload file
        <VisuallyHiddenInput type="file" onChange={handleFileChange}/>
      </Button>
    </Grid>
  </Grid>
  );
}
