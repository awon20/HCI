import normal from "./Normal";
import dark from "./Dark";

const themes = {
  normal,
  dark,
};

export default function getTheme(theme) {
  return themes[theme];
}
