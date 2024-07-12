import Star from '@/shared/assets/svg/star.svg?react'
import {FC} from "react";

interface StarsProps {
    count: number
}

export const Stars: FC<StarsProps> = (props) => {
    const {count} = props
    return (
        <div>{count} <Star/></div>
    )
}
