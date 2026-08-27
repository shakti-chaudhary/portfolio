// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import { DashboardLayout } from './layouts/DashboardLayout';
// import { ProtectedRoute } from './router/ProtectedRoute';
import { Provider, useSelector } from 'react-redux';
import { store, type RootState } from './app/store';
import { applyTheme } from './features/theme';
import { useEffect } from 'react';
import { AppRouter } from './router/AppRouter';


const ThemeSync: React.FC = () => {
  const mode = useSelector((state: RootState) => state.theme.mode)
  useEffect(() => applyTheme(mode), [mode])
  return null
}

/** Fixed colour-mesh backdrop + film grain. Purely decorative. */
const Backdrop: React.FC = () => (
  <div className="mesh-bg" aria-hidden="true">
    <span className="mesh-blob mesh-blob-1" />
    <span className="mesh-blob mesh-blob-2" />
    <span className="mesh-blob mesh-blob-3" />
  </div>
)

function App() {
  return (
    <Provider store={store}>
      <ThemeSync />
      <Backdrop/>
      <AppRouter/>
    </Provider>
  );
}
export default App;

    // <BrowserRouter>
    //   <Routes>
    //     {/* Public Routes */}
    //     <Route path="/login" element={<LoginPage />} />
        
    //     {/* Protected Feature Routes */}
    //     <Route element={<ProtectedRoute roles={['ADMIN']} />}>
    //       <Route element={<DashboardLayout />}>
    //         <Route path="/dashboard" element={<DashboardHome />} />
    //       </Route>
    //     </Route>

    //     <Route path="*" element={<Navigate to="/dashboard" />} />
    //   </Routes>
    // </BrowserRouter>