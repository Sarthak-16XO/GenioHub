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

import { PostHogProvider} from 'posthog-js/react'

import posthog from 'posthog-js'

posthog.init('phc_vI2lg8MZVtJBUez7Ga5eb05ymGp6XhYvbiH5h9ZXj1k', { api_host: 'https://us.posthog.com' })
const options = {
  api_host: import.meta.env.REACT_APP_PUBLIC_POSTHOG_HOST,
}
const posthogApiKey = import.meta.env.VITE_PUBLIC_POSTHOG_KEY;

import "./styles/index.css";

const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={publishableKey}>
    <PostHogProvider 
      apiKey={posthogApiKey}
      options={options}
    >

    </PostHogProvider>
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
