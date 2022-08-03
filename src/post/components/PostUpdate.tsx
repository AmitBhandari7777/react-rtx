
import { useState } from "react";
import { useAppDispatch } from "../../hooks";
import { PostUpdateRequest } from "../state/postInterface";
import { postUpdateThunk } from "../state/postThunk";


export const PostUpdate = (props: any) => {

    const dispatch = useAppDispatch();
    // const { count, list, status } = useAppSelector((state: RootState) => state.post);

    // const [show, setShow] = useState(true);
    // const [id, setId] = useState<number>();
    const [post, setPost] = useState({
        title: props.title,
        body: props.body,
        userId: props.userId,
        id: props.id
    });


    function handleChange(e: React.FormEvent<HTMLInputElement>) {
        setPost({
            ...post,
            // [e.currentTarget.name]: e.currentTarget.value
            [e.currentTarget.name]: isNaN(parseInt(
                e.currentTarget.value)) ?
                e.currentTarget.value :
                e.currentTarget.valueAsNumber
        });
    }


    const handleUpdate = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(post.title, post.body, post.userId);
        dispatch(postUpdateThunk(post as PostUpdateRequest));
    }
    // function handleShow(flag: boolean) {
    //     setShow(flag);
    // }




    return (
        <div>

            {/* {show === true ? */}

            {/* ( */}
            <div>
                Update Form
                <form onSubmit={handleUpdate}>
                    <div>
                        <input type="text"
                            placeholder="Title"
                            value={post.title}
                            name="title"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <input type="text"
                            placeholder="Body"
                            value={post.body}
                            name="body"
                            onChange={handleChange}
                        />
                    </div>

                    {/* <div>
                        <input type="valueAsNumber"
                            placeholder="User ID"
                            value={post.userId as number}
                            name="userId"
                            onChange={handleChange}
                        />
                    </div> */}
                    <div>
                        <button>Cancel</button>
                        <button type="submit">Update</button>
                    </div>
                </form>
            </div>
            {/* ) */}
            {/* :
                (<div></div>)
            } */}
        </div>
    );
}

export default PostUpdate