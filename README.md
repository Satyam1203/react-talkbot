# React TalkBot

Convey your message to your users through displaying a beautiful animation

## Installation

```
$ npm i react-talkbot
```

## Usage

```
    import { TalkBox } from 'react-talkbot';

    const messages = [
        {
            sent: true,
            msg: "Where can I visulaize sorting algorithms?",
        },
        {
            sent: false,
            msg: "I'm also looking for resources",
        },
        {
            sent: true,
            msg: "Hey! I just found one.",
        },
        {
            sent: false,
            msg: "Share it with me",
        },
        {
            sent: true,
            msg: "Visit https://sorting-visualization.now.sh",
        },
        {
            sent: false,
            msg: "Thanks dude!",
        },
        {
            sent: false,
            msg: "See you soon :)",
        },
    ];

    const App = () => {
        return (
            <div>
                // some code here
                <TalkBox
                    messages={messages}
                    senderAvatar={"🧑🏻"}
                    receiverAvatar={"👨🏻‍💻"}
                    containerStyle={{background: "antiquewhite", borderColor: "gainsboro"}}
                    msgWrapperStyle={{borderRadius: "24px"}}
                />
            </div>
        )
    }
```
