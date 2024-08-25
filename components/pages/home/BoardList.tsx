import {useRouter} from "next/router";

const BoardList = ({boards}) => {

    const router = useRouter();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" >
            {boards.map((board) => (
                <div key={board.id}
                     onClick={() => router.push(`board/${board.id}`)}
                     className="bg-white shadow shadow-black rounded-2xl p-2 m-1 cursor-pointer
                  duration-300 ease-in-out hover:scale-95 hover:shadow-lg hover:bg-coolGray-300 "
                     title={board.name}>
                    <h3 className="text-xl font-medium mb-2 border-b text-ellipsis text-zinc-800 truncate">
                        {board.name}
                    </h3>
                    <p className="text-sm text-gray-600">{board.description}</p>
                </div>
            ))}
        </div>
    )
}

export default BoardList;