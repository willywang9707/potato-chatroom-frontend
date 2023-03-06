<script>
  export default {
    name: 'ChatRoom',
    inheritAttrs: false,
    customOptions: {},
  }
</script>

<script setup>
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import moment from "moment";
import { messageData as data, chatroomData, userInfo as userData } from "./dummyData/data";

const messageInfo = ref(data);
const { t } = useI18n();

const userInfo = ref(userData)

const processedMessage = computed(() => {
  return messageInfo.value.map((message, i, arr) => {
    if (
      message.sender !== arr[i - 1]?.sender &&
      message.sender !== userInfo.value.id
    ) {
      message.isShowAvatar = true;
    } else {
      message.isShowAvatar = false;
    }

    const timeString = moment(message.sendTime).format("LT");
    return { ...message, timeString };
  });
});

const handleSendMessage = (event) => {
  event.preventDefault();

  if (!messageInput.value?.trim() || !messageInput.value) {
    return;
  }

  const requestData = {
    sender: userInfo.value.id,
    receiver: "1",
    chatroomID: chatroomData.id,
    messageContent: messageInput.value,
    isRead: false,
    sendTime: Date.now(),
    avatar: "蕃薯",
  };

  messageInfo.value.push(requestData);
  messageInput.value = "";
};

const messageInput = ref(null);
</script>

<template>
  <div class="chatroom">
    <div class="chatroom-name">
      <p>{{ chatroomData.name }}</p>
    </div>

    <div class="chatroom-content">
      <div class="chatroom-content__message-list">
        <div
          v-for="message in processedMessage"
          :key="message.id"
          class="chatroom-content__message-item"
        >
          <div
            :class="{
              'chatroom-content__message-item--user': message.sender === userInfo.id,
              'chatroom-content__message-item--others':
                message.sender !== userInfo.id,
            }"
          >
            <div
              :class="{
                'chatroom-content__avatar': message.isShowAvatar,
                'chatroom-content__avatar-space': !message.isShowAvatar,
              }"
            >
              <p v-if="message.isShowAvatar">
                {{ message.avatar.charAt(0) }}
              </p>
            </div>
            <div class="chatroom-content__message-content">
              {{ message.messageContent }}
            </div>
            <div class="chatroom-content__message-info">
              <span class="chatroom-content__message-info--read">{{
                message.isRead ? `${t('chatroom.read')}` : ""
              }}</span>
              <span class="chatroom-content__message-info--time">{{
                message.timeString
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="chatroom-input-box">
      <textarea
        id=""
        v-model="messageInput"
        name=""
        @keydown.enter="handleSendMessage"
      />
    </div>
  </div>
</template>

<style lang="scss">
.chatroom {
  width: inherit;
  height: inherit;
  display: flex;
  flex-direction: column;
  overflow: auto;


  &-name {
    font-size: 2.4rem;
    height: 10%;
    border-bottom: 1px solid #464749;
    display: flex;
    align-items: center;
    padding: calc((1em / 1.5));
    font-weight: 700;
  }

  &-content {
    font-size: 1.6rem;
    padding: 1em;
    height: 70%;
    border-bottom: 1px solid #464749;
    max-height: 70%;
    overflow: auto;

    &__message-list {
      gap: 8px;
      display: flex;
      flex-direction: column;
    }

    &__message-item {
      font-size: 1.2rem;
      width: auto;
      display: flex;
      flex-direction: column;
      gap: 0.5em;

      &--user,
      &--others {
        font-size: 1.2rem;
        display: flex;
        gap: 0.7em;
        align-items: flex-end;
      }

      &--user {
        flex-direction: row-reverse;
      }

      &-time {
        color: #555;
      }

      &--user &-content {
        background-color: #fea634;
        color: #555;
      }

      &--others &-content {
        background-color: #555;
      }

      &--others .chatroom-content__avatar {
        background: rgb(190, 126, 8);
        width: 2em;
        height: 2em;
        border-radius: 1em;
        display: flex;
        align-items: center;
        justify-content: center;
        align-self: flex-start;

        &-space {
          width: 2em;
        }
      }

      &-content {
        font-size: 1.6rem;
        border-radius: 6px;
        padding: 0.6em 0.8em;
      }

      &-info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }
    }
  }

  &-input-box {
    font-size: 1rem;
    height: 20%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    & textarea {
      width: 100%;
      height: calc(100%);
      padding: 1em;
      font-size: 1.6rem;
      outline: none;
      white-space: nowrap;
      resize: none;
      vertical-align: bottom;
    }
  }
}
</style>
