import React from 'react';
import { ErrorMessage, Form, Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import CustomInput from "@/components/inputs/CustomInput";
import CustomButton from "@/components/buttons/CustomButton";

interface FieldProps {
    name: string;
    type: string;
    placeholder: string;
    label: string;
    color: string;
}

interface DynamicFormProps {
    fields: FieldProps[];
    initialValues: { [key: string]: any };
    validationSchema: Yup.ObjectSchema<any>;
    onSubmit: (values: { [key: string]: any }, formikHelpers: FormikHelpers<{ [key: string]: any }>) => void;
    submitColor: string;
}

const DynamicFormModal: React.FC<DynamicFormProps> = (
    {
        fields,
        initialValues,
        validationSchema,
        onSubmit,
        submitColor,
        onClose,
    }) => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {formik => (
                <Form className="mt-4 grid gap-4">
                    {fields.map((field, index) => (
                        <div key={index} className="flex flex-col">
                            <label htmlFor={field.name} className="mb-1">{field.label}</label>
                            <CustomInput
                                name={field.name}
                                type={field.type}
                                placeholder={field.placeholder}
                                color={field.color}
                                inputClass={`${formik.errors[field.name] && formik.touched[field.name] ? 'border-red-500' : ''}`}
                            />
                            <ErrorMessage name={field.name} component="div" className="text-red-500 text-sm" />
                        </div>
                    ))}
                    <div className="flex justify-end mt-4 gap-4">
                        <CustomButton
                            onClick={onClose}
                            color={"secondary"}
                            title={"Close"}
                        />
                        <CustomButton
                            color={submitColor}
                            title={"Submit"}
                        />
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default DynamicFormModal;
