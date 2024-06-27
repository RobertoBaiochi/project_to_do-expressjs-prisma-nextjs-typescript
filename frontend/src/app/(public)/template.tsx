import Providers from "./components/BarProgress";

export default function Template({ children }: { children: React.ReactNode }) {
    return <Providers>{children}</Providers>;
}
