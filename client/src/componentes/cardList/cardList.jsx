import React, { useEffect } from "react";
import Card from "../card/card";
import styles from "./cardList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { delPost, getPost } from "../../redux/actions";


export default function CardList() {
    const post = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPost());
    }, [dispatch]);

    const handleDelete = (id) => {
        dispatch(delPost(id)); 
    };

    return (
        <div className={styles.cardList}>
            {post?.map((post) => (
                <Card
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    subtitle={post.subtitle}
                    img={post.img}
                    cost={post.cost}
                    handleDelete={handleDelete} 
                />
            ))}
        </div>
    );
}
