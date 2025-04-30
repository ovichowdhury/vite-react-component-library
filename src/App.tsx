import { Button, Label, sum } from "../";
import "./App.css";

function App() {
  console.log(sum(1, 200));
  return (
    <>
      <div>
        <Label>This is Label</Label>
        <Button> Hello </Button>
      </div>
    </>
  );
}

export default App;
