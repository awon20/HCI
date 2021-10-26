import React from 'react'
import Typography from "@material-ui/core/Typography";

export  function CardTitle() {
  
    return (
      <Typography 
        variant="h5" 
        component="h2" 
        align="center" 
        display="block"
        color="textPrimary"
        gutterBottom
      >
        Neues SketchBoard
      </Typography>
    );
}
