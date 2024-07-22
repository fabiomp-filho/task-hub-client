import React from 'react';
import DynamicForm from "../components/form/DynamicForm"
import * as Yup from 'yup';

const fields = [
    {name: 'username', type: 'text', placeholder: 'Username', label: 'Username', color: "mediumgreen"},
    {name: 'password', type: 'text', placeholder: 'Password', label: 'Password', color: "mediumgreen"},
];

const initialValues = {
    teste: '',
    teste2: '',
};

const validationSchema = Yup.object({
    username: Yup.string().required('Username is required').min(3, 'Username must be at least 3 characters'),
    password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
});

const onSubmit = (values: { [key: string]: any }, {setSubmitting}: {
    setSubmitting: (isSubmitting: boolean) => void
}) => {
    console.log('Form data', values);
    setSubmitting(false);
};

export default function Home() {
    return (
        <main className="flex items-center justify-center text-light bg-lightgrey min-h-screen"
              style={{
                  backgroundImage: "url('/circuit-board.svg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
              }}>
            <div className="p-8 bg-white shadow-darkgreen shadow-md rounded-lg w-full max-w-xl bg-opacity-90">
                <div className="grid text-center mb-4 gap-2">
                    <img src="/distribuidor-92.png" alt="Logo" className="mx-auto mb-4 w-24 h-24"/>
                    <h1 className="text-4xl text-center text-darkgreen">Task Hub</h1>
                    <p className="text-lightgrey text-center">Welcome!</p>
                </div>
                <DynamicForm
                    fields={fields}
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                    submitColor={"mediumgreen"}
                />
            </div>
        </main>
    );
}
