import React from "react";
import { RestartButtom} from "./components/RestartButtom";
import { PlayerInTurn} from "./components/PlayerInTurn";
import { Box } from "@mui/material";
function App() {
  return (
    <div className="App">
       <Box sx={{ position: 'absolute', bottom: "auto", width: "auto" }}>
        <RestartButtom />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <PlayerInTurn />
      </Box>
    </div>
  );
}

export default App;
