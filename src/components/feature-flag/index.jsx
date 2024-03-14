import { useContext } from "react"
import Accordian from "../accordion"
import TreeView from "../navigation-menu"
import RandomColor from "../random-color"
import ThemeSwitch from "../theme-switcher"
import TikTakToe from "../tic-tak-toe"
import { FeatureFlagContext } from "./content"
import menus from "../navigation-menu/data"
import TabTest from "../custom-tabs/tab-test"


export default function FeatureFlags() {

    const {loading, enabledFlags} = useContext(FeatureFlagContext);

    const componentsToRender = [
        {
            key: 'showLightAndDarkMode',
            component: <ThemeSwitch />
        },
        {
            key: 'showTicTacToeBoard',
            component: <TikTakToe />
        },
        {
            key: 'showRandomColorGenerator',
            component: <RandomColor />
        },
        {
            key: 'showAccordian',
            component: <Accordian />
        },
        {
            key: 'showTreeView',
            component: <TreeView menus={menus} />
        },        
        {
            key: 'showTabs',
            component: <TabTest />
        },
    ]

    function checkEnabledFlags(getCurrentKey){
        return enabledFlags[getCurrentKey];
    }

    if(loading) return <h1>Loaing...</h1>

    return (
        <div>
            {
                componentsToRender.map(componentItem => checkEnabledFlags(componentItem.key) ? componentItem.component : null )
            }
        </div>
    )
}