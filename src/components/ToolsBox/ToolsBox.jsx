import React from "react";
import { makeStyles  } from '@material-ui/core';

// import { makeStyles } from "@material-ui/core/styles";
import { Icon } from "@iconify/react";
import eraserIcon from "@iconify-icons/mdi/eraser";
import {
  MdEdit,
  MdCrop,
  MdColorLens,
  MdDelete,
} from "react-icons/md";
import UndoIcon from "@material-ui/icons/Undo";
import RedoIcon from "@material-ui/icons/Redo";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";


const useStyles = makeStyles((theme) => {
  return {
    root: {
      // width: "fit-content",
      height: "fit-content",
      border: `2px solid ${theme.palette.divider}`,
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.secondary,
      "& svg": {
        margin: theme.spacing(1.5),
        height: "50px",
        width: "50px",
        marginRight: "20px",
        marginLeft: "20px",
      },
      "& hr": {
        margin: theme.spacing(0, 0.5),
      },
      active: {
        background: "#f4f4f4",
      },
    },
  };
});


export function UndoButton(props) {
      return <UndoIcon />;
}

export function EditButton(props) {
      return <MdEdit />;
}
export function EraserButton(props) {
      return <Icon icon={eraserIcon}/>;
}

export function ColorsButton(props) {
      return <MdColorLens />;
}

export function DeleteAllButton(props) {
      return <MdDelete />;
}
export function RedoButton(props) {
      return <RedoIcon />;
}


// export function ToolsBox1(props) {
// const classes = useStyles();
//   const [value, setValue] = React.useState(1);


//   return (
//     <BottomNavigation
//       value={value}
//       onChange={(event, value) => {
//         setValue(value);
//       }}
//       className={classes.root}
//     >
//       <BottomNavigationAction label="undo" value="undo" icon={<UndoButton  />} />
//       <BottomNavigationAction label="edit" value="edit" icon={<EditButton />} />
//       <BottomNavigationAction
//         label="eraser"
//         value="eraser"
//         icon={<EraserButton  />}
//       />
//       <BottomNavigationAction label="cut" value="cut" icon={<MdCrop />} />
//       <BottomNavigationAction
//         label="colorPalette"
//         value="colorPalette"
//         icon={<ColorsButton />}
//       />
//       <BottomNavigationAction
//         label="delete"
//         value="delete"
//         icon={<DeleteAllButton />}
//       />
//       <BottomNavigationAction label="redo" value="redo" icon={<RedoButton />} />
//     </BottomNavigation>
//   );
// }


// export function ToolsBox2() {
//   // add hook
//   const classes = useStyles();
//   return (
//     // <Box display="flex" justifyContent="center" pb={10}>
//     <div>
//       {/* <Box display="flex" justifyContent="center"> */}
//       <Box
//         container
//         flexDirection="row"
//         className={classes.root}
//         display="flex"
//         justifyContent="center"
//         alignItems="stretch"
//         padding={1}
//       >
//         <Box>
//           <UndoIcon />
//         </Box>
//         <Divider orientation="vertical" flexItem />

//         <Box>
//           <MdEdit />
//         </Box>

//         <Divider orientation="vertical" flexItem />
//         <Box>
//           <Icon icon={eraserIcon} />
//         </Box>

//         <Divider orientation="vertical" flexItem />
//         <Box>
//           {" "}
//           <MdCrop />
//         </Box>

//         <Divider orientation="vertical" flexItem />
//         <Box>
//           {" "}
//           <MdColorLens />
//         </Box>

//         <Divider orientation="vertical" flexItem />
//         <Box>
//           <MdDelete />
//         </Box>

//         <Divider orientation="vertical" flexItem />
//         <Box>
//           {" "}
//           <RedoIcon />
//         </Box>
//       </Box>
//       {/* </Box> */}
//     </div>
//   );
// }
