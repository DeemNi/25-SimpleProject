import Tabs from "./tabs";

function RandomConponent(){
    return <h1>Some random component</h1>
}


export default function TabTest(){

    const tabs = [{
        label: 'Tab 1',
        content: <div>This is content for tab1</div>
    },{
        label: 'Tab 2',
        content: <div>This is content for tab2</div>
    },{
        label: 'Tab 3',
        content: <RandomConponent />
    },]

    function handleChange(currentTabIndex){
        console.log(currentTabIndex);
    }

    return <Tabs tabsContent={tabs} onChange={handleChange}/>
}