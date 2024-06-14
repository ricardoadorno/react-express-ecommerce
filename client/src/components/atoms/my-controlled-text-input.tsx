import { FieldError } from 'react-hook-form';
import { Input } from '../shadcn/ui/input';

interface MyControlledTextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    error?: FieldError;
    required?: boolean;
}

export default function MyControlledTextInput({ error, ...rest }: MyControlledTextInputProps) {
    return (
        <>
            <Input
                {...rest}
            />
            {error && <p>{error?.message}</p>}
        </>

    )
}
