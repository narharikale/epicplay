import { AuthProvider , ThemeProvider , VideoProvider , FilterProvider } from "../context";
import { BrowserRouter } from 'react-router-dom';

function CombinedProvider ({ children }) {
    return (
        <BrowserRouter>
            <ThemeProvider>
                <AuthProvider>
                    <VideoProvider> 
                        <FilterProvider>
                            { children }
                        </FilterProvider>
                    </VideoProvider>
                </AuthProvider>
            </ThemeProvider>
        </BrowserRouter>
    )
}

export { CombinedProvider }