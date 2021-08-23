import { LoadingBox } from "./LoadingBox"
import "./Grid.css"

export function Grid({ children }) {
  return (
    <div className="grid">
      <LoadingBox>{children}</LoadingBox>
    </div>
  );
  }