import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const colors = ["black", "green", "yellow", "blue", "red"];


export function SketchColors() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [selectedColor, setSelectedColor] = React.useState(colors[0]);

  // const handleChange = (event) => {
  //   setSelectedColor(event.target.value);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-color">Color</InputLabel>
        <Select
          labelId="demo-controlled-open-select-color"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={selectedColor}          
          onChange={(e) => setSelectedColor(e.target.value)}
        >
          <MenuItem value="">
            <em>Black</em>
          </MenuItem>
            {colors.map((color) => (
          <MenuItem key={color} value={color} >{color}</MenuItem>
              ))}
        </Select>
      </FormControl>
    </div>
  );
}
