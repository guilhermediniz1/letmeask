import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { database } from "../../services/firebase";

import { Button } from "../../components/Button";
import { Container, Form, LeftContent, Main, MainContent } from "./styles";

import illustrationImg from "../../assets/images/illustration.svg";
import logoImg from "../../assets/images/logo.svg";
import { toast, ToastContainer } from "react-toastify";

export function NewRoom() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [newRoom, setNewRoom] = useState("");

  async function handleCreateRoom(event) {
    event.preventDefault();
    if (newRoom.trim() == "") {
      toast("Insira um nome válido!");
      return;
    }

    const roomRef = database.ref("rooms");

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    });
    navigate(`/admin/rooms/${firebaseRoom.key}`);
    toast("Sala criada com sucesso!");
  }

  return (
    <Container id="page-auth">
      <LeftContent>
        <img src={illustrationImg} alt="Ilustração perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>
          Tire as dúvidas de seus <i>viewers</i> em tempo real!
        </p>
      </LeftContent>
      <Main>
        <MainContent className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <h2>Criar uma nova sala</h2>
          <Form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Nome da sala"
              onChange={(event) => setNewRoom(event.target.value)}
              value={newRoom}
            />
            <Button type="submit">Criar Sala</Button>
          </Form>
          <p>
            Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link>
          </p>
        </MainContent>
      </Main>
      <ToastContainer></ToastContainer>
    </Container>
  );
}
