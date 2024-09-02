import * as Yup from "yup";

export const validation = Yup.object({
    name: Yup.string().required("Board Title is a required field")
        .max(100, "Board title must have a maximum of 100 characters")
});