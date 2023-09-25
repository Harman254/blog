"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryclient = new QueryClient();

type ProvidersProps = {
  children: React.ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
  return (
    <QueryClientProvider client={queryclient}>{children}</QueryClientProvider>
  );
};

export default Providers;
