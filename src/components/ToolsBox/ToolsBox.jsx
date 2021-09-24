import { Divider, List, makeStyles, Box, ListItem, ListItemIcon, ListItemText  } from '@material-ui/core';
import React from 'react';
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
import { useHistory, useLocation } from 'react-router';


const menuItems = [
  {
    icon: <UndoIcon />,
    path: "/sketchbox-pages",
    text: "Undo"
  },
  {
    icon: <MdEdit />,
    path: "/sketchbox-pages",
    text: "pencil"
  },
];

const useStyles = makeStyles((theme) => {
  return {
    root: {
      width: "fit-content",
      border: `2px solid ${theme.palette.divider}`,
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.secondary,
      "& svg": {
        // margin: theme.spacing(1.5),
        height: "50px",
        width: "50px",
        marginRight: "20px",
        marginLeft: "20px",
      },
      "& hr": {
        // margin: theme.spacing(0, 0.5),
      },
      active: {
        background: "#f4f4f4"
      }
    },
  }
});
export function ToolsBox() {
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();
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

        {/** List ( Links) */}
        <List>
          {menuItems.map((item) => (
            <ListItem 
            button 
            key={item.text} 
            onClick={() => history.push(item.path)}
            className={location.pathname === item.path ? classes.active: null} >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </div>
    );
}