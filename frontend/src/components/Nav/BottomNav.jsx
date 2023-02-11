import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BottomNav.module.css";
import {
  HomeIcon,
  ChatBubbleOvalLeftIcon,
  PlusCircleIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import LiveIcon from "../../assets/images/LiveIcon.png";
import { useSelector } from "react-redux";

export default function BottomNav({curLocation}) {
  console.log(curLocation, '🩱')
  const userCode = useSelector((state) => {
    return state.user.userCode;
  });

  const navigate = useNavigate();
  return (
    <div className={styles.navbody}>
      <nav className={styles.body}>
        <HomeIcon
        // style={curLocation === '/' ? {fill : 'black', color : 'white'} : ""}
          className={styles.icon}
          onClick={() => {
            navigate("/");
          }}
        />
        <ChatBubbleOvalLeftIcon
        // style={curLocation === '/chatlist' ? {fill : 'black', color : 'white'} : ""}
          className={styles.icon}
          onClick={() => {
            if (!userCode || userCode === 0) {
              alert("로그인이 필요한 서비스 입니다!");
              navigate("/login");
            } else {
              navigate("/chatlist");
            }
          }}
        />
        <div>
          <img
            className={styles.liveicon}
            onClick={() => {
              if (!userCode || userCode === 0) {
                alert("로그인이 필요한 서비스 입니다!");
                navigate("/login");
              } else {
                navigate("/live");
              }
            }}
            src={LiveIcon}
            alt="live"
          />
        </div>
        <PlusCircleIcon
          className={styles.icon}
          onClick={() => {
            navigate("/addproduct", {
              state: {
                userId: 3,
              },
            });
          }}
        />
        <UserCircleIcon
        // style={curLocation === '/userInfo' ? {fill : 'black', color : 'white'} : ""}
          className={"styles.icons" + (curLocation === 'userinfo' ? ' styles.black' : "" )}
          onClick={() => {
            // if (!userCode || userCode === 0) {
            //   alert("로그인이 필요한 서비스 입니다!");
            //   navigate("/login");
            // } else {
            navigate(`/userinfo/${userCode}`);
            // }
          }}
        />
      </nav>
      <div className={styles.company}>
        줌고(zumgo) | 사업자 등록번호 :344-47-01049 한선영 대표 외 ISF5
      </div>
    </div>
  );
}
