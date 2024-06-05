import { Heart, ShoppingCart } from 'lucide-react';
import BrandLogo from './components/atoms/brand-logo';
import SearchInput from './components/molecules/search-input';
import Typography from './components/atoms/typography';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import ProductCard from './components/molecules/product-card';
import FilterProducts from './components/molecules/filter-products';

export default function App() {
  return (
    <>

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
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </main>

    </>

  )
}
