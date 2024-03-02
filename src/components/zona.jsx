import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { Outlet, Link,useNavigate } from "react-router-dom";

import ReactVirtualizedTable from './table.jsx';
import InputFileUpload from './buttonFile.jsx';
import Filtros from './filtrosZona.jsx';


// TODO remove, this demo shouldn't need to reset the theme.


export default function Zona() {
    let [longitud,setLongitud] = React.useState("");
    let [latitud,setLatitud]= React.useState("");
    const [distancia, setDistancia] = React.useState('');
    const [data, setData] = React.useState('');
    const [propiedades,setPropiedades] = React.useState('');




 
        let apiReportesButton = async () => {
            try {
                const storedItem = localStorage.getItem('token');
                var dataGet = {
                    longitud:longitud,
                    latitud:latitud,
                    distancia:distancia
                }
                if(storedItem!==null){
                    const queryString = new URLSearchParams(dataGet).toString();

                    let data =await fetch(`http://localhost:3000/api/precio-promedio?${queryString}`,{
                        method:"GET",
                        headers:{
                            "Content-Type":"application/json",
                            "authorization":localStorage.getItem("token"),
                           
                        },
                     
                    })
                    let propiedades =await fetch(`http://localhost:3000/api/propiedades-en-area?${queryString}`,{
                        method:"GET",
                        headers:{
                            "Content-Type":"application/json",
                            "authorization":localStorage.getItem("token"),
                           
                        },
                     
                    })
                    let datas = await data.json();
                    let dataPropiedades = await propiedades.json();
                    console.log(datas)
                    setPropiedades(dataPropiedades)
                     setData(datas);
                    
                }
            }catch(err){
                console.log(err)
            }
           
            }
   return(
    <>
< Typography component="h2" sx={{display: 'flex',
              flexDirection: 'column',
              marginBottom: '50px',
              alignItems: 'center',}} variant="h5">
                CALCULO PROMEDIO DE PRECIO POR ZONA
            </Typography>

            <div style={{width:"50%",margin:"auto"}}>
            <Filtros
      setLatitud={setLatitud}
      setLongitud={setLongitud}
      setDistancia={setDistancia}
      
    />
            </div>

            <Button
                type="submit"
                fullWidth
               onClick={apiReportesButton}
                variant="contained"
                sx={{
               
                  backgroundColor:"black", 
                  '&:hover': {
                  backgroundColor: 'black',
                
                    
                     // Cambia el color de fondo al pasar el ratón sobre el componente
                },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                margin: 'auto',
                marginTop: '50px',
                marginBottom: '50px',
                width: '50%'
               
            }}
              >
                CALCULAR
              </Button>

              < Typography component="h2" sx={{display: 'flex',
              flexDirection: 'column',
              marginBottom: '50px',
              alignItems: 'center',}} variant="h2">
                PRECIO
            </Typography>
            < Typography component="h2" sx={{display: 'flex',
              flexDirection: 'column',
              marginBottom: '50px',
              alignItems: 'center',}} variant="h2">
                {data.precioPromedio}
            </Typography>
              <div style={{
                marginBottom:"50px"
                }}>
              <ReactVirtualizedTable data={propiedades.propiedades} />

              </div>
    </>
        
      


   )


   
   
}