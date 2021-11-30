import React from "react";

// import { makeStyles } from "@material-ui/core/styles";
import { Icon } from "@iconify/react";
import eraserIcon from "@iconify-icons/mdi/eraser";
import {
  MdEdit,
  MdColorLens,
  MdDelete,
} from "react-icons/md";
import UndoIcon from "@material-ui/icons/Undo";
import RedoIcon from "@material-ui/icons/Redo";


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


