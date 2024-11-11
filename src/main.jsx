import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/index.jsx'
import About from './pages/About/index.jsx'
import Menu from './pages/Menu/index.jsx'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import  {store, persistor } from './store/store.js'
import Cart from './pages/Cart/index.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: (
          <Home />
        )
      },
      {
        path: '/about',
        element:(
          <About />
        )
      },
      {
        path: '/menu',
        element: (
          <Menu />
        )
      },
      {
        path:'/cart',
        element: <Cart />
      },
           
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <RouterProvider router={router} />
  </PersistGate>
  </Provider>
)
