import { useState } from "react";
import { axiosRes } from "../../api/axiosDefaults";

const LikeComment = (props) => {
    console.log(props)
    const [likeCount, setLikeCount] = useState(props.count);

    const handleLikeComment = async () => {
        try {
            const { data } = await axiosRes.post("/likecomment/", { comment: props.id });
            console.log('data', data);
            setLikeCount(prev => prev +1);
        } catch (err) {
            console.log(err);
        }
    };
    return (
    <div>
        <i 
            className="fa-solid fa-heart" 
            onClick={handleLikeComment}
        />
        <span>{likeCount}</span>
    </div>
    );
};


export default LikeComment;