const CustomInput = (
    {
        label,
        placeholder,
        inputClass,
        labelClass,
        required,
        icon,
        onChange,
        value,
        color = 'primary'
    }
) => {
    const baseClasses = `shadow appearance-none border rounded-lg w-full py-2 px-3 text-lightgrey leading-tight
                 focus:outline-none focus:shadow-outline transition duration-300 border-lightgrey`;
    const colorClasses = {
        primary: `focus:border-primary focus:shadow-primaryHover`,
        secondary: `focus:border-secondary focus:shadow-secondaryHover`,
        success: `focus:border-success focus:shadow-successHover`,
        danger: `focus:border-danger focus:shadow-dangerHover`,
        warning: `focus:border-warning focus:shadow-warningHover`,
        darkgreen: `focus:border-darkgreen focus:shadow-darkgreenHover`,
        mediumgreen: `focus:border-mediumgreen focus:shadow-mediumgreenHover`,
        lightgrey: `focus:border-lightgrey focus:shadow-lightgreyHover`,
    };

    return (
        <div className={"grid gap-2"}>
            <div className={"flex items-center gap-2"}>
                {icon && <span>{icon}</span>}
                <label className={labelClass}> {label} {required &&
                    <span title={"required field"} className={"text-danger"}>*</span>}</label>
            </div>
            <input
                title={label}
                placeholder={placeholder}
                className={`${baseClasses} ${colorClasses[color]} ${inputClass}`}
                onChange={onChange && onChange}
                value={value}
            />
        </div>
    )
}

export default CustomInput;
