import About from "./footer/About";

export default function Footer() {
    return (
        <footer className="container text-center bg-transparent py-6 ">
        <small className="text-muted-foreground">Peter Kudeláš {new Date().getFullYear()} | </small>
        <About />
        </footer>
    )
}