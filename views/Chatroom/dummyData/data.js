const messageData = [
  {
    sender: "1",
    receiver: "2",
    chatroomID: "777",
    messageContent: "hello",
    isRead: true,
    sendTime: 1677851909423,
    avatar: "蕃薯",
  },
  {
    sender: "1",
    receiver: "2",
    chatroomID: "777",
    messageContent: "今天過得好嗎",
    isRead: true,
    sendTime: 1677851909423,
    avatar: "蕃薯",
  },
  {
    sender: "2",
    receiver: "1",
    chatroomID: "777",
    messageContent: "還不錯",
    isRead: false,
    sendTime: 1677851909423,
  },
  {
    sender: "1",
    receiver: "2",
    chatroomID: "777",
    messageContent: "那就好！",
    isRead: false,
    sendTime: 1677851909423,
    avatar: "蕃薯",
  },
];

const chatroomData = {
  id: 777,
  name: "公共聊天室",
  members: [1, 2],
};

const userInfo = {
  id: "2",
  name: "Willy",
  avatar: "",
  status: false,
  role: "user",
  friendList: [1],
};

const userList = [
  {
    id: 1,
    name: "Stanley",
    avatar: "",
    status: false,
    role: "user",
    friendList: [2],
  },
  {
    id: 2,
    name: "Willy",
    avatar: "",
    status: false,
    role: "user",
    friendList: [1],
  },
];

export { messageData, chatroomData, userInfo };
