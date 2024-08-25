import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import LoadingSpinner from "@/components/loading/LoadingSpinner";
import {useNotification} from "@/components/contexts/NotificationProvider";
import {BoardService} from "@/services/BoardService";
import {CardService} from "@/services/CardService";
import CardsContainer from "@/components/pages/board/CardsContainer";

const EditUser = () => {

    const {addNotification} = useNotification();

    const router = useRouter();
    const {id} = router.query;
    const [entity, setEntity] = useState(null);
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
        <>
            {loading && <LoadingSpinner/>}
            {entity && <CardsContainer title={entity.name}/>}
        </>
    )
}

export default EditUser;