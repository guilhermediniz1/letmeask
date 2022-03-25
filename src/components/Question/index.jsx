import { Container, Footer, UserInfo } from "./styles";

export function Question({content, author, isHighlighted, isAnswered, children}){
    return (
        <Container className={`question ${isHighlighted && !isAnswered ? 'highlighted' : ''} ${isAnswered ? 'answered' : ''}`}>
            <p>{content}</p>
            <Footer>
                <UserInfo>
                    <img src={author.avatar} alt={author.name} />
                    <span>{author.name}</span>
                </UserInfo>
                <div>{children}</div>
            </Footer>
        </Container>
    );
}