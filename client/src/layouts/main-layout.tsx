import { ModeToggle } from '@/components/molecules/toggle-mode';

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className='container mx-auto pt-6 px-8 min-h-screen relative'>
            <ModeToggle className='absolute top-2 right-4' />
            {children}
        </div>
    )
}
