import { Outlet, createBrowserRouter } from 'react-router-dom';
import App from './App'
import CreateProductPage from './pages/create-product-page';
import ListProductPage from './pages/list-product-page';
import MainLayout from './layouts/main-layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout><Outlet /></MainLayout>,
    children: [
      {
        path: '/',
        element: <ListProductPage />,
      },
      {
        path: 'product/create',
        element: <CreateProductPage />,
      }
    ]
  },

]);


export default router;