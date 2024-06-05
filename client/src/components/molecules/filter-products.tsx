import { Settings2 } from 'lucide-react';
import MySelect from '../atoms/my-select';


export default function FilterProducts() {
    return (
        <div
            className='
            grid grid-cols-12
            align-center
            w-full justify-center gap-4 my-4'
        >
            <Settings2 size={24}

            />
            <MySelect
                items={[{
                    value: 'price',
                    label: 'Price'
                },
                {
                    value: 'date',
                    label: 'Date'
                },
                {
                    value: 'popularity',
                    label: 'Popularity'
                }]
                }
                placeholder='Filter by' />
            <MySelect
                items={[{
                    value: 'price',
                    label: 'Price'
                },
                {
                    value: 'date',
                    label: 'Date'
                },
                {
                    value: 'popularity',
                    label: 'Popularity'
                }]
                }
                placeholder='Filter by' />
            <MySelect
                items={[{
                    value: 'price',
                    label: 'Price'
                },
                {
                    value: 'date',
                    label: 'Date'
                },
                {
                    value: 'popularity',
                    label: 'Popularity'
                }]
                }
                placeholder='Filter by' />

        </div>
    )
}
