import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Message} from './Message';

const Container = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction:column;
    // background-image: linear-gradient(to top, #fdcbf1 0%, #fdcbf1 1%, #e6dee9 100%);
    // background-image: linear-gradient( -45deg, #a8edea 0%, #fed6e3 100%);
    background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    width:400px;
    min-width:300px;
    margin: auto;
    padding: 0.5rem;
    height: 600px;
    border: 2px solid green;
    border-radius: 50px;
`;

const messages = [
    "Where can I visulaize sorting algorithms?",
    "I'm also looking for resources",
    "Hey! I just found one.",
    "Share it with me",
    "Visit https://sorting-visualization.now.sh",
    "Thanks dude!"
]

function TalkBox() {
    const [showMessage, setMoreMessage] = useState(0);

    useEffect(()=>{
        if(showMessage===messages.length) return;
        setTimeout(()=>{
            setMoreMessage((lastVal) => lastVal+1);
        },1000);
    });
    return (
        <Container>
            {
                messages.map((message, i) => {
                    if(i<showMessage) return <Message key={i} user={i%2}>{message}</Message>
                    return null;
                })
            }
        </Container>
    )
}

export default TalkBox
