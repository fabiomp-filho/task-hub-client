import React from "react";
import {ErrorMessage, FieldProps, FormikProps, FormikValues} from "formik";
import CustomInput from "@/components/inputs/CustomInput";

interface FieldProps {
    name: string;
    type: string;
    placeholder?: string;
    label: string;
    color?: string;
    options?: { value: string; label: string }[];
    required?: boolean;
}

interface RenderFieldsProps {
    field: FieldProps;
    index: number;
    formik: FormikProps<FormikValues>;
}

export const RenderFields: React.FC<RenderFieldsProps> = ({field, index, formik}) => {

    switch (field.type) {
        case 'text':
        case 'password':
        case 'email':
        case 'number':
            return (
                <div key={index} className="flex flex-col">
                    <CustomInput
                        label={field.label}
                        required={true}
                        name={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                        color={field.color}
                        inputClass={`${formik.errors[field.name] && formik.touched[field.name] ? 'border-red-500' : ''}`}
                    />
                    <ErrorMessage id={field.name} name={field.name} component="div" className="text-red-500 text-sm"/>
                </div>

            );
        case 'checkbox':
            return (
                <input
                    id={field.name}
                    name={field.name}
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                />
            );
        case 'select':
            return (
                <select
                    id={field.name}
                    name={field.name}
                    className="form-select mt-1 block w-full pl-3 pr-10 py-2 text-base leading-6
                     border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm
                     sm:leading-5"
                >
                    {field.options?.map((option, idx) => (
                        <option key={idx} value={option.value}>{option.label}</option>
                    ))}
                </select>
            );
        default:
            return (
                <CustomInput
                    name={field.name}
                    type="text"
                    placeholder={field.placeholder}
                    color={field.color}
                    inputClass={`${formik.errors[field.name] && formik.touched[field.name] ? 'border-red-500' : ''}`}
                />
            );
    }
};