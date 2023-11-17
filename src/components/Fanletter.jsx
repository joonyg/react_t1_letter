import React from 'react'
import styled from 'styled-components'
import Normalimg from '../assets/imgs/normalimage.jpg'
import { useNavigate } from 'react-router-dom'

const FanContainer = styled.li`
  background-color: black;
  margin: 3px;
  color: white;
  list-style: none;
  cursor: pointer;
  border-radius: 5px;
  flex-direction: column;
`
const AvatarImg = styled.img`
  width: 50px;
  height: 50px;
`
const FanFigure = styled.figure`
  margin-left: 10px;
  border-radius: 50%;
`
const FanletterBox = styled.div`
  width: 150px;
  flex-direction: column;
  justify-content: center;
  display: flex;
  font-weight: bold;
  span {
    color: blue;
  }
  p {
    background-color: gray;
    padding: 10px;
    overflow: hidden;
    white-space: nowrap;
    width: 350px;
    height: 40px;
    text-overflow: ellipsis;
  }
`
function Fanletter({
  LetterWriteTo,
  LetterID,
  LetterTime,
  LetterContent,
  LetterNickname,
}) {
  const navigate = useNavigate()
  return (
    <FanContainer
      onClick={() => {
        navigate(`/${LetterWriteTo}/${LetterID}`, {
          state: {
            id: LetterID,
            nickname: LetterNickname,
            creatAT: LetterTime,
            content: LetterContent,
            writeTo: LetterWriteTo,
          },
        })
      }}
    >
      <section>
        <FanFigure>
          <AvatarImg src={Normalimg} />
        </FanFigure>
        <FanletterBox key={LetterID}>
          <span>{LetterNickname}</span>
          <time>{LetterTime}</time>
          <p>{LetterContent}</p>
        </FanletterBox>
      </section>
    </FanContainer>
  )
}

export default Fanletter
