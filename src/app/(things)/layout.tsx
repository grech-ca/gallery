import { PropsWithChildren } from "react";
import Link from 'next/link'
import { ChevronLeft } from "@/common/icons";

export default function Layout({children}: PropsWithChildren) {
  return (
    <div className="h-dvh flex items-center justify-center relative">
      <Link href="/" className="absolute top-8 left-8 aspect-square rounded-lg hover:bg-white/10 transition-colors">
        <ChevronLeft className="text-white text-5xl" />
      </Link>
      {children}
    </div>
  )
}
