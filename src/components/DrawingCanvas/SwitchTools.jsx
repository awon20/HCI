import React, { useState } from "react";
import clsx from "clsx";
import Paper from "@material-ui/core/Paper";
import ToggleButtonGroup from "@material-ui/core/ButtonGroup";
import ToggleButton from '@material-ui/core/Button';
import CreateSharpIcon from "@material-ui/icons/CreateSharp";
import grey from "@material-ui/core/colors/grey";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import { styles } from "./Themes/Styles";
import {
  // Line,
  // // Resize,
  // Triangle,
  // Rectangle,
  // Circle,
  Brush,
  // Pencil,
  Plus,
  Minus,
  Eraser,
  Reset,
  // Download,
} from "./Themes/Svg";

import ColoursPicker from "./ColoursPicker";
// import { download } from "./Download";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    display: "flex",
    border: `1px solid ${theme.palette.divider}`,
    flexWrap: "wrap",
    BackgroundColor: grey[300],
  },
  divider: {
    margin: theme.spacing(1, 0.5),
  },
}));

const StyledToggleButtonGroup = withStyles((theme) => ({
  grouped: {
    margin: theme.spacing(0.5),
    border: "none",
    "&:not(:first-child)": {
      borderRadius: theme.shape.borderRadius,
    },
    "&:first-child": {
      borderRadius: theme.shape.borderRadius,
    },
    display: "block",
    textAlign: "center",
  },
}))(ToggleButtonGroup);


export default function SwitchTools ({  
    toolType,
    setToolType,
    width,
    setWidth,
    setElements,
    setColorWidth,
    setPath,
    colorWidth,
    setShapeWidth,
}) {
  const classes = useStyles();
  const [displayStroke, setDisplayStroke] = useState(false);
  const [selected, setSelected] = React.useState(false);
  // const [alignment, setAlignment] = React.useState('left');

  const handleClickStroke = () => {
    setDisplayStroke(!displayStroke);
    setColorWidth(colorWidth);
  };

  // const handleAlignment = (event, newAlignment) => {
  //   if (newAlignment !== null) {
  //     setAlignment(newAlignment);
  //   }
  // };

  const increaseWidth = () => {
    if (toolType === "brush" || toolType === "eraser") {
      if (width < 30) setWidth((prev) => prev + 5);
    }
    if (toolType === "pencil") {
      if (width < 15) setWidth((prev) => prev + 3);
    }
    // if (toolType === ("triangle" || "rectangle" || "circle")) {
    //   if (width < 15) setShapeWidth((prev) => prev + 3);
    // }
  };
  const decreaseWidth = () => {
    if (toolType === "brush" || toolType === "eraser") {
      if (width > 1) setWidth((prev) => prev - 5);
    }
    if (toolType === "pencil") {
      if (width > 1) setWidth((prev) => prev - 3);
    }
    // if (toolType === ("triangle" || "rectangle" || "circle")) {
    //   if (width > 1) setShapeWidth((prev) => prev - 3);
    // }
  };
  return (
    // <Grid container spacing={2}>
    //   <Grid item sm={12} md={6}>
    <div>
      <div className={clsx(classes.root)}>
        {/* <ToggleButtonGroup
          orientation="vertical"
          value={alignment}
          exclusive
          onChange={e => { handleAlignment(e)}}
        >  */}
        <Paper elevation={0} className={clsx(classes.paper, classes.greyPaper)}>
          <StyledToggleButtonGroup
            size="large"
            orientation="horizontal"
            // value={alignment}
            // exclusive
            // onChange={e => { handleAlignment(e)}}
            // aria-label="tools alignment"
          >
            <ToggleButton
              style={styles.righticons}
              value="check"
              // aria-label="pencil"
              // id="pencil"
              // data-toggle="tooltip"
              // data-placement="top"
              // title="Pencil"
              selected={selected}
              onChange={() => {
                setSelected(!selected);
              }}
              onClick={() => {
                setToolType("pencil");
                setWidth(1);
                setShapeWidth(1);
              }}
            >
              {/* <Pencil toolType={toolType} colorWidth={colorWidth} /> */}
              <CreateSharpIcon
                fontSize="large"
                toolType={toolType}
                colorWidth={colorWidth}
              />
            </ToggleButton>
            {/* <Divider flexItem orientation="vertical" className={classes.divider} />
          <ToggleButton
            value="check"
            selected={selected}
            onChange={() => {
              setSelected(!selected);
            }}
          >
            <CheckIcon />
          </ToggleButton>
          <Divider flexItem orientation="vertical" className={classes.divider} /> */}
            <ToggleButton
              value="list"
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
            </ToggleButton>

            <ToggleButton
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
            </ToggleButton>
            <ToggleButton
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
            </ToggleButton>
            <ToggleButton
              style={styles.picker}
              onClick={handleClickStroke}
            ></ToggleButton>
            <ToggleButton
              style={styles.topicons}
              onClick={increaseWidth}
              data-toggle="tooltip"
              data-placement="top"
              title="Increase Width"
            >
              <Plus />
            </ToggleButton>
            <ToggleButton
              style={styles.topicons}
              onClick={decreaseWidth}
              data-toggle="tooltip"
              data-placement="top"
              title="Decrease Width"
            >
              <Minus />
            </ToggleButton>
            <div
              className="row"
              style={{ position: "absolute", right: "0px", top: "0px" }}
            >
              {displayStroke && (
                <div className="col-md-3">
                  <ColoursPicker setColorWidth={setColorWidth} />
                </div>
              )}
            </div>
          </StyledToggleButtonGroup>
        </Paper>
        {/* </ToggleButtonGroup> */}
      </div>
    </div>
    // </Grid>
    // </Grid>
  );
}