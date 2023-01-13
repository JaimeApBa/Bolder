import { AuthProvider } from "./auth/context"
import { BolderAppRouter } from "./router/BolderAppRouter"

export const BolderApp = () => {
  return (
    <AuthProvider>
      <BolderAppRouter />
    </AuthProvider>
  )
}
