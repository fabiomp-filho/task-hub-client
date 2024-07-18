import CustomInput from "@/components/inputs/CustomInput";
import {FaLock, FaUser} from "react-icons/fa";
import CustomButton from "@/components/buttons/CustomButton";
import Image from "next/image";

export default function Home() {
    return (
        <main className={"flex items-center justify-center text-light bg-lightgrey "}
              style={{backgroundImage: "url('/circuit-board.svg')"}}>
            <div className={"p-8 bg-white shadow-darkgreen shadow-md rounded-lg w-full max-w-xl bg-opacity-90"}>
                <form className={"grid p-6 gap-6 items-center"}>
                    <div className={"grid text-center mb-4 gap-2"}>
                        <Image src="/distribuidor-92.png" alt="Logo" width={92} height={92} className="mx-auto mb-4 w-24 h-24" />
                        <h1 className={"text-4xl text-center text-darkgreen "}><span></span>Task Hub</h1>
                        <p className="text-lightgrey text-center">Welcome!</p>
                    </div>
                    <CustomInput
                        icon={<FaUser className={"text-darkgreen"}/>}
                        required={true}
                        placeholder={"Username"}
                        label={"Username"}
                        color={"mediumgreen"}
                        inputClass={"border-darkgreen"}
                    />
                    <CustomInput
                        icon={<FaLock className={"text-darkgreen"}/>}
                        required={true}
                        placeholder={"Password"}
                        label={"Password"}
                        color={"mediumgreen"}
                        inputClass={"border-darkgreen"}
                    />
                    <CustomButton className={"mt-2"} title={"Log In"} color={"mediumgreen"}/>
                    <div className="flex justify-center mt-4">
                        <a title={"Clique para recuperar a senha"} href="#"
                           className="text-sm text-center text-mediumgreen hover:underline">Forget password?</a>
                    </div>
                </form>
            </div>
        </main>
    );
}
