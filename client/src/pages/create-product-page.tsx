import Typography from '@/components/atoms/typography'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";
import MyControlledTextInput from '@/components/atoms/my-controlled-text-input';
import { Button } from '@/components/shadcn/ui/button';
import { useEffect } from 'react';

interface FormState {
    name: string;
    description: string;
    price: number;
}

const schema = z.object({
    name: z.string().min(1),
    description: z.string().min(1),
    price: z.number().positive(),
})

export default function CreateProductPage() {

    const { register, handleSubmit, formState: { errors, dirtyFields } } = useForm<FormState>({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: FormState) => {
        console.log(data)
    }


    return (
        <div
            className=' flex justify-center items-center '
        >
            <form
                className='flex flex-col gap-8 w-1/2'
                onSubmit={handleSubmit(onSubmit)}
            >
                <Typography variant='h1'>Create Product</Typography>
                <MyControlledTextInput type="text" placeholder="Product Name" {...register('name')}
                    error={errors.name}
                />
                <MyControlledTextInput type="text" placeholder="Product Description" {...register('description')}
                    error={errors.description}
                />
                <MyControlledTextInput type="number" placeholder="Product Price" {...register('price')}
                    error={errors.price}
                />
                <Button type="submit">Create Product</Button>
            </form>
        </div>
    )
}
