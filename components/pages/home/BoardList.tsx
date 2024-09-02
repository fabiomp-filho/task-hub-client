import {useRouter} from "next/router";

const BoardList = ({boards}) => {

    const router = useRouter();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" >
            {boards.map((board) => (
                <div key={board.id}
                     onClick={() => router.push(`board/${board.id}`)}
                     className="bg-white shadow shadow-black rounded-xl h-20 p-2 m-1 cursor-pointer
                  duration-300 ease-in-out hover:bg-coolGray-100 "
                     title={board.name}>
                    <h3 className="text-xl font-medium ms-2 text-ellipsis text-zinc-800 truncate">
                        {board.name}
                    </h3>
                </div>
            ))}
        </div>
    )
}

export default BoardList;