import {useState} from "react";
import {getToken} from "@/utils/token";
import {useRouter} from "next/router";

const Dashboard = () => {
    const router = useRouter();
    const [view, setView] = useState(false)

    return (
        <main className={"flex flex-col bg-lightgrey min-w-screen"}>
            <div className={"text-center p-2"}>
                <h3 className={"text-xl text-center"}>Welcome</h3>

                <button className={" bg-green-50"} onClick={() => setView(!view)}>click to see the token</button>
            </div>
            <div className={"p-2 w-full max-w-x2l overflow-auto"}>
                {view && <h3 className={"text-center"}>{getToken()}</h3>}
            </div>
            <div className={"text-center p-2"}>
                <button onClick={() => router.push("/")} className={" bg-green-50"}>Back to menu</button>
            </div>
        </main>
    )
}
export default Dashboard;