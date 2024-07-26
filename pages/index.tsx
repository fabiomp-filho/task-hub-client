import React, {useEffect} from 'react';
import DynamicForm from "@/components/form/DynamicForm";
import * as Yup from 'yup';
import {AuthService} from "@/services/AuthService";
import {useNotification} from "@/components/contexts/NotificationProvider";
import {useRouter} from "next/router";
import {removeToken, saveToken} from "@/utils/token";

export default function Login() {
    const router = useRouter();
    const {addNotification} = useNotification();

    useEffect(() => {
        removeToken();
        addNotification({message: "Removed Token!", type: "info"})
    }, []);

    const fields = [
        {name: 'username', type: 'text', placeholder: 'Username', label: 'Username', color: "mediumgreen"},
        {name: 'password', type: 'password', placeholder: 'Password', label: 'Password', color: "mediumgreen"},
    ];

    const initialValues = {
        username: '',
        password: '',
    };

    const validationSchema = Yup.object({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required'),
    });

    const onSubmit = async (values: { [key: string]: any }, {setSubmitting}: {
        setSubmitting: (isSubmitting: boolean) => void
    }) => {
        try {
            const response = await AuthService.login(values);
            saveToken(response.accessToken)
            addNotification({message: "Login successful!", type: "success"});
            router.push("/home")
        } catch (err) {
            addNotification({message: "Login failed!", type: "error"});
        }
        setSubmitting(false);
    };

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
