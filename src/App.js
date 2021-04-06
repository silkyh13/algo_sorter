import "./styles.css";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./theme";
import Home from "./Home";
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Home />
      </div>
    </ThemeProvider>
  );
}
