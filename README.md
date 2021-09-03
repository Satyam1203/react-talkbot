# React TalkBot

[![npm](https://img.shields.io/npm/v/react-talkbot.svg?style=flat-square)](https://www.npmjs.com/package/jasmine-node)

Convey your message to your users through displaying a beautiful animation. Visit the repo [here](https://github.com/Satyam1203/react-talkbot).

<img src="https://raw.githubusercontent.com/Satyam1203/react-talkbot/master/talkbot.gif?token=AJQRUV5JIJ625I7UMISZPZLBGH5XM" alt="Working Demo" />

## Installation

```
$ npm i react-talkbot
```

## Usage

```
    import { TalkBox } from 'react-talkbot';

    const msgDemo = [
        {
            sent: false,
            msg: "Hi, How can I build an impressive resume?",
        },
        {
            sent: true,
            msg: "Hello, Do you have a good Github Profile?",
        },
        {
            sent: false,
            msg: "Yeah, I do have one. All of my projects are on Github.",
        },
        {
            sent: true,
            msg:
            "Cool, You can head over to <a href='https://resume-github.vercel.app' style='color: #74c'>https://resume-github.vercel.app</a> and generate a resume with your username.",
        },
        {
            sent: false,
            msg: "Ohh, wow! I'll check it out.",
        },
        {
            sent: true,
            msg: "and the best part is you can customize it too.",
        },
        {
            sent: false,
            msg: "Great, Thanks buddy :)",
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
| messages        | Array              | some messages         | An array of objects where an object has two properties: <br />`sent` - Boolean(true when message is shown on right side as if one sent it) <br /> `msg` - String(text which would be displayed, could also contain HTML tags, those will be parsed.) |
| senderAvatar    | Text(any emoticon) | 🧑🏻                    | An emoticon to display as sender profile|
| receiverAvatar  | Text(any emoticon) | 👨🏻‍💻                    | An emoticon to display as receiver profile|
| containerStyle  | Object             |                       | These styles would be applied to the container/screen on the back-side|
| msgWrapperStyle | Object             |                       | These styles would be applied to single message `div` on which text is displayed|
| sentMsgWrapperStyle | Object             |                       | These styles would be applied to message `div` displayed on sent end|
| receivedMsgWrapperStyle | Object             |                       | These styles would be applied to message `div` displayed on received end|

