import { cn } from '@/lib/utils'
import Image from 'next/image';

export const Logo = ({ className, uniColor }: { className?: string; uniColor?: boolean }) => {
    return (
       <Image src={'/magellan-logo.png'} alt='logo' width={134} height={64} loading="eager"/>
    )
}


