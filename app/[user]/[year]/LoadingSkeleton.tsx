'use client'
import { Skeleton } from "@/components/ui/skeleton";


export default function LoadingSkeleton() {
    if (typeof window !== "undefined") {
        const {innerHeight, innerWidth} = window
        
        // 96 size
        const adjustedHeight = innerHeight - (72 + 83)
        
        const widthArray: number[] = []
        const heightArray = []
        for (let i = 96; i < innerWidth; i +=96){
            widthArray.push(i)
        }
        for (let j = 96; j < adjustedHeight; j +=96){
            heightArray.push(j)
        }
        return (
            <div className="my-auto">
        {heightArray.map((item) => (
            <div className="flex mx-auto justify-center"  key={item}>
                {widthArray.map(item => (
                    <Skeleton className="h-20 w-20 m-2"  key={item}/>
                    ))}
          </div>
        ))}
      </div>
    );
}
  }