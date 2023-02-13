import React, { useEffect, useState } from "react";
import axios from "axios";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import styles from "./BuyList.module.css";
import { useNavigate } from "react-router";
import BuyProductItem from "./BuyProductItem";
import { useSelector } from 'react-redux'

export default function BuyList() {
  const navigate = useNavigate();
  const [products, setProducts] = useState();

  const userId = useSelector((state) => { return state.user.userCode})

  const clickProduct = (id) => {
    navigate(`/detail/${id}`);
  };

  useEffect(() => {
    axios
      .get(`https://i8c110.p.ssafy.io/api/v1/products/buyList/${userId}`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.body}>
      <div className={styles.nav}>
        <ChevronLeftIcon
          className="w-6 h-6 text-black-100"
          onClick={() => {
            navigate(`/userInfo/${userId}`);
          }}
        />
        <div className={styles.title}>구매 목록</div>
      </div>
      <div className={styles.scrollarea}>
        {products?.map((product) => {
          return (
            <BuyProductItem
              key={product.productId}
              product={product}
              clickProduct={clickProduct}
            />
          );
        })}
      </div>
    </div>
  );
}
