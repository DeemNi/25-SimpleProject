

const dummyApiResponse ={
    showLightAndDarkMode: true,
    showTicTacToeBoard: true,
    showRandomColorGenerator:true,
    showAccordian: true,
    showTreeView: true,
    showTabs: true,
}

function featureFlagsDataServiceCall(){
    
    return new Promise((resolve, reject)=> {
        if(dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500);
        else reject('Some Error! Please Try Again.');
    })
}

export default featureFlagsDataServiceCall;