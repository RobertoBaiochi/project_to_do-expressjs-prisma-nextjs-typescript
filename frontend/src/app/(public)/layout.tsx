import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Bee Done - Organize-se",
    description: "Generated by create next app",
};

export default function ContaLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}