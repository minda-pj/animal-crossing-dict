"use client";

import {
  DetailInfoCommentButton,
  DetailInfoCommentInput,
  DetailInfoCommentInputWrap,
  DetailInfoCommentTitle,
  DetailInfoCommentWrap,
} from "../styles/DetailModal.styles";

import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase";
import { useEffect, useState } from "react";

interface InfoCommentProps {
  category: string;
  id: string;
}

export const InfoComment = ({ category, id }: InfoCommentProps) => {
  const [name, setName] = useState<string>("");
  const [comment, setComment] = useState<string>("");

  useEffect(() => {
    fetchComments();
  }, []);

  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    const q = query(
      collection(db, "comments"),
      where("category", "==", category),
      where("id", "==", id)
    );

    const querySnapshot = await getDocs(q);

    setComments(
      querySnapshot.docs.map((doc) => {
        return doc.data();
      })
    );
  };

  // 댓글 달기
  const clickHandleSetComment = async () => {
    await addDoc(collection(db, "comments"), {
      category,
      id,
      name,
      comment,
    });

    setComments([
      ...comments,
      {
        category,
        id,
        name,
        comment,
      },
    ]);
  };

  const handleChangeInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    setState
  ) => {
    setState(e.target.value);
  };

  return (
    <DetailInfoCommentWrap>
      <DetailInfoCommentTitle>Comment</DetailInfoCommentTitle>
      <DetailInfoCommentInputWrap>
        <DetailInfoCommentInput
          placeholder="Name"
          onChange={(e) => handleChangeInput(e, setName)}
        />
        <DetailInfoCommentInput
          placeholder="Add Comment..."
          onChange={(e) => handleChangeInput(e, setComment)}
        />
        <DetailInfoCommentButton onClick={clickHandleSetComment}>
          Add Comment
        </DetailInfoCommentButton>
        <ul>
          {comments.map((com, index) => (
            <li key={`${com.id}-${index}`}>{com.comment}</li>
          ))}
        </ul>
      </DetailInfoCommentInputWrap>
    </DetailInfoCommentWrap>
  );
};
