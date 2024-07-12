import {FC} from "react";

interface DescriptionProps {
    text: string | null
}

export const Description: FC<DescriptionProps> = (props) => {
    const {text} = props
    return (
        <div>
            <b>Описание репозитория:</b>
            <div>{text ?? "Не указано"}</div>
        </div>
    )
}
