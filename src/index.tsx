import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";
import CreateDubPage from "./pages/CreateDubPage";
import TrainPage from "./pages/TrainPage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  // main - 생성한 더빙 목록 조회
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/create",
    element: <CreateDubPage />,
  },
  {
    path: "/train",
    element: <TrainPage />,
  },
]);

root.render(<RouterProvider router={router} />);
