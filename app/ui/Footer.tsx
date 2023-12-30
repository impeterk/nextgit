import About from "./footer/About";

export default function Footer() {
    return (
        <footer className="container text-center bg-transparent py-6 flex items-center justify-center gap-2">
        <p className="text-muted-foreground">Peter Kudeláš {new Date().getFullYear()} |</p>
        <About />
        </footer>
    )
}