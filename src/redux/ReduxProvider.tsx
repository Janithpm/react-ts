import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from './store'

type reduxProviderPropType = {
    children: React.ReactNode
}

const ReduxProvider = ({ children }: reduxProviderPropType) => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    )
}

export default ReduxProvider
