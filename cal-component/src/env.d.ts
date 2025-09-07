/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly BASE_URL: string
  // Ajoutez d'autres variables d'environnement ici si nécessaire
  // readonly VITE_API_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}