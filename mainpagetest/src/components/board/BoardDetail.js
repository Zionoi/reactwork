import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";


// npm install react-slick slick-carousel 
// 인설트 해야함

// css파일에 아래 두줄 추가하기
//@import "~slick-carousel/slick/slick.css";
//@import "~slick-carousel/slick/slick-theme.css";

function BoardDetail() {
  const { bNum } = useParams();  // URL 파라미터에서 bnum을 가져옵니다.
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    axios.get('/board/detail', { params: { bNum } })  // bnum을 올바르게 전달
      .then((response) => {
        console.log("Fetched detail:", response.data);
        setDetail(response.data);
      })
      .catch((error) => {
        console.log("캐치부분bnum : ", bNum);
        console.error("Error fetching detail:", error);
        alert("상세 정보를 가져오는 중 오류가 발생했습니다.");
      });
  }, [bNum]);  // bnum이 변경될 때마다 이펙트가 재실행되도록 의존성 배열에 추가

  if (!detail) {
    return <div>Loading...</div>;  // 데이터를 가져오는 중일 때 표시되는 로딩 메시지
  }

  // 슬라이더 설정
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <h1>{bNum}</h1>
      <h2>{detail.btitle}</h2>
      <Slider {...sliderSettings}>
        {detail.imgPath.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={`Image ${index + 1}`}
              style={{ maxWidth: "500px", maxHeight: "500px", objectFit: "cover" }}
            />
          </div>
        ))}
      </Slider>
      <p>{detail.bcontent}</p>
      <p>{detail.bNum}</p>
    </div>
  );
}

export default BoardDetail;
