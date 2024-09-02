import React, {useEffect, useState} from 'react';
import DynamicForm from "@/components/form/DynamicForm";
import * as Yup from 'yup';
import {AuthService} from "@/services/AuthService";
import {useNotification} from "@/components/contexts/NotificationProvider";
import {useRouter} from "next/router";
import {removeLogin, saveToken} from "@/utils/token";
import Image from "next/image";
import logo from "public/distribuidor-92.png"
import LoadingSpinner from "@/components/loading/LoadingSpinner";

export default function Login() {
    const router = useRouter();
    const {addNotification} = useNotification();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        removeLogin();
    }, []);

    const fields = [
        {name: 'email', type: 'text', placeholder: 'E-mail', label: 'E-mail', color: "mediumgreen"},
        {name: 'password', type: 'password', placeholder: 'Password', label: 'Password', color: "mediumgreen"},
    ];

    const validationSchema = Yup.object({
        email: Yup.string().required("E-mail is a required field"),
        password: Yup.string().required("Password is a required field"),
    });

    const onSubmit = async (values: { [key: string]: any }, {setSubmitting}: {
        setSubmitting: (isSubmitting: boolean) => void
    }) => {
        setLoading(true);
        try {
            const response = await AuthService.login(values);
            saveToken(response.accessToken)
            addNotification({message: "Login successful!", type: "success"});
            router.push("/home")
        } catch (err) {

        } finally {
            setLoading(false);
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
                    <Image src={logo} alt="Logo" className="mx-auto mb-4 w-24 h-24"/>
                    <h1 className="text-4xl text-center text-darkgreen">Task Hub</h1>

                </div>
                <DynamicForm
                    fields={fields}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                    submitColor={"mediumgreen"}
                />
            </div>
            {loading && <LoadingSpinner/>}
        </main>
    );
}
