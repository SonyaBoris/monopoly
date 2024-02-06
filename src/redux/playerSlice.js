import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: [
    {
      id: 1,
      name: 'Игрок 1',
      balance: 15000000,
      active: true,
      transaction: '',
    },
  ]
}

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    addUser: (state) => {
      state.users[state.users.length] = { id: state.users.length + 1, name: `Игрок ${state.users.length + 1}`, balance: 15000000, active: false }
    },

    nextUser: (state) => {
      if (state.users.length === 2) {
        if (state.users[0].active === true) {
          state.users[1].active = true
          state.users[0].active = false
        } else if (state.users[1].active === true) {
          state.users[0].active = true
          state.users[1].active = false
        }
      } else if (state.users.length === 3) {
        if (state.users[0].active === true) {
          state.users[1].active = true
          state.users[0].active = false
        } else if (state.users[1].active === true) {
          state.users[2].active = true
          state.users[1].active = false
        }
        else if (state.users[2].active === true) {
          state.users[0].active = true
          state.users[2].active = false
        }
      }
      else if (state.users.length === 4) {
        if (state.users[0].active === true) {
          state.users[1].active = true
          state.users[0].active = false
        } else if (state.users[1].active === true) {
          state.users[2].active = true
          state.users[1].active = false
        }
        else if (state.users[2].active === true) {
          state.users[3].active = true
          state.users[2].active = false
        }
        else if (state.users[3].active === true) {
          state.users[0].active = true
          state.users[3].active = false
        }
      }
    },
    addBalance1000: (state) => {
      state.users.filter(function (val) {
        return val.active == true;
      })[0].balance += 1000,

        state.users.filter(function (val) {
          return val.active == true;
        })[0].transaction = "Получил 1 000"
    },
    getBalance1000: (state) => {
      state.users.filter(function (val) {
        return val.active == true;
      })[0].balance -= 100000,
        state.users.filter(function (val) {
          return val.active == true;
        })[0].transaction = "Заплатил 100 000"
    },
    addBalance10000: (state) => {
      state.users.filter(function (val) {
        return val.active == true;
      })[0].balance += 10000,
        state.users.filter(function (val) {
          return val.active == true;
        })[0].transaction = "Получил 10 000"
    },
    getBalance10000: (state) => {
      state.users.filter(function (val) {
        return val.active == true;
      })[0].balance -= 5000000,
        state.users.filter(function (val) {
          return val.active == true;
        })[0].transaction = "Заплатил 5 000 000"
    },
    addBalance400000: (state) => {
      state.users.filter(function (val) {
        return val.active == true;
      })[0].balance += 400000,
        state.users.filter(function (val) {
          return val.active == true;
        })[0].transaction = "Получил 400 000"
    },
    getBalance400000: (state) => {
      state.users.filter(function (val) {
        return val.active == true;
      })[0].balance -= 10000000,
        state.users.filter(function (val) {
          return val.active == true;
        })[0].transaction = "Заплатил 10 000 000"
    },

   
  },
})


export const { nextUser, addUser, addBalance1000, getBalance1000, addBalance10000, getBalance10000, addBalance400000, getBalance400000 } = playerSlice.actions

export default playerSlice.reducer