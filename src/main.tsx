import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App} from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

const widgets = [
  {
      id: 'widget-one',
      "system-name": 'widgets',
      name: 'WidgetOne',
      defaultValue: '/"true-1"/',
      value: null
  },
  {
      id: 'widget-two',
      "system-name": 'widgets',
      name: 'WidgetTwo',
      defaultValue: '/"true-2"/',
      value: null
  },
  {
      id: 'widget-three',
      "system-name": 'widgets',
      name: 'WidgetThree',
      defaultValue: '/"true-3"/',
      value: null
  },
]
if(!localStorage.getItem('widgets')) {
    localStorage.setItem('widgets', JSON.stringify(widgets))
}
