import React from "react";

interface CustomButtonProps {
    type?: "submit" | "reset" | "button";
    title: string;
    className?: string;
    onClick?: () => void;
    color?: string;
}

const CustomButton: React.FC<CustomButtonProps> = (
    {
        type ,
        title,
        className = "",
        onClick,
        color = "primary"
    }
) => {
    const baseClasses = `font-bold px-4 rounded-lg focus:outline-none focus:shadow-outline duration-300`;
    const colorClasses = {
        primary: `bg-primary hover:bg-primaryHover text-white`,
        secondary: `bg-secondary hover:bg-secondaryHover text-white`,
        success: `bg-success hover:bg-successHover text-white`,
        danger: `bg-danger hover:bg-dangerHover text-white`,
        warning: `bg-warning hover:bg-warningHover text-white`,
        darkgreen: `bg-darkgreen hover:bg-darkgreenHover text-white`,
        mediumgreen: `bg-mediumgreen hover:bg-mediumgreenHover text-white`,
        lightgrey: `bg-lightgrey hover:bg-lightgreyHover text-white`,
    };

    return (
        <button
            type={type}
            title={title}
            className={`${baseClasses} ${colorClasses[color!]} ${className}`}
            onClick={onClick}>
            {title}
        </button>
    )
}

export default CustomButton;
