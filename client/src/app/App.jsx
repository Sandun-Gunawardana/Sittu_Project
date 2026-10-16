import { Route, Routes } from "react-router-dom";
import AppLayout from "./AppLayout.jsx";
import OverviewPage from "../pages/OverviewPage.jsx";
import PlaceholderPage from "../pages/PlaceholderPage.jsx";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<OverviewPage />} />
        <Route path="groups" element={<PlaceholderPage title="My groups" description="Your Seettu groups will be listed here." />} />
        <Route path="contributions" element={<PlaceholderPage title="Contributions" description="Contribution history and status will appear here." />} />
        <Route path="reports" element={<PlaceholderPage title="Reports" description="Group and member summaries will appear here." />} />
        <Route path="*" element={<PlaceholderPage title="Page not found" description="The page you're looking for doesn't exist." />} />
      </Route>
    </Routes>
  );
}

export default App;
