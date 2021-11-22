import React, { useState } from "react";
import CreateIcon from "@material-ui/icons/Create";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { List, ListItem } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircleOutline";
import BlockIcon from "@material-ui/icons/BlockOutlined";
// import Button from '@material-ui/core/Button';
// import CreateSharpIcon from "@material-ui/icons/CreateSharp";
// import grey from "@material-ui/core/colors/grey";
import IconButton from "@material-ui/core/IconButton";

import { makeStyles } from "@material-ui/core/styles";
import { styles } from "./Themes/Styles";
import {
  // Line,
  // Resize,
  // Triangle,
  // Rectangle,
  // Circle,
  Brush,
  // Pencil,
  // Plus,
  // Minus,
  Eraser,
  Reset,
  // Download,
} from "./Themes/Svg";

import ColoursPicker from "./ColoursPicker";
// import { download } from "./Download";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  pencilButton: {
    marginRight: theme.spacing(2),
  },
  brushButton: {
    marginRight: theme.spacing(2),
  },
  eraserButton: {
    marginRight: theme.spacing(2),
  },
  resetButton: {
    marginRight: theme.spacing(2),
  },
  colorButton: {
    marginRight: theme.spacing(2),
  },
}));

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     "& > *": {
//       margin: theme.spacing(1),
//     },
//   },
//   paper: {
//     display: "flex",
//     border: `1px solid ${theme.palette.divider}`,
//     flexWrap: "wrap",
//     BackgroundColor: grey[300],
//   },
//   divider: {
//     margin: theme.spacing(1, 0.5),
//   },
// }));

// const StyledToggleButtonGroup = withStyles((theme) => ({
//   grouped: {
//     margin: theme.spacing(0.5),
//     border: "none",
//     "&:not(:first-child)": {
//       borderRadius: theme.shape.borderRadius,
//     },
//     "&:first-child": {
//       borderRadius: theme.shape.borderRadius,
//     },
//     display: "block",
//     textAlign: "center",
//   },
// }))(ToggleButtonGroup);
export const IconSwitch = () => {
  const [clicks, setClicks] = useState([]);
  //add the id to the array of clicked items if it doesn't exist but if it does exist remove it. this makes sure that double clicking on an item brings it back to normal
  const handleIconClick = (id) => {
    let result = clicks.includes(id)
      ? clicks.filter((click) => click !== id)
      : [...clicks, id];
    setClicks(result);
    // change <AddCircleIcon /> to <BlockIcon /> at "id"
  };
  return (
    <List component="nav">
      <ListItem>
        <ListItem button onClick={handleIconClick(1)}>
          {clicks.includes(101) ? <BlockIcon /> : <AddCircleIcon />}
        </ListItem>
      </ListItem>
    </List>
  );
};



export const SwitchTools =  ({  
    toolType,
    setToolType,
    width,
    setWidth,
    setElements,
    setColorWidth,
    setPath,
    colorWidth,
    setShapeWidth,
}) => {
  const classes = useStyles();
  const [displayStroke, setDisplayStroke] = useState(false);
  // const [selected, setSelected] = React.useState(false);
  const handleClickStroke = () => {
    setDisplayStroke(!displayStroke);
    setColorWidth(colorWidth);
  };



  // const increaseWidth = () => {
  //   if (toolType === "brush" || toolType === "eraser") {
  //     if (width < 30) setWidth((prev) => prev + 5);
  //   }
  //   if (toolType === "pencil") {
  //     if (width < 15) setWidth((prev) => prev + 3);
  //   }

  // };
  // const decreaseWidth = () => {
  //   if (toolType === "brush" || toolType === "eraser") {
  //     if (width > 1) setWidth((prev) => prev - 5);
  //   }
  //   if (toolType === "pencil") {
  //     if (width > 1) setWidth((prev) => prev - 3);
  //   }
  // };
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: "#fff" }}>
        <Toolbar>
          <IconButton
            id="pencil"
            data-toggle="tooltip"
            data-placement="top"
            title="Pencil"
            style={styles.righticons}
            onClick={() => {
              setToolType("pencil");
              setWidth(1);
              setShapeWidth(1);
            }}
          >
            {/* <Pencil toolType={toolType} colorWidth={colorWidth} /> */}
            <CreateIcon
            // style={{ fontSize: 60 }}
            // toolType={toolType}
            // colorWidth={colorWidth}
            />
          </IconButton>
          <IconButton
            // style={{ fontSize: 10 }}
            aria-label="brush"
            id="brush"
            data-toggle="tooltip"
            data-placement="top"
            title="Brush"
            style={styles.righticons}
            onClick={() => {
              setToolType("brush");
              setWidth(10);
              setShapeWidth(1);
            }}
          >
            <Brush toolType={toolType} colorWidth={colorWidth} />
          </IconButton>

          <IconButton
            value="list"
            aria-label="Eraser"
            id="eraser"
            data-toggle="tooltip"
            data-placement="top"
            title="Eraser"
            style={styles.righticons}
            onClick={() => {
              setToolType("eraser");
              setWidth(10);
              setShapeWidth(1);
            }}
          >
            <Eraser toolType={toolType} colorWidth={colorWidth} />
          </IconButton>
          <IconButton
            style={styles.topicons}
            data-toggle="tooltip"
            data-placement="top"
            title="Clear"
            onClick={() => {
              setElements([]);
              setPath([]);
              return;
            }}
          >
            <Reset />
          </IconButton>
          <IconButton
            style={styles.picker}
            onClick={handleClickStroke}
          ></IconButton>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {displayStroke && (
              <IconButton>
                <ColoursPicker setColorWidth={setColorWidth} />
              </IconButton>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}