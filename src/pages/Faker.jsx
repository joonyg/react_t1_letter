import React, { useState } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import styled from 'styled-components'
import Normalimg from '../assets/imgs/normalimage.jpg'
import { useLocation, useNavigate } from 'react-router-dom'

const AvatarImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`
const InfanletterContainer = styled.div`
  height: 80vh;
  background-color: gainsboro;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`
const Fanletterdiv = styled.div`
  background: black;
  width: 800px;
  height: 600px;
  color: white;
  padding: 15px;
  header {
    display: flex;
    align-items: center;
  }
  figure {
    margin-right: 20px;
    border-radius: 50%;
    width: 80px;
    height: 80px;
  }
  span {
    text-align: left;
    margin: 20px;
    font-size: 40px;
  }
  button {
    margin: 15px;
    width: 80px;
    height: 50px;
    color: white;
    background-color: gray;
    cursor: pointer;
    &:hover {
      background-color: red;
    }
  }
  section {
    display: flex;
    justify-content: flex-end;
  }
`
const WirteTo = styled.p`
  font-size: 24px;
  padding-top: 10px;
  padding-left: 40px;
  font-weight: 500;
`
const ContentBox = styled.p`
  background-color: gray;
  height: 275px;
  padding: 16px;
  line-height: 48px;
  margin: 24px;
  border-radius: 10px;
  font-size: 44px;
  word-break: break-all;
  overflow: auto;
`
const GoHomeBt = styled.button`
  position: absolute;
  width: 100px;
  height: 50px;
  top: 900px;
  left: 150px;
  color: white;
  background-color: black;
  box-shadow: black 7px 5px 5px 5px;
  cursor: pointer;
`
function Faker() {
  const navigate = useNavigate()
  const location = useLocation()
  const { Letter } = location.state
  const [card, SetCard] = useState([Letter])
  console.log(card)
  const deleteBt = id => {
    const delBtn = card.filter(item => item.id !== Letter.LetterID)
    SetCard(delBtn)
    navigate('/')
  }

  return (
    <div>
      <Header />
      <InfanletterContainer>
        <GoHomeBt onClick={() => navigate(`/`)}>홈으로</GoHomeBt>
        <Fanletterdiv key={Letter.LetterID}>
          <div>
            <header>
              <figure>
                <AvatarImg src={Normalimg}></AvatarImg>
              </figure>
              <span>{Letter.LetterNickname}</span>
              <time>{Letter.LetterTime}</time>
            </header>
            <WirteTo>To:{Letter.LetterWriteTo}</WirteTo>
            <ContentBox>{Letter.LetterContent}</ContentBox>
          </div>
          <section>
            <button>수정완료</button>

            <button>수정</button>

            <button onClick={deleteBt}>삭제</button>
          </section>
        </Fanletterdiv>
      </InfanletterContainer>
      <Footer />
    </div>
  )
}

export default Faker
