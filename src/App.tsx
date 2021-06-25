import "./styles.css";
import { useMachine } from "@xstate/react";
import { inspect } from "@xstate/inspect";
import { theMachine } from "./the.machine";

inspect({
  iframe: false
});

export default function App() {
  const [state, send] = useMachine(theMachine, {
    devTools: true
  });

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
