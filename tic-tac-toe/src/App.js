import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ClearIcon from '@mui/icons-material/Clear';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

const cellStyle = {
  height:{xs:'100px', md:'160px'},
  width:{xs:'100px', md:'160px'},
  bgcolor:'white',
  margin:'5px'
}
const rowStyle = {
  display:'flex',
}
const gridContainer = {
  margin:'auto',
  alignContent:'center',
  backgroundColor:'gray',
  width:{xs:'330px', md:'510px'},
  borderRadius:'10px'
}

function App() {
  const [matrix, setMatrix] = useState([0,0,0,0,0,0,0,0,0]);
  const [player, setPlayer] = useState(1);
  const [winner, setWinner] = useState(0);
  const [colors, setColors] = useState(['lightgray', 'white'])
  
  useEffect(() => {
    var ganador = 0;
    //>>>>>>>>>>>>>>>>>>>>>>Horizontales<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    if((matrix[0]!==0)&&(matrix[0]===matrix[1])&&(matrix[1]===matrix[2])){
      ganador = matrix[2];
    }
    if((matrix[5]!==0)&&(matrix[3]===matrix[4])&&(matrix[4]===matrix[5])){
      ganador = matrix[5];
    }
    if((matrix[8]!==0)&&(matrix[6]===matrix[7])&&(matrix[7]===matrix[8])){
      ganador = matrix[8];
    }
    //>>>>>>>>>>>>>>>>>>>>>>Verticales<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    if((matrix[0]===matrix[3])&&(matrix[3]===matrix[6])&&(matrix[6]!==0)){
      ganador = matrix[6];
    }
    if((matrix[1]===matrix[4])&&(matrix[4]===matrix[7])&&(matrix[7]!==0)){
      ganador = matrix[7];
    }
    if((matrix[2]===matrix[5])&&(matrix[5]===matrix[8])&&(matrix[8]!==0)){
      ganador = matrix[8];
    }
    //>>>>>>>>>>>>>>>>>>>>>>Diagonales<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    if((matrix[0]===matrix[4])&&(matrix[4]===matrix[8])&&(matrix[8]!==0)){
      ganador = matrix[8];
    }
    if((matrix[2]===matrix[4])&&(matrix[4]===matrix[6])&&(matrix[6]!==0)){
      ganador = matrix[6];
    }
    if(ganador !== 0){
      setWinner(ganador);
      var i = 1;
      const newColors = [...colors];
      while (i  <= 2) {
        if(i===winner){
          newColors[i-1] = '#00FF00';
        }
        else{
          newColors[i-1] = '#FF3333';
        }
        i = i + 1;
      }
      setColors(newColors);
      //alert("El ganador es el jugador "+ganador);
    }
    
  }, [matrix, winner, colors]);

  const nextPlayer = () =>{
    if(player === 1){
      setPlayer(2);
      setColors(['white', 'lightgray']);
    }
    else{
      setPlayer(1);
      setColors(['lightgray', 'white']);
    }
  }

  const handleChange = (indice) =>{
    if(matrix[indice] === 0 && winner === 0){
      const newList = [...matrix];
      newList[indice] = player;
      setMatrix(newList);
      nextPlayer();
    }   
  }

  const getSymbol = (number) => {
    if (number === 0)
      return <></>
    if (number === 1)
      return <ClearIcon style={{fontSize: '130px', color:'black'}}/>
    if (number === 2)
      return <CircleOutlinedIcon style={{fontSize: '110px', color:'blue'}}/>
  }

  const restartGame = () => {
    setMatrix([0,0,0,0,0,0,0,0,0]);
    setPlayer(1);
    setWinner(0);
    setColors(['lightgray', 'white'])
  }

  return (
    <Box bgcolor={'lightskyblue'} py={'20px'}>
      <Box display={'flex'} mb={'20px'} mx={'auto'} alignContent={'center'} justifyContent={'center'} >
        <Box width={'160px'}  bgcolor={colors[0]} alignContent={'center'} mr={'10px'} textAlign={'center'} borderRadius={'20px'}>
          {winner === 1?(
            <Typography fontSize={'20px'}><b>¡GANADOR!</b></Typography>
          ):(<Typography>&nbsp; </Typography>)}
          <Box height={'150px'}><ClearIcon style={{fontSize:"170px", color:'black'}}/></Box>
          <Typography fontSize={'20px'}><b>Jugador 1</b></Typography>
        </Box>
        <Box width={'160px'}  bgcolor={colors[1]} alignContent={'center'} ml={'10px'} textAlign={'center'} borderRadius={'20px'}>
          {winner === 2?(
            <Typography fontSize={'20px'}><b>¡GANADOR!</b></Typography>
          ):(<Typography> &nbsp; </Typography>)}
          <Box height={'150px'}><CircleOutlinedIcon style={{fontSize:"150px", color:'blue'}}/></Box>
          <Typography fontSize={'20px'}><b>Jugador 2</b></Typography>
        </Box>
      </Box>
      <Box sx={gridContainer}>
        <Box sx={rowStyle}>
          <Button sx={{...cellStyle}} onClick={() => handleChange(0)}>{getSymbol(matrix[0])}</Button> 
          <Button sx={{...cellStyle}} onClick={() => handleChange(1)}>{getSymbol(matrix[1])}</Button> 
          <Button sx={{...cellStyle}} onClick={() => handleChange(2)}>{getSymbol(matrix[2])}</Button>
        </Box> 
        <Box sx={rowStyle}>
          <Button sx={{...cellStyle}} onClick={() => handleChange(3)}>{getSymbol(matrix[3])}</Button> 
          <Button sx={{...cellStyle}} onClick={() => handleChange(4)}>{getSymbol(matrix[4])}</Button> 
          <Button sx={{...cellStyle}} onClick={() => handleChange(5)}>{getSymbol(matrix[5])}</Button>
        </Box> 
        <Box sx={rowStyle}>
          <Button sx={{...cellStyle}} onClick={() => handleChange(6)}>{getSymbol(matrix[6])}</Button> 
          <Button sx={{...cellStyle}} onClick={() => handleChange(7)}>{getSymbol(matrix[7])}</Button> 
          <Button sx={{...cellStyle}} onClick={() => handleChange(8)}>{getSymbol(matrix[8])}</Button>
        </Box> 
      </Box>
      <Box textAlign={'center'} mt={'30px'}>
        <Button onClick={() => restartGame()} variant="contained" startIcon={<RestartAltIcon/>} sx={{fontSize:'20px'}}>Restart</Button>
      </Box>
    </Box>
  );
}

export default App;
