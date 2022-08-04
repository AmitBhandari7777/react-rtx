import { useState } from "react";
import { useAppDispatch } from "../../hooks";
import { PostAddRequest } from "../state/postTypes";
import { postAddThunk } from "../state/postThunk";

function PostAdd() {

    const [userId, setUserId] = useState<number>(1);
    const [title, setTitle] = useState<string | any>("");
    const [body, setBody] = useState<string | any>("");
    const dispatch = useAppDispatch();

    const handleAddPost = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(postAddThunk({ userId, title, body } as PostAddRequest));
    }

    return (
        <div>
            <form onSubmit={handleAddPost}>
                <div>
                    <input placeholder="Title"
                        name="title"
                        value={title}
                        type="text"
                        onChange={(e) => setTitle(e.target.value)} />
                </div>

                <div>
                    <input placeholder="Body"
                        value={body}
                        type="text"
                        onChange={(e) => setBody(e.target.value)} />
                </div>

                <div>
                    <input placeholder="User ID"
                        value={userId}
                        onChange={(e) => setUserId(e.target.valueAsNumber)} />
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );

}

export default PostAdd;