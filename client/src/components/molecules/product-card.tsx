import { Heart, ScanSearch, Star } from 'lucide-react';
import Typography from '../atoms/typography';
import { Separator } from '@radix-ui/react-separator';

interface ProductCardProps {
    id: number;
    name: string;
    description: string;
    price: number;
}

export default function ProductCard({ id, name, description, price }: ProductCardProps) {
    return (
        <div
        >
            <figure
                className='relative mb-2
                '
            >
                <img src="https://via.placeholder.com/200" alt="product" className='w-full
                hover:opacity-80
                ' />

                <div className='flex flex-col gap-2
                absolute bottom-2 right-2 z-10
                
                '>
                    <ScanSearch size={24}
                        className='cursor-pointer
                        '
                    />
                    <Heart size={24}
                        className='cursor-pointer'
                    />
                </div>
            </figure>
            <Typography>
                {name}
            </Typography>

            <Typography >
                {price}
            </Typography>

            <div className="flex items-center gap-2 mt-2">
                {
                    Array.from({ length: 5 }).map((_, index) => (
                        <Star key={index} size={16} />
                    ))
                }
            </div>

            <Separator className="my-4" />
        </div>
    )
}
