

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
//  FILTERS
//

// Global Search filter
const arraySearchRowFilter = (data, filterParams) => {
    // columns to search
    const cols = ['pointName', 'description', 'proto', 'bacnet', 'base_brick_class']
    // process headerValue
    let searchTerms = filterParams.searchTerm.trim().toLowerCase().split(/[\s,]+/)
    // search each rows columns
    for (let col of cols) {
        if(searchTerms.every( term => data[col].toLowerCase().includes(term))){
            return true
        }
    }
    return false
}
const removeSearchRowFilter = () => {
    // get current filters
    let global_filters = table.getFilters().filter(filter => { return filter.field.name == "arraySearchRowFilter"})
    global_filters.map(filter => table.removeFilter(filter.field, filter.type))
}

export const filterFunctions = {
    arraySearchRowFilter,
    removeSearchRowFilter
}

// 
//  TESTING
// 

export function testFunction(){
    console.log("I'm a test function")
}