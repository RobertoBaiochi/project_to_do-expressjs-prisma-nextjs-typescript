import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Plataforma para gerenciamento de atividade",
};

export default function ContaLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
