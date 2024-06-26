import React, { useState, useEffect } from "react";
import styled from "styled-components";

/*
const SnsImgContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 70%;
    margin: 1rem auto;

    @media (max-width: 768px) {
        width: 80%; 
    }
`;
*/

const SnsImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 30px;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const SnsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SnsHeaderBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    border-radius: 30px;
    background-color: transparent;
    border: 1px solid black;
    padding: 8px 16px;
    color: black;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-left: 15px;
  }

  button:nth-child(3) {
    border: 1px solid #d28f8a;
  }

  button:hover {
    background-color: black;
    color: white;
  }

  button:nth-child(3):hover {
    background-color: #d28f8a;
  }
`;
const SnsImageWrapper = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 250px);
  grid-template-rows: repeat(2, 250px);
  grid-gap: 20px;
`;

const SnsImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SnsImageMoreBtn = styled.div`
  display: flex;
  justify-content: center;
  button {
    font-size: 15px;
    font-weight: bolder;
    color: white;
    background-color: black;
    border-radius: 10px;
    padding: 13px 63px;
    cursor: pointer;
    margin-top: 30px;
  }
`;

const MainSns = () => {
  const [snsImgs, setSnsImgs] = useState([
    "/images/mainshot_1.png",
    "/images/mainshot_2.png",
    "/images/mainshot_3.png",
    "/images/mainshot_4.png",
    "/images/mainshot_5.png",
    "/images/mainshot_6.png",
    "/images/mainshot_7.png",
    "/images/mainshot_8.png",
  ]);

  // useEffect(() => {
  //     fetch(
  //         "http://raw.githubusercontent.com/ines012/supermall-data/main/sampleImg1.json"
  //     )
  //         .then((response) => response.json())
  //         .then((data) => setSnsImgs(data));
  // }, []);

  const loadMoreImages = () => {
    // fetch(
    //   "http://raw.githubusercontent.com/ines012/supermall-data/main/sampleImg2.json"
    // )
    //   .then((response) => response.json())
    //   .then((data) => setSnsImgs((prevImgs) => [...prevImgs, ...data]));
    setSnsImgs((prevImgs) => [
      ...prevImgs,
      "/images/mainshot_9.png",
      "/images/mainshot_10.png",
      "/images/mainshot_11.png",
      "/images/mainshot_12.png",
      "/images/mainshot_13.png",
      "/images/mainshot_14.png",
      "/images/mainshot_15.png",
      "/images/mainshot_16.png",
    ]);
  };

  return (
    <SnsImgContainer>
      <SnsHeader>
        <h2>SUPERMALL STYLE in SNS</h2>
        <SnsHeaderBtn>
          <button>ALL</button>
          <button>SUPERMALL</button>
          <button>KIDS🐻</button>
        </SnsHeaderBtn>
      </SnsHeader>
      <div>
        <SnsImageWrapper>
          {/* {[...Array(parseInt(16))].map((n, index) => (
            <SnsImage
              key={index}
              src={`/images/mainshot_${index + 1}.png`}
              alt={`Image`}
            />
          ))} */}

          {snsImgs.map((imageData, i) => (
            <SnsImage key={i} src={imageData} alt={`Image ${i + 1}`} />
          ))}
        </SnsImageWrapper>
      </div>

      <SnsImageMoreBtn>
        <button onClick={loadMoreImages}>더보기</button>
      </SnsImageMoreBtn>
    </SnsImgContainer>
  );
};

export default MainSns;
