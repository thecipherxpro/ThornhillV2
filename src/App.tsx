import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";


function App() {
  return (
    <BrowserRouter basename={__BASE_PATH__}>
      <div className="min-h-screen overflow-x-hidden">
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
