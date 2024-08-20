import * as Yup from "yup";

export const validation = Yup.object({
    username: Yup.string().required("Username is a required field"),
    lastName: Yup.string().required("Last Name is a required field"),
    email: Yup.string().email().required("E-mail is a required field"),
    password: Yup.string().required("Username is a required field")
        .min(8, "Password required at least 8 characters"),
});