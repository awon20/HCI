import React from 'react'
import Typography from "@material-ui/core/Typography";

const title = `Neues SketchBoard`;

export  function CardTitle() {
  
    return (
      <Typography component="h5" variant="h5">
        {title}
      </Typography>
    );
}
