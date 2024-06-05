
export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
    as?: keyof HTMLElementTagNameMap
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
    children: React.ReactNode
}



export default function Typography({ as, variant, children, ...props }: TypographyProps) {

    const Comp = as ? as : 'p'

    return (
        <Comp
            {...props}
        >
            {children}
        </Comp>
    )
}
