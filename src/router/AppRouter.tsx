import React from "react";
import { Suspense } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Spinner } from "@/components/ui";

const PageLoader: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center">
    <Spinner size="lg" className="text-accent" />
  </div>
)

const HomePage: React.FC = ()=>(<></>)

/** Resets scroll on navigation — in-page anchors keep their own behaviour. */
const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation()
  React.useEffect(() => {
    if (!hash) window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export const AppRouter = ()=>(
    <BrowserRouter>
    <ScrollToTop/>
    {/* <Navbar/> */}
    <Suspense fallback={<PageLoader/>}>
    <Routes>
        <Route path="/" element={<HomePage/>} />
    </Routes>
    </Suspense>
    </BrowserRouter>
)