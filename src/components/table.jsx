import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableVirtuoso } from 'react-virtuoso';



export default function ReactVirtualizedTable({data}) {
  const [datas,setDatas] =React.useState("")
      function createData(
        ID,
        Latitud,
        Longitud,
        Titulo,
        Anunciante,
        Descripcion,
        Reformado,
        Telefonos,
        Tipo,
        Precio,
        PrecioPorMetro,
        Direccion,
        Provincia,
        Ciudad,
        MetrosCuadrados,
        Habitaciones,
        Banios,
        Parking,
        SegundaMano,
        ArmariosEmpotrados,
        ConstruidoEn,
        Amueblado,
        CalefaccionIndividual,
        CertificacionEnergetica,
        Planta,
        Exterior,
        Interior,
        Ascensor,
        Fecha,
        Calle,
        Barrio,
        Distrito,
        Terraza,
        Trastero,
        CocinaEquipada,
        AireAcondicionado,
        Piscina,
        Jardin,
        MetrosCuadradosUtiles,
        AptoParaPersonasConMovilidadReducida,
        Plantas,
        SeAdmitenMascotas,
        Balcon
      ) {
        return { 
          ID, 
          Latitud, 
          Longitud, 
          Titulo, 
          Anunciante, 
          Descripcion, 
          Reformado, 
          Telefonos, 
          Tipo, 
          Precio, 
          PrecioPorMetro, 
          Direccion, 
          Provincia, 
          Ciudad, 
          MetrosCuadrados, 
          Habitaciones, 
          Banios, 
          Parking, 
          SegundaMano, 
          ArmariosEmpotrados, 
          ConstruidoEn, 
          Amueblado, 
          CalefaccionIndividual, 
          CertificacionEnergetica, 
          Planta, 
          Exterior, 
          Interior, 
          Ascensor, 
          Fecha, 
          Calle, 
          Barrio, 
          Distrito, 
          Terraza, 
          Trastero, 
          CocinaEquipada, 
          AireAcondicionado, 
          Piscina, 
          Jardin, 
          MetrosCuadradosUtiles, 
          AptoParaPersonasConMovilidadReducida, 
          Plantas, 
          SeAdmitenMascotas, 
          Balcon 
        };
      }
      
      const columns = [
        { width: 100, label: 'ID', dataKey: 'id' },
        { width: 100, label: 'Latitud', dataKey: 'latitud' },
        { width: 100, label: 'Longitud', dataKey: 'Longitud' },
        { width: 200, label: 'Título', dataKey: 'Titulo' },
        { width: 200, label: 'Anunciante', dataKey: 'Anunciante' },
        { width: 2000, label: 'Descripción', dataKey: 'Descripcion' },
        { width: 100, label: 'Reformado', dataKey: 'Reformado' },
        { width: 150, label: 'Teléfonos', dataKey: 'Telefonos' },
        { width: 100, label: 'Tipo', dataKey: 'Tipo' },
        { width: 100, label: 'Precio', dataKey: 'Precio' },
        { width: 150, label: 'Precio por Metro', dataKey: 'PrecioPorMetro' },
        { width: 600, label: 'Dirección', dataKey: 'Direccion' },
        { width: 150, label: 'Provincia', dataKey: 'Provincia' },
        { width: 150, label: 'Ciudad', dataKey: 'Ciudad' },
        { width: 150, label: 'Metros Cuadrados', dataKey: 'MetrosCuadrados' },
        { width: 150, label: 'Habitaciones', dataKey: 'Habitaciones' },
        { width: 100, label: 'Baños', dataKey: 'Banios' },
        { width: 100, label: 'Parking', dataKey: 'Parking' },
        { width: 150, label: 'Segunda Mano', dataKey: 'SegundaMano' },
        { width: 200, label: 'Armarios Empotrados', dataKey: 'ArmariosEmpotrados' },
        { width: 200, label: 'Construido En', dataKey: 'ConstruidoEn' },
        { width: 100, label: 'Amueblado', dataKey: 'Amueblado' },
        { width: 200, label: 'Calefacción Individual', dataKey: 'CalefaccionIndividual' },
        { width: 250, label: 'Certificación Energética', dataKey: 'CertificacionEnergetica' },
        { width: 100, label: 'Planta', dataKey: 'Planta' },
        { width: 100, label: 'Exterior', dataKey: 'Exterior' },
        { width: 100, label: 'Interior', dataKey: 'Interior' },
        { width: 100, label: 'Ascensor', dataKey: 'Ascensor' },
        { width: 100, label: 'Fecha', dataKey: 'Fecha' },
        { width: 200, label: 'Calle', dataKey: 'Calle' },
        { width: 200, label: 'Barrio', dataKey: 'Barrio' },
        { width: 200, label: 'Distrito', dataKey: 'Distrito' },
        { width: 100, label: 'Terraza', dataKey: 'Terraza' },
        { width: 100, label: 'Trastero', dataKey: 'Trastero' },
        { width: 200, label: 'Cocina Equipada', dataKey: 'CocinaEquipada' },
        { width: 200, label: 'Aire Acondicionado', dataKey: 'AireAcondicionado' },
        { width: 100, label: 'Piscina', dataKey: 'Piscina' },
        { width: 100, label: 'Jardín', dataKey: 'Jardin' },
        { width: 200, label: 'Metros Cuadrados Útiles', dataKey: 'MetrosCuadradosUtiles' },
        { width: 150, label: 'Apto Para Personas Con Movilidad Reducida', dataKey: 'AptoParaPersonasConMovilidadReducida' },
        { width: 100, label: 'Plantas', dataKey: 'Plantas' },
        { width: 150, label: 'Se Admiten Mascotas', dataKey: 'SeAdmitenMascotas' },
        { width: 100, label: 'Balcón', dataKey: 'Balcon' },
      ];
     
      const VirtuosoTableComponents = {
        Scroller: React.forwardRef((props, ref) => (
          <TableContainer component={Paper} {...props} ref={ref} />
        )),
        Table: (props) => (
          <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />
        ),
        
        TableHead,
        TableRow: ({ item: _item, ...props }) => <TableRow {...props} />,
        TableBody: React.forwardRef((props, ref) => <TableBody {...props} ref={ref} />),
      };
      
      function fixedHeaderContent() {
        return (
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.dataKey}
                variant="head"
                align={column.numeric || false ? 'right' : 'left'}
                style={{ width: column.width }}
                sx={{
                  backgroundColor: 'black',
                  color: 'white',
                }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        );
      }
      
      function rowContent(_index, row) {
        return (
          <React.Fragment>
            {columns.map((column) => (
              <TableCell
                key={column.dataKey}
                align={column.numeric || false ? 'right' : 'left'}
              >
                {row[column.dataKey]}
              </TableCell>
            ))}
          </React.Fragment>
        );
      }
  return (
    <Paper style={{ height: 700, width: '90%',margin:"auto",marginTop:"50px" }}>
      <TableVirtuoso
        data={data}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
    </Paper>
  );
}
