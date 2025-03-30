import { cn } from '@/common/helpers';
import Link from 'next/link'

const LINKS: {name: string; link: string}[] = [
  {
    name: 'Airlines Tabs',
    link: '/airlines-tabs'
  }
]

export default function Page() {
  return (
    <main className="p-20">
      <h1 className="text-white text-6xl mb-10 font-medium">UI Gallery</h1>
      <ul className="text-white flex items-start flex-col gap-y-4">
        {LINKS.map(({name, link}) => (
          <Link
            key={name}
            href={link}
            className={cn(
              'text-4xl relative',
              'after:absolute after:h-1 after:left-0 after:-bottom-2 after:w-0 after:transition-all after:bg-white hover:after:w-full'
            )}
          >
            {name}
          </Link>
        ))}
      </ul>
    </main>
  )
}
