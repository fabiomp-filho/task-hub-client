import "@/styles/globals.css";
import type {AppProps} from "next/app";
import {NotificationProvider} from "@/components/contexts/NotificationProvider";
import React, {useEffect, useState} from "react";
import Head from 'next/head'
import {useRouter} from "next/router";
import CustomLayout from "@/components/layout/CustomLayout";
import {store} from "@/store/store";
import {Provider} from "react-redux";
import LoadingSpinner from "@/components/loading/LoadingSpinner";

export default function App({Component, pageProps}: AppProps) {

    const router = useRouter();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const handleStart = () => setLoading(true);
        const handleComplete = () => setLoading(false);

        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleComplete);
        router.events.on('routeChangeError', handleComplete);

        return () => {
            router.events.off('routeChangeStart', handleStart);
            router.events.off('routeChangeComplete', handleComplete);
            router.events.off('routeChangeError', handleComplete);
        };
    }, [router.events]);

    const isLoginPage = router.pathname === "/";

    return (
        <Provider store={store}>
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
                {loading && <LoadingSpinner/>}
            </NotificationProvider>
        </Provider>
    );
}
