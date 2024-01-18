import { Route, Routes } from 'react-router-dom'
import { DefautLayout } from './layouts/DefaultLayout'

import { History } from './pages/Histoy'
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefautLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}
