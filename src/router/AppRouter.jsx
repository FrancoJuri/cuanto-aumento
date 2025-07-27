import { Routes, Route, Navigate } from 'react-router';
import { HomePage } from '../pages';

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />

            <Route path='/*' element={<Navigate to='/' />} />
        </Routes>
    )
}

export default AppRouter;