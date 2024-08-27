import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import LoadingSpinner from "@/components/loading/LoadingSpinner";
import {useNotification} from "@/components/contexts/NotificationProvider";
import {BoardService} from "@/services/BoardService";
import {CardService} from "@/services/CardService";
import CardsContainer from "@/components/pages/board/CardsContainer";
import CardsList from "@/components/pages/board/CardsList";

const Board = () => {

    const {addNotification} = useNotification();

    const router = useRouter();
    const {id} = router.query;
    const [entity, setEntity] = useState(null);
    const [columns, setColumns] = useState<any[]>([
        {
            id: 1,
            name: "To do",
            cards: [
                {
                    id: "1",
                    name: "Card 1",
                    description: "Card of column 1"
                },
                {
                    id: "2",
                    name: "Card 2",
                    description: "Card of column 1"
                },
                {
                    id: "3",
                    name: "Card 3",
                    description: "Card of column 1"
                }
            ]
        },
        {
            id: 2,
            name: "On going",
            cards: [
                {
                    id: "1",
                    name: "Card 1",
                    description: "Card of column 2"
                },
                {
                    id: "2",
                    name: "Card 2",
                    description: "Card of column 2"
                },
                {
                    id: "3",
                    name: "Card 3",
                    description: "Card of column 2"
                }
            ]
        },
        {
            id: 3,
            name: "Finished",
            cards: [
                {
                    id: "1",
                    name: "Card 1",
                    description: "Card of column 3"
                },
                {
                    id: "2",
                    name: "Card 2",
                    description: "Card of column 3"
                },
                {
                    id: "3",
                    name: "Card 3",
                    description: "Card of column 3"
                }
            ]
        }
    ]);

    const [cards, setCards] = useState([]);
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
                CardService.getCardsByBoardId(id).then((response) => {
                    setCards(response);
                }).catch(() => {
                }).finally(() => {
                    setLoading(false);
                })
            })
            .catch(() => {
                setLoading(false);
            })


    }
    const onSubmit = (data) => {

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
                    body={<CardsList cardList={columns}/>}
                />}
        </div>
    )
}

export default Board;