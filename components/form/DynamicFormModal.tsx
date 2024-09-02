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

export interface DynamicFormProps {
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
        titleSubmit
    }) => {

    const computedInitialValues = useMemo(() => {
        return fields.reduce((acc, field) => {
            acc[field.name] = initialValues[field.name] || "";
            return acc;
        }, {} as { [key: string]: any });
    }, [fields, initialValues]);

    const handleSubmit = (values: { [key: string]: any }, formikHelpers: FormikHelpers<{ [key: string]: any }>) => {
        onSubmit(values, formikHelpers);
        formikHelpers.resetForm();
    };

    return (
        <Formik
            initialValues={computedInitialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            enableReinitialize={true}
        >
            {formik => (
                <Form className="mt-4 grid gap-4">
                    {fields.map((field) => (
                        <RenderFields key={field.name} field={field} formik={formik}/>
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
                            title={titleSubmit ?? "submit"}
                        />
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default DynamicFormModal;
