import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/shadcn/ui/select"


interface MySelectProps {
    items: {
        value: string;
        label: string;
    }[]
    placeholder: string;

}

export default function MySelect({ items, placeholder }: MySelectProps) {

    return (
        <Select>
            <SelectTrigger >
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                {items.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                        {item.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}
