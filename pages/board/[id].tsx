import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import LoadingSpinner from "@/components/loading/LoadingSpinner";
import {useNotification} from "@/components/contexts/NotificationProvider";
import {BoardService} from "@/services/BoardService";
import CardsContainer from "@/components/pages/board/CardsContainer";
import CardsList from "@/components/pages/board/CardsList";

const Board = () => {

    const {addNotification} = useNotification();

    const router = useRouter();
    const {id} = router.query;
    const [entity, setEntity] = useState(null);
    const [columns, setColumns] = useState<any[]>([]);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (id) {
            fetchEntity();
        }

    }, [id]);
    const fetchEntity = () => {
        setLoading(true);
        BoardService.getBoardById(id)
            .then(response => {
                setEntity(response);
                setColumns(response.lists)
            })
            .catch(() => {

            }).finally(() => {
            setLoading(false);
        })
    }

    return (
        <div className={"flex flex-col flex-grow overflow-hidden"}>
            {loading && <LoadingSpinner/>}
            <div className="flex h-15 bg-darkgreenHover p-4 items-center">
                <h3 className="ms-6 text-xl font-semibold text-white  whitespace-nowrap">
                    {entity?.name ?? "Board"}</h3>
            </div>
            {entity &&
                <CardsContainer
                    body={
                        <CardsList
                            fetchBoard={fetchEntity}
                            cardList={columns}
                            boardId={entity?.id}
                        />
                    }
                />}
        </div>
    )
}

export default Board;