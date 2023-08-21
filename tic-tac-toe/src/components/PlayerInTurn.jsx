import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import ClearIcon from '@mui/icons-material/Clear';
export const PlayerInTurn = () => {
    return (
        //display="flex" alignItems="center" justifyContent="center" height={200}
        <Box sx={{bgcolor: '#A9A9A9', height: 150, width: 250, display: 'flex',
        alignItems: 'center', justifyContent: 'center',
        }}>
        {/* Rectagulo jugador 1 */}
        <Box
            display="flex"
            justifyContent="center"
            alignItems={false ? "flex-start" : "flex-end"}
            width={100}
            height={120}
            bgcolor="#B3B3B3"
            style={{borderRadius: '27px'} }
            marginRight={2}
            
        >
            Jugador 1
        </Box>

        {/* Linea divisora de jugadores*/}
        <Divider
        orientation="vertical"
        sx={{
          width: 3, // ancho de la línea
          height: 120, // altura de la línea
          backgroundColor: 'gray', 
          marginX: 0,
          marginY: 0, 

        }}
      />

        {/* Rectángulo jugador 2*/}
        <Box
            display="flex"
            //flexDirection="column"
            justifyContent="center"
            alignItems={false ? "flex-start" : "flex-end" } // Si es true, alineación arriba, si es false, abajo
            width={100}
            height={120}
            bgcolor="#D9D9D9"
            style={{borderRadius: '27px'}}
            marginLeft={2}
            

        > 
            <ClearIcon fontSize="100px"/>
            Jugador 2
            
        </Box>
    </Box>
    );
};

