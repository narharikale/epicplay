import { AuthProvider , ThemeProvider , VideoProvider , FilterProvider,LikesProvider, WatchLaterProvider, HistoryProvider, PlaylistProvider } from "../context";
import { BrowserRouter } from 'react-router-dom';


function CombinedProvider ({ children }) {
    return (
        <BrowserRouter>
            <ThemeProvider>
                <AuthProvider>
                    <VideoProvider> 
                        <FilterProvider>
                            <PlaylistProvider>
                                <WatchLaterProvider>
                                    <LikesProvider>
                                        <HistoryProvider>
                                            { children }
                                        </HistoryProvider>
                                    </LikesProvider>
                                </WatchLaterProvider>
                            </PlaylistProvider>
                        </FilterProvider>
                    </VideoProvider>
                </AuthProvider>
            </ThemeProvider>
        </BrowserRouter>
    )
}

export { CombinedProvider }