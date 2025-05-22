
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import RequireAuth from "./components/RequireAuth";
import Layout from "./components/Layout";

// Auth Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

// Protected Pages
import Dashboard from "./pages/Dashboard";
import Patrimonios from "./pages/Patrimonios";
import NovoPatrimonio from "./pages/NovoPatrimonio";
import Chat from "./pages/Chat";
import Investimentos from "./pages/Investimentos";
import NovoInvestimento from "./pages/NovoInvestimento";
import Holdings from "./pages/Holdings";
import NovaHolding from "./pages/NovaHolding";
import Ativos from "./pages/Ativos";
import Perfil from "./pages/Perfil";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            {/* Public routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Register />} />
            
            {/* Protected routes with layout */}
            <Route element={<RequireAuth><Layout /></RequireAuth>}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/patrimonios" element={<Patrimonios />} />
              <Route path="/novo-patrimonio" element={<NovoPatrimonio />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/investimentos" element={<Investimentos />} />
              <Route path="/novo-investimento" element={<NovoInvestimento />} />
              <Route path="/holdings" element={<Holdings />} />
              <Route path="/nova-holding" element={<NovaHolding />} />
              <Route path="/ativos" element={<Ativos />} />
              <Route path="/perfil" element={<Perfil />} />
            </Route>
            
            {/* 404 Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
