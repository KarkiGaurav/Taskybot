import { Button } from "@/components/ui/button"
import { Link, Medal } from "lucide-react"
// how to import google fonts 
import { Poppins } from "next/font/google";

// how to import custom font 
import localFont from "next/font/local";
import { cn } from "@/lib/utils";

// how to import custom font 
const headingFont = localFont({
    src: "../../public/fonts/font.woff2"
});

// google fonts 
const textFont = Poppins({
    subsets: ["latin"],
    weight: [
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700",
        "800",
        "900",
    ]
})

const MarketingPage = () => {
  return (
    <div className="w-full h-[70vh]">
       <div className="flex justify-center place-items-center items-center gap-2 font-bold capitalize text-2xl">
        <h1 className={cn("text-purple-700 text-center", headingFont.className)}> This is the marketing page </h1>
          <Medal className="font-bold"/> 
         
       </div>
       <div className="px-20 flex flex-col justify-center items-center w-full">
         
         <p className={cn("text-zinc-700 text-center", textFont.className)}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea iusto in suscipit repellat quia ratione, magni necessitatibus ab rerum commodi? Odit repudiandae modi exercitationem hic excepturi repellat similique ea placeat, facere magni fugit tempora voluptates numquam debitis blanditiis natus minima cumque voluptate commodi tenetur possimus consequuntur corporis perferendis recusandae. Ad.</p>  

         <Button className="mt-6" size="lg" asChild>
        <Link href="/sign-up">
          Get Taskybot for free
        </Link>
      </Button>
        </div>
       
    </div>
  )
}

export default MarketingPage
