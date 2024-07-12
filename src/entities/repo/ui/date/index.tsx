import dayjs from "dayjs";
import {FC} from "react";

interface DateProps {
    date: string
}

export const Date: FC<DateProps> = (props) => {
    const {date} = props
    return (
        <div>
            {dayjs(date).format('DD.MM.YYYY')}
        </div>
    )
}
