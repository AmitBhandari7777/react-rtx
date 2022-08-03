import { useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks";
import { postDeleteThunk } from "../state/postThunk";


function PostDelete(props: any) {

    const dispatch = useAppDispatch();

    const [id, setId] = useState<number>();

    useEffect(() => {
        setId(props.id);
    }, [props.id]);

    const handlePostDelete = () => {
        dispatch(postDeleteThunk(id as number));
    }

    return (
        <button onClick={handlePostDelete}>Delete</button>
    );
}

export default PostDelete;