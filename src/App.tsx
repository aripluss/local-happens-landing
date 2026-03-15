import React, { Suspense, lazy } from "react";

import "@/App.css";
import { Header } from "@/components";
import { Footer } from "@/components";

const Home = lazy(() => import("@/pages/Home"));

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<div className="loader">Loading...</div>}>
          <Home />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default App;
