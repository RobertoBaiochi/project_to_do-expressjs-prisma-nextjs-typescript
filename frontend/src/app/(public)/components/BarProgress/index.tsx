"use client";

import { ReactNode } from "react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

interface ProvidersProps {
    children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
    return (
        <>
            {children}
            <ProgressBar
                height="2px"
                color="#ffcd04"
                options={{ showSpinner: false }}
                shallowRouting
            />
        </>
    );
};

export default Providers;
