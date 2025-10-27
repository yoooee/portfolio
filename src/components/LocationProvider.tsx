import { AnimatePresence } from "framer-motion"
import { ReactNode } from "react"

interface LocationProviderProps {
  children: ReactNode;
}

const LocationProvider = ( {children} : LocationProviderProps) => {
  return <AnimatePresence>{children}</AnimatePresence>
}

export default LocationProvider;