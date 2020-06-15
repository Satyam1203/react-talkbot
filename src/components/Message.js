import React from 'react';
import styled from 'styled-components';

const MsgDiv = styled.div`
display: inline-block;
    width: 280px;
    padding: 14px;
    margin: 8px 16px;
    background-color: lightcoral;
    font-family: sans-serif;
    font-size: 1.2rem;
    border-radius: 10px;
`;


function Message({children, user}) {
    return (
        <>
            {
                user ? 
                <div><MsgDiv>{children}</MsgDiv><span style={{fontSize: '3rem'}} role="img" aria-label="avatar">😀</span></div> :
                <div><span style={{fontSize: '3rem'}} role="img" aria-label="avatar">🤓</span><MsgDiv style={{backgroundColor: 'lightgreen'}}>{children}</MsgDiv></div>
            }
        </>
    )
}

export {Message};
