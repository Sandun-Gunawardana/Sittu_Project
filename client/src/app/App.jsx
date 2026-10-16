import { Route, Routes } from "react-router-dom";
import AppLayout from "./AppLayout.jsx";
import OverviewPage from "../pages/OverviewPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import RegisterPage from "../pages/RegisterPage.jsx";
import GroupsPage from "../pages/GroupsPage.jsx";
import GroupDetailsPage from "../pages/GroupDetailsPage.jsx";
import PlaceholderPage from "../pages/PlaceholderPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route element={<AppLayout />}>
        <Route index element={<OverviewPage />} />
        <Route path="groups" element={<GroupsPage />} />
        <Route path="groups/:groupId" element={<GroupDetailsPage />} />
        <Route path="contributions" element={<PlaceholderPage title="Contributions" description="Contribution history and status will appear here." />} />
        <Route path="reports" element={<PlaceholderPage title="Reports" description="Group and member summaries will appear here." />} />
        <Route path="*" element={<PlaceholderPage title="Page not found" description="The page you're looking for doesn't exist." />} />
      </Route>
    </Routes>
  );
}

export default App;
