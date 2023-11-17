import React, { useState, useContext } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import styled from 'styled-components'
import Normalimg from '../assets/imgs/normalimage.jpg'
import { /*useLocation*/ useNavigate, useParams } from 'react-router-dom'
import { CaptainContext } from '../components/captaincontext'
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
const UpdateText = styled.textarea`
  background-color: gray;
  height: 275px;
  padding: 16px;
  line-height: 48px;
  margin: 24px;
  border-radius: 10px;
  font-size: 44px;
  word-break: break-all;
  overflow: auto;
  width: 722px;
  color: white;
`

function Keria() {
  const { Letter, setLetter } = useContext(CaptainContext)
  const navigate = useNavigate()
  const { id } = useParams()

  const selectedLetters = Letter.filter(letter => letter.id === id)

  const [isEdit, setIsEdit] = useState(false)

  const deleteBTN = () => {
    const pagedel = Letter.filter(letter => letter.id != id)
    setLetter(pagedel)
    navigate(`/`)
  }
  const updateBTN = () => {
    setIsEdit(!isEdit)
  }
  const setupdateBTN = () => {
    setIsEdit(false)
  }
  const UpadateContentChange = event => {
    const updatedContent = event.target.value

    const updatedLetters = Letter.map(letter =>
      letter.id === id ? { ...letter, content: updatedContent } : letter
    )

    setLetter(updatedLetters)
  }
  return (
    <div>
      <Header />
      {selectedLetters.map(selectedLetter => (
        <InfanletterContainer>
          <GoHomeBt onClick={() => navigate(`/`)}>홈으로</GoHomeBt>
          <Fanletterdiv key={selectedLetter.id}>
            <div>
              <header>
                <figure>
                  <AvatarImg src={Normalimg}></AvatarImg>
                </figure>
                <span>{selectedLetter.nickname}</span>
                <time>{selectedLetter.creatAT}</time>
              </header>
              <WirteTo>To:{selectedLetter.writeTo}</WirteTo>
              {isEdit ? (
                <>
                  <UpdateText
                    maxLength="100"
                    value={selectedLetter.content}
                    onChange={UpadateContentChange}
                  />
                </>
              ) : (
                <>
                  <ContentBox>{selectedLetter.content}</ContentBox>
                </>
              )}
            </div>
            <section>
              {isEdit ? (
                <>
                  <button onClick={setupdateBTN}>수정완료</button>
                </>
              ) : (
                <>
                  <button onClick={updateBTN}>수정</button>
                  <button onClick={deleteBTN}>삭제</button>
                </>
              )}
            </section>
          </Fanletterdiv>
        </InfanletterContainer>
      ))}

      <Footer />
    </div>
  )
}

export default Keria
