import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NotFound from "./pages/NotFound";
import TasksPage from "@/pages/tasks/TasksPage";

const App = () => (
  <>
    <Toaster />
    <Sonner />

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TasksPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
