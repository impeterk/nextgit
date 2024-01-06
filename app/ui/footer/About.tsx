import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function About() {
  return (
    <Drawer>
      <DrawerTrigger>About</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="w-full max-w-md mx-auto space-y-12">
          <div className="space-y-2">
            <DrawerTitle>About </DrawerTitle>
            <DrawerDescription>
              You can see your your contributions to GitHub in 3D. This was
              heavily influenced and inspired by
              <a
                href="https://joyofcode.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 text-accent-foreground mx-1"
              >
                Joy of Code
              </a>
              videos about theirs implementation of Github Skyline. However I
              have decided to create this in
              <a
                href="https://nextjs.org"
                className="underline text-accent-foreground underline-offset-4 mx-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Next.js
              </a>
              as my first project with this framework.
            </DrawerDescription>
          </div>
          <div className="space-y-2">
            <DrawerTitle>Created with</DrawerTitle>
            <DrawerDescription>
              <div className="flex text-lg gap-4 items-end ">
                <a
                  className="underline text-accent-foreground underline-offset-4 hover:scale-110"
                  href="https://nextjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                  src="/next.svg"
                  height={22}
                  width={65}
                  alt='next logo'
                  className="invert self-end border-b border-black pb-1.5"
                  />

                </a>
                <a
                  className="underline text-accent-foreground underline-offset-4 hover:scale-110"
                  href="https://threejs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Three js
                </a>
                <a
                  className="underline text-accent-foreground underline-offset-4 hover:scale-110"
                  href="https://docs.pmnd.rs/react-three-fiber/getting-started/introduction"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  React Three Fiber
                </a>
                <a
                  className="underline text-accent-foreground underline-offset-4 hover:scale-110"
                  href="https://ui.shadcn.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  shadcn/ui
                </a>
              </div>
            </DrawerDescription>
          </div>
          <div className="space-y-2">
            <DrawerTitle>Api</DrawerTitle>
            <DrawerDescription className="space-y-2">
              <p>You can also use API endpoint to fetch json data.</p>
              <p>
                <code className="bg-muted-foreground font-mono px-2 py-1 text-muted rounded">
                  /api/gh?user=[user]&year=[year]
                </code>
              </p>
              <p>Response</p>
              <div className="w-full bg-muted-foreground font-mono px-2 py-1 text-muted rounded my-1">
                <p>
                  <code>
                    {`{totalContributions: number,`}
                    <br />
                    {`
        contributions: ({
            count: number;
            day: string;
            month: string;
            year: string;
            level: number;
        } | null)[][]})}`}
                  </code>
                </p>
              </div>
            </DrawerDescription>
          </div>
          <div>
            <hr />
            <DrawerTitle className="mt-2">Contact</DrawerTitle>
            <DrawerDescription className="text-accent-foreground">
              <div className="flex justify-center gap-8 items-center">
                <p>
                  <a
                    href="https://www.peterkudelas.eu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg underline underline-offset-2"
                  >
                    peterkudelas.eu
                  </a>
                </p>
                <p>
                  <a
                    href="https://github.com/impeterk/nextgit"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                      />
                    </svg>
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.linkedin.com/in/impeterk/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                      />
                    </svg>
                  </a>
                </p>
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
  );
}
