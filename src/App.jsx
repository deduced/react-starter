import { createRoot } from "react-dom";
import MyComponent from "./MyComponent";

const App = () => {
  return (
    <div>
      <h1>My App</h1>
      <MyComponent name="Luna" animal="Dog" breed="Havanese" />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
