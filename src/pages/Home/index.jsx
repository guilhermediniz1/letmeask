import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";

import illustrationImg from "../../assets/images/illustration.svg";
import logoImg from "../../assets/images/logo.svg";
import googleImg from "../../assets/images/google-icon.svg";

import { Button } from "../../components/Button";

import { database } from "../../services/firebase";

import {
  Container,
  Form,
  LeftContent,
  Main,
  MainContent,
  Separator,
} from "./styles";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Home() {
  const navigate = useNavigate();
  const [roomCode, setRoomCode] = useState("");
  const { user, signInWithGoogle } = useAuth();

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }
    navigate("/rooms/new");
  }

  async function handleJoinRoom(event) {
    event.preventDefault();

    if (roomCode.trim() == "") {
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      toast("Sala não existente. Digite um código válido!");
      return;
    }

    if (roomRef.val().endedAt) {
      toast("Esta sala já foi encerrada.");
      return;
    }

    navigate(`/rooms/${roomCode}`);
  }

  return (
    <Container>
      <LeftContent>
        <img src={illustrationImg} alt="Ilustração perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas de sua audiência em tempo real!</p>
      </LeftContent>
      <Main>
        <MainContent>
          <img src={logoImg} alt="Letmeask" />
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleImg} alt="Logo Google" />
            Crie sua sala com o Google
          </button>
          <Separator className="separator">ou entre em uma sala</Separator>
          <Form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite aqui o código da sala"
              onChange={(event) => setRoomCode(event.target.value)}
            />
            <Button type="submit">Entrar na sala</Button>
          </Form>
        </MainContent>
      </Main>
      <ToastContainer></ToastContainer>
    </Container>
  );
}
