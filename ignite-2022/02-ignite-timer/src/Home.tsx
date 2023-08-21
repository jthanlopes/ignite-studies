import { createContext, useContext, useState } from 'react'

const CycleContext = createContext({} as any)

export function Home() {
  const [activeCycleId, setActiveCycleId] = useState(1)

  return (
    <div>
      <h1>Home</h1>

      <CycleContext.Provider value={{ activeCycleId, setActiveCycleId }}>
        <Countdown />
        <NewCycleForm />
      </CycleContext.Provider>
    </div>
  )
}

function Countdown() {
  const { activeCycleId } = useContext(CycleContext)

  return <h1>Countdown {activeCycleId}</h1>
}

function NewCycleForm() {
  const { activeCycleId, setActiveCycleId } = useContext(CycleContext)

  return (
    <>
      <h1>New Cycle Form {activeCycleId}</h1>
      <button onClick={() => setActiveCycleId((state: any) => state + 1)}>
        Novo Id
      </button>
    </>
  )
}
