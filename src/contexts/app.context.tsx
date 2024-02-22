import React, { SetStateAction, useState } from 'react'
import { User } from 'src/@types/auth'

import { getAccessTokenFromLS, getUserFromLS } from 'src/utils/auth'
interface IAppContext {
  isAuthenticated: boolean
  setIsAuthenticated: React.Dispatch<SetStateAction<boolean>>
  profile: User | undefined
  setProfile: React.Dispatch<React.SetStateAction<User | undefined>>
}

const initialAppContext = {
  isAuthenticated: Boolean(getAccessTokenFromLS()),
  setIsAuthenticated: () => {},
  profile: getUserFromLS(),
  setProfile: () => {}
}

export const AppContext = React.createContext<IAppContext>(initialAppContext)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(initialAppContext.isAuthenticated)
  const [profile, setProfile] = useState<User | undefined>(initialAppContext.profile)
  const refetch = () => {
    setProfile(undefined)
    setIsAuthenticated(false)
  }
  return (
    <AppContext.Provider value={{ profile, setProfile, isAuthenticated, setIsAuthenticated }}>
      {children}
    </AppContext.Provider>
  )
}
