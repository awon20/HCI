import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";


const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingBottom: theme.spacing(1),
    cursor: "pointer",
  },
  clickableIcon: {
    color: "#95C6B8",
    "&:hover": {
      color: "#95C6B8",
    },
  },
}));

const StyledButton = styled(Button)`
  &:hover {
    background: none;
  }
`;

export const SubmitButton = ({ onClick }) => {
  return (
    <StyledButton
      variant="raised"
      onClick={onClick}
      style={{ backgroundColor: "transparent" }}
    >
      login
    </StyledButton>
  );
};

export function CreateBoard() {

  const classes = useStyles();

  return (
    <IconButton
      className={classes.addButton}
      tooltip="create a new sketchBoard"
      aria-label="add"
      variant="raised"
      style={{ backgroundColor: "transparent" }}
    >
      <AddCircleOutlineIcon
        className={classes.clickableIcon}
        style={{ fontSize: 150 }}
        onClick={(event) => (window.location.href = "sketchboard-cam-on")}
      />
    </IconButton>
  );
};
