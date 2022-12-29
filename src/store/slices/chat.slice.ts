import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GetChatMessagesQuery } from 'api/generated'
import { SlicesNames } from 'store/slices-names'
import { objectEntries } from 'utils/object-entries'

type ChatSliceState = {
  messages: GetChatMessagesQuery['chatMessages'] // список всех загруженных сообщений
  page: number // номер страницы, который сигнализирует сколько пактов сообщений было загружено
  totalMessagesCount: number // количество всех сообщений в чате за всё время
} & (
  | {
      chatId: null // id чата
      myName: null // моя имя, т е залогиненного пользователя
      companionName: null // имя собеседника, с кем общается залогиненный пользователь
    }
  | {
      chatId: string
      myName: string
      companionName: string
    }
)

export type SetChatInfoPayload = {
  totalMessagesCount: ChatSliceState['totalMessagesCount']
  myName: ChatSliceState['myName']
  companionName: ChatSliceState['companionName']
}

const initialState: ChatSliceState = {
  chatId: null,
  messages: [],
  page: 1,
  totalMessagesCount: 0,
  myName: null,
  companionName: null,
}

export const chatSlice = createSlice({
  name: SlicesNames.Chat,
  initialState,
  reducers: {
    addMessagesToStart(state: ChatSliceState, action: PayloadAction<ChatSliceState['messages']>) {
      state.messages = [...state.messages, ...action.payload]
    },
    addMessagesToEnd(state: ChatSliceState, action: PayloadAction<ChatSliceState['messages']>) {
      state.messages = [...action.payload, ...state.messages]
    },
    increasePage(state: ChatSliceState) {
      state.page += 1
    },
    reset(state: ChatSliceState) {
      objectEntries(initialState).forEach(([key, value]) => {
        state[key] = value as never
      })
    },
    setChatInfo(state: ChatSliceState, action: PayloadAction<SetChatInfoPayload>) {
      state.totalMessagesCount = action.payload.totalMessagesCount
      state.myName = action.payload.myName
      state.companionName = action.payload.companionName
    },
  },
})
