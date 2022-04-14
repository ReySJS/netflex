import { useState, useContext, createContext, ReactNode } from 'react'

interface ContextTypes {
  user: UserTypes
  loading: boolean
  login?: (value: { email: string; password: string }) => void
  logout?: () => void
}

export const UserContext = createContext<Partial<ContextTypes>>({})

interface UserProviderTypes {
  children: ReactNode
}

interface LoginTypes {
  email: string
  password: string
}

interface UserTypes {
  email: string
  password: string
}

export const UserProvider = ({ children }: UserProviderTypes) => {
  const [user, setUser] = useState<UserTypes | undefined>()
  const [loading, setLoading] = useState(false)

  const login = ({ email, password }: LoginTypes) => {
    setUser({ email, password })
  }

  const logout = () => {
    setUser(undefined)
  }

  return (
    <UserContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext)
