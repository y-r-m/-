import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProfileData = {
  donghun: {
    id: 1,
    name: "정동훈",
    description: "리액트 강의 담당자 입니다.",
  },
  yerim: {
    id: 2,
    name: "장예림",
    description: "리액트 강의 수강자 입니다.",
  },
};

const Profile = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  const profile = ProfileData[username];

  console.log(useParams());
  console.log(useNavigate());
  console.log(username);
  console.log(profile);
  return (
    <div>
      <h3>
        {profile.name}({username})이 무엇을 하는 사람일까요?
      </h3>
      <p>{profile.description}</p>
      <div onClick={() => navigate(-1)}>뒤로가기</div>
    </div>
  );
};

export default Profile;
