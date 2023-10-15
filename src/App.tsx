import { RouterProvider } from "react-router-dom"
import router from "./routes"

import GlobalCSS from "./styles/globals"
import {store} from './store/store'
import { Provider } from "react-redux"

export default function App() {
  return (
    <Provider store={store}>
      <GlobalCSS />
      <RouterProvider router={router}/>
    </Provider>
  )
}