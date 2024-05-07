import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <div>404</div>,
	},
]);

ReactDOM.createRoot(rootElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
