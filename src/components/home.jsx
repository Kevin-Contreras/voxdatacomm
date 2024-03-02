import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { Outlet, Link,useNavigate } from "react-router-dom";

import ReactVirtualizedTable from './table.jsx';
import InputFileUpload from './buttonFile.jsx';
import Filtros from './filtros.jsx';


// TODO remove, this demo shouldn't need to reset the theme.


export default function Home() {
    let [data,setData] = React.useState("");
    let [file,setFile]= React.useState("");
    const [Piscina, setPiscina] = React.useState('');
  const [Balcon, setBalcon] = React.useState('');
  const [jardin, setJardin] = React.useState('');
  const [habitaciones, setHabitaciones] = React.useState('');
  const [friendly, setAnimal] = React.useState('');
  const [precioMinimo, setCostoMinimo] = React.useState('');
  const [precioMaximo, setCostoMaximo] = React.useState('');
  const [MetrosCuadrados, setMetraje] = React.useState('');
  const [tipoReporte, setPdf] = React.useState("");
  const [active, setActive] = React.useState(false);

    React.useEffect( () => {
    apiReportes();
    },[active])
    let apiReportes = async () => {
        try {
            const storedItem = localStorage.getItem('token');
            if(storedItem!==null){
                let data =await fetch("https://api-voxdatacomm-kevin-contreras.vercel.app/api/generar-reporte",{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json",
                        "authorization":localStorage.getItem("token"),
                       
                    },
                    body:JSON.stringify({
                        Piscina,
                        Balcon,
                        jardin,
                        habitaciones,
                        friendly,
                        precioMinimo,
                        precioMaximo,
                        MetrosCuadrados,
                        tipoReporte
                       
                    })
                })
                let datas = await data.json();
                setData(datas.data);
            }else{
                window.location.replace("/")
            }
        }catch(err){
            window.location.replace("/")
        }
       
        }
        let apiReportesButton = async () => {
            setActive(true)
            try {
                const storedItem = localStorage.getItem('token');
                if(storedItem!==null){
                    let data =await fetch("https://api-voxdatacomm-kevin-contreras.vercel.app/api/generar-reporte",{
                        method:"POST",
                        headers:{
                            "Content-Type":"application/json",
                            "authorization":localStorage.getItem("token"),
                           
                        },
                        body:JSON.stringify({
                            Piscina,
                            Balcon,
                            jardin,
                            habitaciones,
                            friendly,
                            precioMinimo,
                            precioMaximo,
                            MetrosCuadrados,
                            tipoReporte
                           
                        })
                    })
                    let datas = await data.json();
                    if(tipoReporte!==""){
                        window.open(datas.file.secure_url, '_blank');
                                       }
                     setData(datas.data);
                    
                }
            }catch(err){
                console.log(err)
            }
           
            }
   return(
    <>
    {(localStorage.getItem("token")=="")?window.location.replace("/"):<>< Typography component="h2" sx={{display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',}} variant="h4">
              BIENVENIDO { localStorage.getItem("user").toLocaleUpperCase()}
            </Typography>

            <InputFileUpload setData ={setData}/>
            <div style={{width:"50%",margin:"auto"}}>
            <Filtros
      setPiscina={setPiscina}
      setBalcon={setBalcon}
      setJardin={setJardin}
      setHabitaciones={setHabitaciones}
      setAnimal={setAnimal}
      setCostoMinimo={setCostoMinimo}
      setCostoMaximo={setCostoMaximo}
      setMetraje={setMetraje}
      setPdf={setPdf}
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
                Filtrar
              </Button>
              <div style={{
                marginBottom:"50px"
                }}>
              <ReactVirtualizedTable data={data} />

              </div></>}

    </>
        
      


   )


   
   
}