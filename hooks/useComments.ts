import React from "react";
import { Api } from "../utils/api";
import { CommentItem } from "../utils/api/types";

type UseCommentsType = {
    setComments: React.Dispatch<React.SetStateAction<CommentItem[]>>;
    comments: CommentItem[];
}

export const useComments = (postId?: number): UseCommentsType => {
    const [comments, setComments] = React.useState<CommentItem[]>([]);

    React.useEffect(() => {
        (async () => {
            try {
                const data = await Api().comment.getAll(postId);
                
                setComments(data);
            } catch (err) {
                console.warn('FetchingError', err);
            }
        })();
    }, [])
    return {comments, setComments};
}