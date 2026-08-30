// Admin credentials
const ADMIN_EMAIL = "dailyleads@gmail.com"
const ADMIN_PASSWORD = "DLead@7890"
const AUTH_KEY = "royal_safa_auth"

export interface AuthSession {
  email: string
  isAuthenticated: boolean
  loginTime: string
}

export const login = (email: string, password: string): boolean => {
  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    const session: AuthSession = {
      email,
      isAuthenticated: true,
      loginTime: new Date().toISOString(),
    }
    if (typeof window !== "undefined") {
      localStorage.setItem(AUTH_KEY, JSON.stringify(session))
    }
    return true
  }
  return false
}

export const logout = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(AUTH_KEY)
  }
}

export const getSession = (): AuthSession | null => {
  if (typeof window === "undefined") return null
  try {
    const stored = localStorage.getItem(AUTH_KEY)
    if (!stored) return null
    const session = JSON.parse(stored)
    return session.isAuthenticated ? session : null
  } catch (error) {
    return null
  }
}

export const isAuthenticated = (): boolean => {
  return getSession() !== null
}
