import React, { useState } from "react";
import { Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { MoreDropdown } from "../../components/MoreDropdown";
import CommentEditForm from "./CommentEditForm";

import styles from "../../styles/Comment.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosRes } from "../../api/axiosDefaults";

const Comment = (props) => {
    const { profile_id, profile_image, owner, updated_at, content,
        id, setPost, setComments, likecomment_id, likecomment_count } = props;
    
    const [showEditForm, setShowEditForm] = useState(false);
    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;

    const handleDelete = async () => {
        try {
            await axiosRes.delete(`/comments/${id}/`);
            setPost((prevPost) => ({
                results: [
                    {
                        ...prevPost.results[0],
                        comments_count: prevPost.results[0].comments_count - 1,
                    },
                ],
            }));
        
            setComments((prevComments) => ({
                ...prevComments,
                results: prevComments.results.filter((comment) => comment.id !== id),
            }));
        } catch (err) {}
    };

    // Like/ unlike comment function

    const handleLikeComment = async () => {
        try {
            const { data } = await axiosRes.post("/likecomment/", { comment: id });
            setComments((prevComments) => ({
                ...prevComments,
                results: prevComments.results.map((comment) => {
                    return comment.id === id
                        ? { ...comment, likecomment_count: comment.likecomment_count + 1, likecomment_id: data.id }
                        : comment;
                }),
            }));
        } catch (err) {
            // console.log(err);
        }
    };
        
    const handleUnlikeComment = async () => {
        try {
            await axiosRes.delete(`/likecomment/${likecomment_id}`);
            setComments((prevComments) => ({
                ...prevComments,
                results: prevComments.results.map((comment) => {
                return comment.id === id
                    ? { ...comment, likecomment_count: comment.likecomment_count - 1, likecomment_id: null }
                    : comment;
                }),
            }));
        } catch (err) {
            // console.log(err);
        }
    };

    return (
        <>
            <hr />
            <Media>
                <Link to={`/profiles/${profile_id}`}>
                    <Avatar src={profile_image} />
                </Link>
                <Media.Body className="align-self-center ml-2">
                    <span className={styles.Owner}>{owner}</span>
                    <span className={styles.Date}>{updated_at}</span>

                    {is_owner ? (
                        <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>You can't like your own comment!</Tooltip>}
                        >
                            <i className={`fa-regular fa-heart`} />
                        </OverlayTrigger>
                    ) : likecomment_id? (
                        <span onClick={handleUnlikeComment}>
                            <i className={`fa-solid fa-heart ${styles.Heart}`}  />
                        </span>
                    ) : currentUser ? (
                        <span onClick={handleLikeComment}>
                            <i className={`fa-regular fa-heart ${styles.HeartOutline}`} />
                        </span>   
                    ) : (
                        <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>Log in to like comments!</Tooltip>}
                        >
                            <i className= "fa-regular fa-heart" />
                        </OverlayTrigger>
                    )}
                    {likecomment_count}

                    {showEditForm ? (
                        <CommentEditForm 
                            id={id}
                            profile_id={profile_id}
                            content={content}
                            profileImage={profile_image}
                            setComments={setComments}
                            setShowEditForm={setShowEditForm}
                        />
                    ) : (
                        <p>{content}</p>
                    )}
                </Media.Body>
                {is_owner && !showEditForm && (
                    <MoreDropdown
                        handleEdit={() => setShowEditForm(true)}
                        handleDelete={handleDelete}
                    />
                )}
            </Media>
        </>
    );
};

export default Comment;
