import { AuthProvider , ThemeProvider , VideoProvider , FilterProvider, WatchLaterProvider } from "../context";
import { BrowserRouter } from 'react-router-dom';
import { LikesProvider } from "../context/likes-context";

function CombinedProvider ({ children }) {
    return (
        <BrowserRouter>
            <ThemeProvider>
                <AuthProvider>
                    <VideoProvider> 
                        <FilterProvider>
                            <WatchLaterProvider>
                                <LikesProvider>
                                    { children }
                                </LikesProvider>
                           </WatchLaterProvider>
                        </FilterProvider>
                    </VideoProvider>
                </AuthProvider>
            </ThemeProvider>
        </BrowserRouter>
    )
}

export { CombinedProvider }