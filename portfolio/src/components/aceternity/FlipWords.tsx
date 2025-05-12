import { FlipWords } from './ui/FlipWords'
import { cn } from "../../utils/cn";

export function FlipWordsDemo() {
  return (
    <span
      className="inline-block"
      style={{ height: "1.0em", overflow: "hidden" }}
    >
      <FlipWords words={["Web", "Mobile", "UI"]} />
    </span>
  );
}
export function FlipWordsConstruction() {
  return (
    <span
      className="inline-block"
      style={{ height: "1.2em", overflow: "hidden" }}
    >
      <FlipWords words={["construction", "development"]} />
    </span>
  );
}