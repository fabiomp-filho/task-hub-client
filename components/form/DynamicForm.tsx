import React, {useMemo} from 'react';
import {Form, Formik, FormikHelpers} from 'formik';
import * as Yup from 'yup';
import CustomButton from "@/components/buttons/CustomButton";
import {RenderFields} from "@/components/form/RenderFields";

export interface IFields {
    name: string;
    type: string;
    placeholder: string;
    label: string;
    color: string;
}

interface DynamicFormProps {
    fields: IFields[];
    initialValues?: { [key: string]: any };
    validationSchema: Yup.ObjectSchema<any>;
    onSubmit: (values: { [key: string]: any }, formikHelpers: FormikHelpers<{ [key: string]: any }>) => void;
    submitColor?: string;
    titleSubmit?: string;
    width?: string;
}

const DynamicForm: React.FC<DynamicFormProps> = (
    {
        fields = [],
        initialValues = {},
        validationSchema,
        onSubmit,
        submitColor,
        titleSubmit = "Submit",
        width
    }
) => {

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
                <Form className="grid gap-4" key={"form"}>
                    {fields.map((field) => (

                        <RenderFields field={field} formik={formik}/>
                    ))}

                    <div className="col-span-full flex justify-center mt-4">
                        <CustomButton width={width} color={submitColor} type="submit" title={titleSubmit} />
                    </div>

                </Form>
            )}
        </Formik>
    );
};

export default DynamicForm;
