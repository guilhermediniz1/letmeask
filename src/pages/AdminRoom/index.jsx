import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useRoom } from "../../hooks/useRoom";
import { database } from "../../services/firebase";

import { Question } from "../../components/Question";
import { Header } from "../../components/Header";

import {
  Container,
  Content,
  RoomTitle,
  QuestionList,
  EmptyAdvice,
} from "./styles";

import deleteImg from "../../assets/images/delete.svg";
import checkImg from "../../assets/images/check.svg";
import answerImg from "../../assets/images/answer.svg";

export function AdminRoom() {
  const { user } = useAuth();
  const params = useParams();
  const roomId = params.id;
  const { title, questions } = useRoom(roomId);

  async function handleDeleteQuestion(questionId) {
    if (window.confirm("Tem certeza que deseja excluir essa pergunta?")) {
      const questionRef = await database
        .ref(`rooms/${roomId}/questions/${questionId}`)
        .remove();
    }
  }

  async function handleCheckQuestionAsAnswered(questionId) {
    const questionRef = await database
      .ref(`rooms/${roomId}/questions/${questionId}`)
      .update({
        isAnswered: true,
      });
  }

  async function handleHighlightedQuestion(questionId) {
    const questionRef = await database
      .ref(`rooms/${roomId}/questions/${questionId}`)
      .update({
        isHighlighted: true,
      });
  }

  return (
    <Container>
      <Header isAdmin code={params.id}></Header>
      <Content>
        <RoomTitle>
          <h1>Sala {title}</h1>
          <span>{questions.length} pergunta(s)</span>
        </RoomTitle>
        <QuestionList>
          {questions.map((question) => {
            return (
              <Question
                key={question.id}
                content={question.content}
                author={question.author}
                isHighlighted={question.isHighlighted}
                isAnswered={question.isAnswered}
              >
                {!question.isAnswered && (
                  <>
                    <button
                      type="button"
                      onClick={() => handleCheckQuestionAsAnswered(question.id)}
                    >
                      <img
                        src={checkImg}
                        alt="Marcar pergunta como respondida"
                      />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleHighlightedQuestion(question.id)}
                    >
                      <img src={answerImg} alt="Dar destaque à pergunta" />
                    </button>
                  </>
                )}
                <button
                  type="button"
                  onClick={() => handleDeleteQuestion(question.id)}
                >
                  <img src={deleteImg} alt="Remover pergunta" />
                </button>
              </Question>
            );
          })}
          {questions.length < 1 && (
            <EmptyAdvice>Ainda não há perguntas nesta sala.</EmptyAdvice>
          )}
        </QuestionList>
      </Content>
    </Container>
  );
}
