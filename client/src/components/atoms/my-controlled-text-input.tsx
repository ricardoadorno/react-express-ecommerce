import { Input } from '../shadcn/ui/input';

interface MyControlledTextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    register: any;
    name: string;
}

export default function MyControlledTextInput({ name, register, ...rest }: MyControlledTextInputProps) {
    return (
        <Input
            {...rest}
            {...register(name)}
        />
    )
}
