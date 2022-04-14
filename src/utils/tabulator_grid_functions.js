

// import pointsData from '../data/points/latest/web_data.json'

// 
//  FORMATTERS 
// 

// Custom icon formatter
export const copyIcon = (cell, formatterParams) => "<i class='copy-icon'></i>"



// 
//  LOADERS 
// 

// // Loads tag data from file, loads it into the given table, and redraws.
// export async function setTableData(table){
//     const data = await loadPointsData()
//     await table.setData(data)

//     table.redraw()
// }


// // Not needed when using Vue
// async function loadPointsData(){
//     const r = await fetch('data/points/latest/web_data.json');
//     const data = await r.json()

//     return data
// }


// 
//  TESTING
// 

export function testFunction(){
    console.log("I'm a test function")
}