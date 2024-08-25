import {useEffect} from "react";
import BoardContainer from "@/components/pages/home/BoardContainer";
import BoardList from "@/components/pages/home/BoardList";
import {fetchBoards} from "@/store/boardsSlice";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/store/store";
import LoadingSpinner from "@/components/loading/LoadingSpinner";

const Home = () => {

    const dispatch = useDispatch<AppDispatch>();
    const {boards, loading} = useSelector((state: RootState) => state.boards);

    useEffect(() => {
        dispatch(fetchBoards() as any);
    }, [dispatch]);

    return (
        <div className="flex-1 p-4 ml-0 overflow-y-auto rounded-xl md:mr-2">
            <BoardContainer
                title={"Boards"}
                body={<BoardList boards={boards}/>}
            />
            {loading && <LoadingSpinner/>}
        </div>
    )
}
export default Home;