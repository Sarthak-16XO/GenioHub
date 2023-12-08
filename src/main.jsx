import React from "react";
import ReactDOM from "react-dom/client";
import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import NoMatch from "./components/NoMatch";
import Home from "./pages/Home"
import Code from "./pages/Code";
import Conversation from "./pages/Conversation";
import ImageGenerate from "./pages/ImageGenerate";
import Summarizer from "./pages/Summarzier";
import Dashboard from "./pages/Dashboard";

import "./styles/index.css";

const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={publishableKey}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/code-generation" element={<Code />} />
          <Route path="/image-generation" element={<ImageGenerate />} />
          <Route path="/text-summarizer" element={<Summarizer />} />
          <Route path="/conversation" element={<Conversation />} />
        </Routes>
      </BrowserRouter>
    </ClerkProvider>
  </React.StrictMode>
);
