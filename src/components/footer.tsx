import { SocialHandles } from "@/components/socialHandles";

export default function Footer() {  
    return (
      <footer className="max-w-[80wv] py-8 z-50 border-t-2">
        <div className="">
          <div className="flex flex-col md:flex-row justify-around items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center gap-2 font-bold text-xl">
                <span className="text-primary">Strayapay</span>
              </div>
            </div>
            <div className="flex items-center justify-center">
            <SocialHandles/>
            </div>
            <div className="text-sm text-muted-foreground">© 2025 Strayapay. All rights reserved.</div>
          </div>
        </div>
      </footer>
    )
  }
  