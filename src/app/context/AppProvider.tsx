"use client";

import { CookiesProvider } from "next-client-cookies/server";
import { PropsWithChildren } from "react";


export function AppProvider({ children } : PropsWithChildren) {
    return (
        <CookiesProvider>
            {children}
        </CookiesProvider>
    )
}