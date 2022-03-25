import copyImg from '../../assets/images/copy.svg'

import { CodeButton } from './syles'

export function RoomCode(props){

    function copyRoomCodeToClipboard(){
        navigator.clipboard.writeText(props.code)
    }
    return(
        <CodeButton className="room-code" onClick={copyRoomCodeToClipboard}>
            <div>
                <img src={copyImg} alt="Copy room code" />
            </div>
            <span>Sala {props.code}</span>
        </CodeButton>
    )
}