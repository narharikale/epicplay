import { AuthProvider , ThemeProvider , VideoProvider , FilterProvider,LikesProvider, WatchLaterProvider, HistoryProvider, PlaylistProvider, SidebarProvider } from "../context";
import { BrowserRouter } from 'react-router-dom';


function CombinedProvider ({ children }) {
    return (
        <BrowserRouter>
            <ThemeProvider>
                <AuthProvider>
                    <SidebarProvider>
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
                    </SidebarProvider>
                </AuthProvider>
            </ThemeProvider>
        </BrowserRouter>
    )
}

export { CombinedProvider }