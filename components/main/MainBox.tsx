import React from 'react';
import {BiArrowBack} from "react-icons/bi";

interface IMainBox {
    title: string;
    back?: boolean;
}

const MainBox: React.FC<IMainBox> = (
    {
        title,
        back = false,
        router,
        body
    }) => {
    return (
        <div
            className="flex flex-col shadow-lightgreyHover shadow flex-1 md:p-8 p-4 bg-white md:m-4 rounded-3xl overflow-auto">
            <div className="min-w-full md:gap-0 gap-4 md:flex md:flex-row flex flex-col md:justify-between mb-4">
                <div className={"flex items-center gap-4"}>
                    {back && <button
                        title={"Back"}
                        className={"flex justify-center items-center bg-lightgrey rounded-3xl w-8 h-8 text-center font-bold"}
                        onClick={() => router.back()}>
                        <BiArrowBack className={"font-bold"} color={"white"}/>
                    </button>}
                    <h3 className="md:text-4xl text-3xl font-medium text-center">{title ?? "Title here"}</h3>
                </div>

            </div>
            <div className="overflow-auto my-4">
                {body}
            </div>
        </div>
    );
};

export default MainBox;
