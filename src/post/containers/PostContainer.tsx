import { Container } from "reactstrap";
import PostAdd from "../components/PostAdd";
import PostList from "../components/PostList";


export function PostContainer() {

    return (
        <Container>
        <div>
            <PostAdd />
            <PostList />
        </div>
        </Container>
    );
}

export default PostContainer;