// import { Divider, List, makeStyles, Box, ListItem, ListItemIcon, ListItemText  } from '@material-ui/core';
// import React from 'react';
// import { Icon } from "@iconify/react";
// import eraserIcon from "@iconify-icons/mdi/eraser";
// import {
//   MdEdit,
//   MdCrop,
//   MdColorLens,
//   MdDelete,
// } from "react-icons/md";
// import UndoIcon from "@material-ui/icons/Undo";
// import RedoIcon from "@material-ui/icons/Redo";
// import { useHistory, useLocation } from 'react-router';


// const menuItems = [
//   {
//     icon: <UndoIcon />,
//     path: "/sketchbox-pages",
//     text: "Undo"
//   },
//   {
//     icon: <MdEdit />,
//     path: "/sketchbox-pages",
//     text: "pencil"
//   },
// ];

// const useStyles = makeStyles((theme) => {
//   return {
//     root: {
//       width: "fit-content",
//       border: `2px solid ${theme.palette.divider}`,
//       borderRadius: theme.shape.borderRadius,
//       backgroundColor: theme.palette.background.paper,
//       color: theme.palette.text.secondary,
//       "& svg": {
        // margin: theme.spacing(1.5),
//         height: "50px",
//         width: "50px",
//         marginRight: "20px",
//         marginLeft: "20px",
//       },
//       "& hr": {
        // margin: theme.spacing(0, 0.5),
//       },
//       active: {
//         background: "#f4f4f4"
//       }
//     },
//   }
// });
// export function ToolsBox() {
//     const classes = useStyles();
//     const history = useHistory();
//     const location = useLocation();
//     return (
//       // <Box display="flex" justifyContent="center" pb={10}>
//       <div>
//         {/* <Box display="flex" justifyContent="center"> */}
//         <Box
//           container
//           flexDirection="row"
//           className={classes.root}
//           display="flex"
//           justifyContent="center"
//           alignItems="stretch"
//           padding={1}
//         >
//           <Box>
//             <UndoIcon />
//           </Box>
//           <Divider orientation="vertical" flexItem />

//           <Box>
//             <MdEdit />
//           </Box>

//           <Divider orientation="vertical" flexItem />
//           <Box>
//             <Icon icon={eraserIcon} />
//           </Box>

//           <Divider orientation="vertical" flexItem />
//           <Box>
//             {" "}
//             <MdCrop />
//           </Box>

//           <Divider orientation="vertical" flexItem />
//           <Box>
//             {" "}
//             <MdColorLens />
//           </Box>

//           <Divider orientation="vertical" flexItem />
//           <Box>
//             <MdDelete />
//           </Box>

//           <Divider orientation="vertical" flexItem />
//           <Box>
//             {" "}
//             <RedoIcon />
//           </Box>
//         </Box>
//         {/* </Box> */}

//         {/** List ( Links) */}
//         <List>
//           {menuItems.map((item) => (
//             <ListItem 
//             button 
//             key={item.text} 
//             onClick={() => history.push(item.path)}
//             className={location.pathname === item.path ? classes.active: null} >
//               <ListItemIcon>{item.icon}</ListItemIcon>
//               <ListItemText primary={item.text} />
//             </ListItem>
//           ))}
//         </List>
//       </div>
//     );
// }

import React from "react";
import { Divider, makeStyles, Box  } from '@material-ui/core';

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



// const useStyles = makeStyles({
//   root: {
//     width: 500,
//   },
// });
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

export function ToolsBox1() {
const classes = useStyles();
  const [value, setValue] = React.useState(1);


  return (
    <BottomNavigation
      value={value}
      onChange={(event, value) => {
        setValue(value);
      }}
      className={classes.root}
    >
      <BottomNavigationAction label="undo" value="undo" icon={<UndoIcon />} />
      <BottomNavigationAction label="edit" value="edit" icon={<MdEdit />} />
      <BottomNavigationAction
        label="eraser"
        value="eraser"
        icon={<Icon icon={eraserIcon} />}
      />
      <BottomNavigationAction label="cut" value="cut" icon={<MdCrop />} />
      <BottomNavigationAction
        label="colorPalette"
        value="colorPalette"
        icon={<MdColorLens />}
      />
      <BottomNavigationAction
        label="delete"
        value="delete"
        icon={<MdDelete />}
      />
      <BottomNavigationAction label="redo" value="redo" icon={<RedoIcon />} />
    </BottomNavigation>
  );
}


export function ToolsBox2() {
  // add hook
  const classes = useStyles();
  return (
    // <Box display="flex" justifyContent="center" pb={10}>
    <div>
      {/* <Box display="flex" justifyContent="center"> */}
      <Box
        container
        flexDirection="row"
        className={classes.root}
        display="flex"
        justifyContent="center"
        alignItems="stretch"
        padding={1}
      >
        <Box>
          <UndoIcon />
        </Box>
        <Divider orientation="vertical" flexItem />

        <Box>
          <MdEdit />
        </Box>

        <Divider orientation="vertical" flexItem />
        <Box>
          <Icon icon={eraserIcon} />
        </Box>

        <Divider orientation="vertical" flexItem />
        <Box>
          {" "}
          <MdCrop />
        </Box>

        <Divider orientation="vertical" flexItem />
        <Box>
          {" "}
          <MdColorLens />
        </Box>

        <Divider orientation="vertical" flexItem />
        <Box>
          <MdDelete />
        </Box>

        <Divider orientation="vertical" flexItem />
        <Box>
          {" "}
          <RedoIcon />
        </Box>
      </Box>
      {/* </Box> */}
    </div>
  );
}
