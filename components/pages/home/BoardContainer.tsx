import React from 'react';


interface IMainBox {
    title: string;
    body?: React.ReactNode
}

const BoardContainer: React.FC<IMainBox> = (
    {
        title,
        body
    }) => {
    return (
        <div
            className="flex flex-col shadow-lightgreyHover shadow flex-1 md:p-8 p-4 bg-white md:m-4 rounded-3xl overflow-auto">
            <div className="min-w-full md:gap-0 gap-4 md:flex md:flex-row flex flex-col md:justify-between mb-4">
                <h3 className="md:text-4xl text-3xl font-medium text-center">{title ?? "Title here"}</h3>
            </div>
            <div className="overflow-auto my-4">
                {body}
            </div>
        </div>
    );
};

export default BoardContainer;
