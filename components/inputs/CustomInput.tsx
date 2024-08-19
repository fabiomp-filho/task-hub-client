import {Field} from "formik";

const CustomInput = (
    {
        name,
        type,
        label,
        placeholder,
        inputClass,
        labelClass,
        required,
        icon,
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
        <div key={name} className={"grid gap-2"}>
            <div className={"flex items-center gap-2"}>
                {icon && <span>{icon}</span>}
                <label htmlFor={name} className={labelClass}> {label} {required &&
                    <span title={"required field"} className={"text-danger"}>*</span>}</label>
            </div>
            <Field
                key={name}
                name={name}
                type={type}
                title={label}
                placeholder={placeholder}
                className={`${baseClasses} ${colorClasses[color]} ${inputClass}`}
            />
        </div>
    )
}

export default CustomInput;
