import {FC} from "react";
import {Languages} from "@/entities/repo";

export const LanguagesList: FC<Languages> = (props) => {
    const {nodes, totalCount} = props
    return (
        <div>
            <b>Список используемых языков</b>
            <ul>
                {nodes.length > 0
                    ? nodes.map(({name}, i) => (
                        <li key={i}>{name}</li>
                    ))
                    : "Не указано"}
            </ul>
            {nodes.length < totalCount && `И еще ${totalCount - nodes.length}`}
        </div>
    )
}
