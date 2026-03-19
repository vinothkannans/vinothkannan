"use client"

import { Analytics, getAnalytics } from "firebase/analytics"
import { FirebaseApp, FirebaseOptions, getApp, initializeApp } from "firebase/app"
import { Firestore, getFirestore } from "firebase/firestore"
import { createContext, ReactNode, useContext, useMemo } from "react"
import { AnalyticsProvider } from "./analytics-provider"

export type Firebase = {
  initialized: boolean,
  app: FirebaseApp | null,
  firestore: Firestore | null,
  analytics: Analytics | null,
  options: FirebaseOptions | null,
}

const FirebaseContext = createContext<Firebase>({
  initialized: false,
  app: null,
  firestore: null,
  analytics: null,
  options: null,
})

export const useFirebase = () => {
  const context = useContext(FirebaseContext)
  if (!context) {
    throw new Error("useFirebase must be used within a FirebaseProvider")
  }
  return context
}

export const FirebaseProvider = ({ options, children }: { options: FirebaseOptions, children: ReactNode }) => {
  const windowType = typeof window
  const firebase = useMemo<Firebase>(() => {
    let app: FirebaseApp
    try {
      // Try to get existing app first
      app = getApp()
    } catch {
      // If no app exists, initialize a new one
      app = initializeApp(options)
    }

    let analytics: Analytics | null = null
    if (windowType !== 'undefined') {
      analytics = getAnalytics(app)
    }

    const firestore = getFirestore(app)
    const initialized = true

    return {
      initialized,
      app,
      firestore,
      analytics,
      options,
    }
  }, [windowType, options])

  return (
    <FirebaseContext.Provider value={firebase}>
      <AnalyticsProvider>
        {children}
      </AnalyticsProvider>
    </FirebaseContext.Provider>
  )
}