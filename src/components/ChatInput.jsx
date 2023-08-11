import React, { useState } from 'react';

const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];
const emojis = ['😀', '😂', '😍', '🤔', '😎', '🤗', '🤫', '🥺', '🤢', '🤮', '✅', '💐','😁','🤷‍♀️','🤩',
                '😏','😌','😛','🤐','🥱','🤯','😶','😫','😡','🤕','😴','🤑','😵','🐷','😷','🤠','🤖',
];

function ChatInput() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [emojiShow, setEmojiShow] = useState(false);

  const handleSend = () => {
    if (input.trim() !== '') {
      const newMessage = {
        text: input,
        user: user_list[Math.floor(Math.random() * user_list.length)],
        likes: 0,
         time: getCurrentTime(),
      };
      setMessages([...messages, newMessage]);
      setInput('');
    }
  };

  const handleLike = (index) => {
    const newMessages = [...messages];
    newMessages[index].likes += 1;
    setMessages(newMessages);
  };

  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
};

  const addEmoji = (emoji) => {
    setInput(input + emoji);
    setEmojiShow(false);
  };

  return (
    <>
    <div className="chat-box">
    <h1 className='heading'>React Chat App</h1>
      <div className="chatMessages">
        {messages.map((message, index) => (
          <div key={index} className="chat-message">
            <span className="username">{message.user}: </span>
            <span>{message.text}</span>
            <span className="time">{message.time}</span>
            <button className="like-button" onClick={() => handleLike(index)}>
              👍 {message.likes}
            </button>
          </div>
        ))}
      </div>
      <div className="input-box">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={handleSend}>Send</button>
        <button onClick={() => setEmojiShow(!emojiShow)}>
          {emojiShow ? 'Close' : 'Emojis'}
        </button>
      </div>
      {emojiShow && (
        <div className="emoji">
          {emojis.map((emoji, index) => (
            <span key={index} onClick={() => addEmoji(emoji)}>
              {emoji}
            </span>
          ))}
        </div>
      )}
    </div>
    </>
  );
}

export default ChatInput;
