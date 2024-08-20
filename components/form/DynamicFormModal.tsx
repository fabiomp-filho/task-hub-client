import React, {useMemo} from 'react';
import {Form, Formik, FormikHelpers} from 'formik';
import * as Yup from 'yup';
import CustomButton from "@/components/buttons/CustomButton";
import {RenderFields} from "@/components/form/RenderFields";

interface FieldProps {
    name: string;
    type: string;
    placeholder: string;
    label: string;
    color: string;
}

interface DynamicFormProps {
    fields: FieldProps[];
    initialValues?: { [key: string]: any };
    validationSchema: Yup.ObjectSchema<any>;
    onSubmit: (values: { [key: string]: any }, formikHelpers: FormikHelpers<{ [key: string]: any }>) => void;
    submitColor: string;
}

const DynamicFormModal: React.FC<DynamicFormProps> = (
    {
        fields = [],
        initialValues = {},
        validationSchema,
        onSubmit,
        submitColor,
        onClose,
    }) => {

    const computedInitialValues = useMemo(() => {
        return fields.reduce((acc, field) => {
            acc[field.name] = initialValues[field.name] || "";
            return acc;
        }, {} as { [key: string]: any });
    }, [fields, initialValues]);
    return (
        <Formik
            initialValues={computedInitialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {formik => (
                <Form className="mt-4 grid gap-4">
                    {fields.map((field, index) => (

                        <RenderFields field={field} index={index} formik={formik}/>

                    ))}
                    <div className="flex justify-end mt-4 gap-4">
                        <CustomButton
                            onClick={onClose}
                            type={"reset"}
                            color={"secondary"}
                            title={"Close"}
                        />
                        <CustomButton
                            color={submitColor}
                            type={"submit"}
                            title={"Submit"}
                        />
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default DynamicFormModal;
