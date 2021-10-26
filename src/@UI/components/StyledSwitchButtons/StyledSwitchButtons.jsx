import { withStyles } from "@material-ui/core/styles";
import { Switch } from "@material-ui/core";
// import { useIosSwitchStyles } from "@mui-treasury/styles/switch/ios";

export const StyledSwitchButton = withStyles((theme) => ({
  root: {
    width: 48,
    height: 24,
    padding: 0,
    display: "flex",
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    "&$checked": {
      transform: "translateX(24px)",
      color: theme.palette.common.white,
      "& + $track": {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 20,
    height: 20,
    boxShadow: "none",
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 25 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))(Switch);


// export const IosSwitchStyle = () => {
//   const [toggled, setToggled] = React.useState(false);
//   const iosStyles = useIosSwitchStyles();
//   return (
//     <div>
//       <Switch
//         classes={iosStyles}
//         checked={toggled}
//         onChange={(e) => setToggled(e.target.checked)}
//       />
//       <Switch
//         classes={iosStyles}
//         checked={!toggled}
//         onChange={(e) => setToggled(!e.target.checked)}
//       />
//     </div>
//   );
// };
