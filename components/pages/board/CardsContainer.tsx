import React from 'react';


interface IMainBox {
    title: string;
    body?: React.ReactNode
}

const CardsContainer: React.FC<IMainBox> = (
    {
        title,
        body
    }) => {
    return (
        <div
            className="flex flex-col flex-1 bg-white d:overflow-auto">
            <div className="min-w-full md:gap-0 gap-4 md:flex md:flex-row flex flex-col md:justify-between mb-4
            bg-darkgreenHover p-4">
                <h3 className="ms-8 text-3xl font-semibold text-center text-white">{title ?? "Title here"}</h3>
            </div>
            <div className="overflow-auto my-4">
                {body}
            </div>
        </div>
    );
};

export default CardsContainer;
