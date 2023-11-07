import React from "react"
import { PossibleRoutes } from "../../core/routing"
import { Navigate, Route, Routes } from "react-router-dom"
import Sidebar from "./sidebar/Sidebar"
import Home from "./Home"
import Experience from "./Experience"
import Projects from "./Projects"
import ProjectDetail from "./ProjectDetail"



const HomeRouter = () => {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route index path={PossibleRoutes.Home} element={<Home />} />
        <Route path={PossibleRoutes.Experience} element={<Experience/>} />
        <Route path={PossibleRoutes.Projects} element={<Projects/>} />
        <Route path={PossibleRoutes.ProjectDetail} element={<ProjectDetail/>} />
        {/* <Route path={PossibleRoutes.Login} element={<LoginPage setUser={setUser}/>} />
        <Route path={PossibleRoutes.Builder} element={<Builder />} />
        <Route path={PossibleRoutes.Builds} element={<GeneralBuildsOverview />} />
        <Route path={PossibleRoutes.UserBuilds} element={<UserBuildsOverview />} />
        <Route path={PossibleRoutes.BuildDetail} element={<BuildDetail />} /> */}
        <Route path="*" element={<Navigate to={PossibleRoutes.Home} replace />} />
      </Routes>
    </>
  )
}
export default HomeRouter