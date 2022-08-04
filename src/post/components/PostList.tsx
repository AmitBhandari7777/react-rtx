import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { RootState } from "../../store";
import { postListThunk } from "../state/postThunk";
import PostItem from "./PostItem";



export function PostList() {

    const { count, list, status } = useAppSelector((state: RootState) => state.post);
    const dispatch = useAppDispatch();


    const initFetch = useCallback(() => {
        dispatch(postListThunk())
            .unwrap()
            .then((result) => {
                console.log("result");
                console.log(result);
            })
            .catch((e) => {
                console.log("error", e);
            })
    }, [dispatch])

    useEffect(() => {
        initFetch();
    }, [initFetch]);

    return (
        <div className="postList">

            {count > 0 ?
                (
                    list.map((post, index) => (
                        <PostItem
                            key={index}
                            title={post.title}
                            id={post.id}
                            userId={post.userId}
                            body={post.body} />
                    ))
                ) :
                (<p>{status === "loading" && count === 0 ? (<label>Loading...</label>) : (<label>No Post(s)</label>)}</p>)
            }

        </div>

    );
}
export default PostList;





