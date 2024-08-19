import React from "react";

interface CustomButtonProps {
    type?: "submit" | "reset" | "button";
    title?: string;
    className?: string;
    onClick?: () => void;
    color?: string;
    hoverTitle?: string;
    py?: string;
    px?: string;
    icon?: React.ReactNode;
    currentPage?: boolean;
    disabled?: boolean;
    width?: string;
}

const CustomButton: React.FC<CustomButtonProps> = (
    {
        key,
        type,
        title,
        hoverTitle,
        py = "2",
        px = "4",
        rounded = "rounded-lg",
        className = "",
        onClick,
        color = "primary",
        icon,
        currentPage = false,
        disabled = false,
        width,
    }
) => {
    const baseClasses = `${width} flex md:gap-4 gap-2 justify-center items-center font-bold py-${py} px-${px} ${rounded} focus:outline-none focus:shadow-outline duration-300`;
    const colorClasses = {
        primary: `bg-primary hover:bg-primaryHover text-white`,
        outlinePrimary: `bg-white border border-primary hover:border-primaryHover text-primary`,
        secondary: `bg-secondary hover:bg-secondaryHover text-white`,
        success: `bg-success hover:bg-successHover text-white`,
        danger: `bg-danger hover:bg-dangerHover text-white`,
        warning: `bg-warning hover:bg-warningHover text-white`,
        darkgreen: `bg-darkgreen hover:bg-darkgreenHover text-white`,
        mediumgreen: `bg-mediumgreen hover:bg-mediumgreenHover text-white`,
        lightgrey: `bg-lightgrey hover:bg-lightgreyHover text-white`,
    };

    const currentPageClasses = {
        primary: `bg-primaryHover text-white cursor-not-allowed`,
        outlinePrimary: `bg-primaryHover text-white cursor-not-allowed`,
        secondary: `bg-secondaryHover text-white cursor-not-allowed`,
        success: `bg-successHover text-white cursor-not-allowed`,
        danger: `bg-dangerHover text-white cursor-not-allowed`,
        warning: `bg-warningHover text-white cursor-not-allowed`,
        darkgreen: `bg-darkgreenHover text-white cursor-not-allowed`,
        mediumgreen: `bg-mediumgreenHover text-white cursor-not-allowed`,
        lightgrey: `bg-lightgreyHover text-white cursor-not-allowed`,
    };

    const disabledClasses = `opacity-50 cursor-not-allowed`;

    const finalClasses = ` ${baseClasses} ${colorClasses[color]} ${currentPage ? currentPageClasses[color] : ""} ${disabled ? disabledClasses : ""} ${className}`;

    return (
        <button
            key={key}
            type={type}
            title={hoverTitle ?? title}
            className={finalClasses}
            onClick={!disabled ? onClick : undefined}
            disabled={disabled}
        >
            {icon}{title}
        </button>
    )
}

export default CustomButton;
