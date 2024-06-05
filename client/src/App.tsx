import { Heart, ShoppingCart } from 'lucide-react';
import BrandLogo from './components/atoms/brand-logo';
import SearchInput from './components/molecules/search-input';
import Typography from './components/atoms/typography';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import ProductCard from './components/molecules/product-card';
import FilterProducts from './components/molecules/filter-products';
import { useQuery } from '@tanstack/react-query';
import { ProductService } from './services/ProductService';
import { useForm } from 'react-hook-form';
import MyControlledTextInput from './components/atoms/my-controlled-text-input';



export default function App() {

  const { register, handleSubmit } = useForm<{ testing: string }>();

  const submit = handleSubmit((data) => {
    console.log(data)
  })

  const { isPending, error, data } = useQuery({
    queryKey: ['products'],
    queryFn: ProductService.getAll
  })



  if (isPending) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>
  return (
    <div className='container mx-auto pt-6 px-8 min-h-screen'>

      <form onSubmit={submit}>

        <input {...register('testing')} />
      </form>

      <header
        className="flex justify-between items-center mb-8"
      >
        <BrandLogo />
        <SearchInput />
        <div
          className="flex items-center gap-4"
        >
          <Heart size={24} />
          <ShoppingCart size={24} />
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png"
              height={40}
              width={40}
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </header>


      <main>
        <FilterProducts />


        <Typography
          as="h3"
          variant='h1'
        >
          Related Shops
        </Typography>

        <div
          className='grid grid-cols-6 gap-4 pt-8 w-full'
        >
          {
            data.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
              />
            ))
          }
        </div>
      </main>

    </div>

  )
}
