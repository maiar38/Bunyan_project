import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "../components/Dashboard/Navbar/Navbar";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";
import Footer from "../components/Dashboard/Footer/Footer";

import StatusPage from "./StatusPage";
import Users from "./Users";
import Projects from "./Projects";
import Developer from "./Developer";

import TableDashboard from "../components/ui/TableDashboard/TableDashboard";
import FormDashboard from "../components/ui/FormDashboard/FormDashboard";

function Dashboard() {
  const [draftPage, setDraftPage] = useState("");

  return (
    <>
      <Navbar adminName="Maiar" />

      <div className="d-flex">
        <Sidebar draftPage={draftPage} />

        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<StatusPage />} />

            <Route path="/users" element={<Users />}>
              <Route
                index
                element={<TableDashboard title="Users" btntext="Add New User" />}
              />
              <Route
                path="add"
                element={<FormDashboard setDraftPage={setDraftPage} page="users" />}
              />
            </Route>

            <Route path="/projects" element={<Projects />}>
              <Route
                index
                element={<TableDashboard title="Projects" btntext="Add New Project" />}
              />
              <Route
                path="add"
                element={<FormDashboard setDraftPage={setDraftPage} page="projects" />}
              />
            </Route>

            <Route path="/developer" element={<Developer />}>
              <Route
                index
                element={<TableDashboard title="Developers" btntext="Add New Developer" />}
              />
              <Route
                path="add"
                element={<FormDashboard setDraftPage={setDraftPage} page="developer" />}
              />
            </Route>
          </Routes>
        </main>
      </div>

      <Footer />
    </>
  );
}

export default Dashboard;