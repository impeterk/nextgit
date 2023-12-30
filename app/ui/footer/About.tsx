import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
  import { Button } from "@/components/ui/button"  

export default function About() {
    return (
        <Drawer>
  <DrawerTrigger>About</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader className="w-full max-w-md mx-auto space-y-12">
        <div className="space-y-2">
      <DrawerTitle>About </DrawerTitle>
      <DrawerDescription>You can see your your contributions to GitHub in 3D. This was heavily influenced and inspired by <a href="http://joyofcode.xyz" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 text-accent-foreground">Joy of Code</a> videos about theirs implementation of Github Skyline. However I have decided to create this in <a href="http://nextjs.org" className="underline text-accent-foreground underline-offset-4 " target="_blank" rel="noopener noreferrer">Next.js</a></DrawerDescription>
      </div>
      <div className="space-y-2">
      <DrawerTitle>Created with</DrawerTitle>
      <DrawerDescription><div className="flex text-lg gap-4">
        <a className="underline text-accent-foreground underline-offset-4 "  href="http://nextjs.org" target="_blank" rel="noopener noreferrer">Next js</a>
        <a className="underline text-accent-foreground underline-offset-4 "  href="http://threejs.org" target="_blank" rel="noopener noreferrer">Three Js</a>
        <a className="underline text-accent-foreground underline-offset-4 "  href="http://https://docs.pmnd.rs/react-three-fiber/getting-started/introduction" target="_blank" rel="noopener noreferrer">React Three Fiber</a>
        <a className="underline text-accent-foreground underline-offset-4 "  href="https://ui.shadcn.com/" target="_blank" rel="noopener noreferrer">Shad CN</a>
        </div>
        </DrawerDescription>
        </div>
        <div className="space-y-2">
      <DrawerTitle>Api</DrawerTitle>
      <DrawerDescription className="space-y-2" >
        <p>You can also use API endpoint to fetch json data.</p>
        <p><code className="bg-muted-foreground font-mono px-2 py-1 text-muted rounded">/api/gh?user=[user]&year=[year]</code></p>
        <p>Response</p>
        <div className="w-full bg-muted-foreground font-mono px-2 py-1 text-muted rounded my-1">
        <p><code>{`{totalContributions: number,`}<br/>
        {`
        contributions: ({
            count: number;
            day: string;
            month: string;
            year: string;
            level: number;
        } | null)[][]})}`}</code></p>
</div>
        </DrawerDescription>
        </div>
    </DrawerHeader>
    <DrawerFooter>
      <DrawerClose>
        <Button variant="outline">Close</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>
    )
}