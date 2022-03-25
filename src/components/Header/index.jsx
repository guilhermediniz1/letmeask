import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { RoomCode } from "../RoomCode";
import { Button } from "../Button";

import logoImg from "../../assets/images/logo.svg";
import menuImg from "../../assets/images/menu.svg";

import { database } from "../../services/firebase";

import { HeaderComponent, HeaderContent, Menu } from "./styles";

import { toast } from "react-toastify";

export function Header({ isAdmin, code }) {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const navigate = useNavigate();

  async function handleEndRoom() {
    database.ref(`rooms/${code}`).update({
      endedAt: new Date(),
    });
    navigate("/");
    toast("Sala encerrada!");
  }

  return (
    <>
      <HeaderComponent>
        <HeaderContent>
          <img src={logoImg} alt="Letmeask" />
          <div>
            <RoomCode code={code} />
            {isAdmin ? (
              <Button isOutlined onClick={handleEndRoom}>
                Encerrar sala
              </Button>
            ) : (
              <></>
            )}
          </div>
          <img
            src={menuImg}
            alt="Menu"
            onClick={() =>
              setIsMenuVisible((prevState) => (prevState = !prevState))
            }
          />
        </HeaderContent>
      </HeaderComponent>
      {isMenuVisible && (
        <Menu>
          <RoomCode code={code} />
          <Button isOutlined onClick={handleEndRoom}>
            Encerrar sala
          </Button>
        </Menu>
      )}
    </>
  );
}
