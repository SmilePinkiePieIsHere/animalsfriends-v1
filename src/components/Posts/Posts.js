import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";

import PostCard from "./PostCard";

import endpoints from "../../services/endpoints.js";
import { getData } from "../../services/services";


function Posts() {
    const [posts, setPosts] = useState();

    useEffect(() => {
        getData(endpoints.posts, function (error) {
            alert(error);
        }, "Грешка от страна на сървъра при вземане на животните!")
            .then(res => {                
                setPosts(res)
            });
    }, []);

    return (
        <div className="wrap-posts">
            <Container>                
                <Row>
                    {posts?.map(x =>
                         <PostCard key={x.id} {...x} />
                    )}
                </Row>
            </Container>
        </div>
    )
}

export default Posts;
