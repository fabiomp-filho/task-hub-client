import {useRouter} from "next/router";
import MainBox from "@/components/main/MainBox";
import {useEffect, useState} from "react";
import {fields} from "@/components/pages/users/create";
import {UserService} from "@/services/UserService";
import LoadingSpinner from "@/components/loading/LoadingSpinner";
import {useNotification} from "@/components/contexts/NotificationProvider";
import DynamicForm from "@/components/form/DynamicForm"
import {validation} from "@/components/pages/users/validation";

const EditUser = () => {
    const {addNotification} = useNotification();

    const router = useRouter();
    const {id} = router.query;
    const [entity, setEntity] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (id) {
            fetchEntity();
        }

    }, [id]);
    const fetchEntity = () => {
        setLoading(true);
        UserService.getUserById(id)
            .then(response => {
                setEntity(response);
            })
            .catch(() => {
            })
            .finally(() => {
                setLoading(false);
            })
    }
    const onSubmit = (data) => {
        setLoading(true);

        UserService.updateUser(data, id).then(() => {
            addNotification({
                message: "User succesfully updated!",
                type: "success"
            })

        })
            .catch(() => {
            }).finally(() => {
            setLoading(false);
            fetchEntity();
        })
    }

    return (
        <>
            {loading && <LoadingSpinner/>}
            {entity && <MainBox
                router={router}
                back={true}
                body={
                <DynamicForm
                    initialValues={entity}
                    fields={fields}
                    onSubmit={onSubmit}
                    validationSchema={validation}
                    titleSubmit={"Update"}
                    width={"w-52"}
                />}
                title={"Edit"}

                titleSubmit={"Update"}

            />}
        </>
    )
}

export default EditUser;