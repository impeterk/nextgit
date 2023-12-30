import About from "./footer/About";

export default function Footer() {
    return (
        <footer className=" text-center bg-transparent py-6 flex items-center justify-center gap-2 w-full absolute bottom-0 left-0">
        <p className="text-muted-foreground">Peter Kudeláš {new Date().getFullYear()} |</p>
        <About />
        </footer>
    )
}