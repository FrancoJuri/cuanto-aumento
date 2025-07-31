import { Routes, Route, Navigate } from 'react-router';
import { HomePage, ProductPage, CategoryPage } from '../pages';

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/producto/:id' element={<ProductPage />} />
            <Route path='/categoria/:categoria' element={<CategoryPage />} />

            <Route path='/*' element={<Navigate to='/' />} />
        </Routes>
    )
}

export default AppRouter;