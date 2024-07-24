import "@/styles/globals.css";
import type {AppProps} from "next/app";
import {NotificationProvider} from "@/components/contexts/NotificationProvider";
import React from "react";
import Head from 'next/head'
import {useRouter} from "next/router";
import CustomLayout from "@/components/layout/CustomLayout";

export default function App({Component, pageProps}: AppProps) {

    const router = useRouter();
    const isLoginPage = router.pathname === "/";

    return (
        <NotificationProvider>
            <Head>
                <title>Task Hub</title>
            </Head>

            {isLoginPage ?
                <Component {...pageProps} /> :
                <CustomLayout>
                    <Component {...pageProps} />
                </CustomLayout>
            }

        </NotificationProvider>
    );
}
