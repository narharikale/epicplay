import { AuthProvider , ThemeProvider , VideoProvider , FilterProvider, WatchLaterProvider } from "../context";
import { BrowserRouter } from 'react-router-dom';

function CombinedProvider ({ children }) {
    return (
        <BrowserRouter>
            <ThemeProvider>
                <AuthProvider>
                    <VideoProvider> 
                        <FilterProvider>
                            <WatchLaterProvider>
                                { children }
                            </WatchLaterProvider>
                        </FilterProvider>
                    </VideoProvider>
                </AuthProvider>
            </ThemeProvider>
        </BrowserRouter>
    )
}

export { CombinedProvider }