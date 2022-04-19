import {
  useState,
  useContext,
  createContext,
  ReactNode,
  useEffect,
} from 'react'

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

    localStorage.setItem('user', JSON.stringify({ email, password }))
  }

  const logout = () => {
    setUser(undefined)
  }

  useEffect(() => {
    const getUser = localStorage.getItem('user')
    if (getUser && getUser !== null) {
      const loggedUser = JSON.parse(getUser)
      login(loggedUser)
    }
  }, [])

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
