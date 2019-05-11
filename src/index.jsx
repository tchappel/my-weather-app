import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import App from './App'
import {applyMiddleware, createStore} from "redux"
import thunk from "redux-thunk"
import {rootReducer} from "./store"
import "antd/dist/antd.css"

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'))