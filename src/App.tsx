import React, { Suspense, lazy } from "react";

import "@/App.css";
import { Header } from "@/components";
import { Footer } from "@/components";
import { Loader } from "@/components/ui/Loader/Loader";

const Home = lazy(() => import("@/pages/Home"));

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Home />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default App;
