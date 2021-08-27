# React TalkBot

[![npm](https://img.shields.io/npm/v/react-talkbot.svg?style=flat-square)](https://www.npmjs.com/package/jasmine-node)

Convey your message to your users through displaying a beautiful animation. Visit the repo [here](https://github.com/Satyam1203/react-talkbot).

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

## API and Configuration

| Property        | Type               | Default               | Description           |
| --------------- | ------------------ | --------------------- | --------------------- |
| messages        | Array              | some messages         | An array of objects where an object has two properties: <br />`sent` - Boolean(true when message is shown on right side as if one sent it) <br /> `msg` - String(text which would be displayed) |
| senderAvatar    | Text(any emoticon) | 🧑🏻                    | An emoticon to display as sender profile|
| receiverAvatar  | Text(any emoticon) | 👨🏻‍💻                    | An emoticon to display as receiver profile|
| containerStyle  | Object             |                       | These styles would be applied to the container/screen on the back-side|
| msgWrapperStyle | Object             |                       | These styles would be applied to single message `div` on which text is displayed|
| sentMsgWrapperStyle | Object             |                       | These styles would be applied to message `div` displayed on sent end|
| receivedMsgWrapperStyle | Object             |                       | These styles would be applied to message `div` displayed on received end|

