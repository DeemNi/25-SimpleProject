import useLocalStorage from "./useLocalStorage"
import './theme.css'


export default function ThemeSwitch() {

    const [theme, setTheme] = useLocalStorage('theme', 'dark');
    
    function handleToggleTheme(){
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return (
        <div className="light-dark-mode" data-theme={theme}>
            <div className="container">
                <h1>Theme Switcher Component</h1>
                <button onClick={handleToggleTheme}>Change Theme</button>
            </div>
        </div>
    )
}