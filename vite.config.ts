import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  define: {
    VITE_SUPABASE_URL: JSON.stringify("https://zwgudiwlrrufkequijug.supabase.co"),
    VITE_SUPABASE_ANON_KEY: JSON.stringify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3Z3VkaXdscnJ1ZmtlcXVpanVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI5MjUwNjcsImV4cCI6MjA1ODUwMTA2N30.wYiqYeYWQgYC02BS7MWN-xwG_xLkC7ulpeEadZXbRek"),
  },
});
