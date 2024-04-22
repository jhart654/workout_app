import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createClient } from '@supabase/supabase-js'
import { SessionContextProvider } from '@supabase/auth-helpers-react'

const supabase = createClient(
  "https://wmwgkpotrcvfojbbjagb.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indtd2drcG90cmN2Zm9qYmJqYWdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI4NDIzNDIsImV4cCI6MjAyODQxODM0Mn0.SWjy6FgDGKn_2HYOJlXlW7_XHXJg-AML06jVBiSFI4Q"
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SessionContextProvider supabaseClient={supabase}>
    <App />
    </SessionContextProvider>
  </React.StrictMode>,
)
