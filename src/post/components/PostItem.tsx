import { useEffect } from "react";
import PostDelete from "./PostDelete";
import { PostUpdate } from "./PostUpdate";

const PostItem = (props: any) => {
    // const [id, setId] = useState<number>();
    useEffect(() => {
        // setId(props.id);
    }, [props.id]);

    return (
        <div>
            <label><h2><p>{props.title}</p></h2></label>
            <label><p>{props.body}</p></label>
            {/* <label>{props.id}</label>
            <label>{id}</label> */}

            <PostUpdate
                {...props} />
            <p></p>
            <p></p>
            <PostDelete
                {...props} />
            <hr />
        </div>
    );
}

export default PostItem;