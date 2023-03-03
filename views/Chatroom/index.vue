<script setup>
import { ref, computed } from "vue";
import { useI18n } from 'vue-i18n'
import data from "./dummyData/data";

const { t } = useI18n()
const userId = ref('2');

const convertedMessage = computed(() => {
  return data.map(message => {
    const date = new Date(message.time);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const timeString = `${hours}:${minutes}`;
    return { ...message, timeString };
  })
})

</script>

<template>
  <div class="chatroom">
    <div class="chatroom-name">
      <p>{{ t("chatroom.publicChatroom") }}</p>
    </div>
    <div class="chatroom-content">
      <div class="chatroom-content__message-list">
        <div
          v-for="message in convertedMessage"
          :key="message.id"
          class="chatroom-content__message-item"
        >
          <div
            :class="{ 'chatroom-content__message-item-user': message.sender === userId, 'chatroom-content__message-item-others': message.sender !== userId }"
          >
            <div class="chatroom-content__message-item-content">
              {{ message.message }}
            </div>
            <div class="chatroom-content__message-item-info">
              <span class="chatroom-content__message-item-time">{{ message.isRead ? '已讀' : '' }}</span>
              <span class="chatroom-content__message-item-time">{{ message.timeString }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="chatroom-input-box">
      輸入框
    </div>
  </div>
</template>

<style lang="scss">
.chatroom {
  width: inherit;
  height: inherit;
  display: flex;
  flex-direction: column;

  &-name {
    font-size: 2rem;
    height: 10%;
    border-bottom: 1px solid #464749;
    display: flex;
    align-items: center;
    padding: 1em;
    font-weight: 700;
  }

  &-content {
    font-size: 1rem;
    padding: 2em;
    flex-grow: 1;
    border-bottom: 1px solid #464749;

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

      &-user,
      &-others {
        font-size: 1.2rem;
        display: flex;
        gap: 0.6em;
        align-items: flex-end;
      }

      &-user {
        flex-direction: row-reverse;
      }

      &-time {
        color: #555;
      }

      &-user &-content {
        background-color: #fea634;
        color: #555;
      }

      &-others &-content {
        background-color: #555;

      }

      &-content {
        font-size: 1.6rem;
        border-radius: 6px;
        padding: 0.6em 0.8em;
      }

      &-info {
        display: flex;
        flex-direction: column;
      }
    }
  }

  &-input-box {
    font-size: 1rem;
    height: 20%;
  }
}
</style>
