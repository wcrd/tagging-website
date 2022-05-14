<template>
    <!-- Lets put custom combos and grid filters here with the grid -->
    <div id="grid-controls" class="flex flex-row">
        <div id="search-bar" class="flex flex-col border border-stone-400 rounded-md items-start px-3 py-1 mb-2 place-content-evenly" style="width: 600px; background-color: rgba(192, 222, 236, 30%);">
            <label for="global-filter-value" class="font-medium">Search all fields in current view:</label>
            <input id="global-filter-value" v-model="globalSearchTerm" class="p-1 my-1 w-full border border-stone-400" type="search" placeholder="type in here to filter on all columns...">
        </div>
    </div>
    
    <div id="points-table"></div>
</template>

<script setup>
import {TabulatorFull as Tabulator} from 'tabulator-tables'
import {ref, onMounted, watch} from 'vue'
import {copyIcon, filterFunctions} from '../utils/tabulator_grid_functions'
import pointsData from '../data/points/latest/web_data.json' // static data, does not need to be part of the model

const globalSearchTerm = ref("")
const tableRef = ref(null)

function setGlobalFilter(searchParams) {
    if(!searchParams){
        filterFunctions.removeSearchRowFilter()
    } else {
        filterFunctions.removeSearchRowFilter()
        table.addFilter(filterFunctions.arraySearchRowFilter, {searchTerm: searchParams, name:"globalFilter"})
    }
}


watch(globalSearchTerm, setGlobalFilter)

onMounted(() => {

    //create Tabulator on DOM element with id "example-table"
    const table = new Tabulator("#points-table", {
        height: '89vh', // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
        data: pointsData, //assign data to table
        layout: "fitColumns", //fit columns to width of table (optional)
        groupBy: ["Main Group","Sub Group","Variation"],
        // function to alter groupBy value to make any ungrouped row belong to 'General'
        groupHeader: function(value, count, data, group){
            return value ? value : "General"
        },
        columns: [
            {title:"#", field:"id", width:20, headerFilter:false, cssClass:"dulled-text"},
            {title:"Point Name", field:"pointName", formatter:"textarea", width:400, headerFilter:"input", headerFilterFunc:"keywords", headerFilterFuncParams:{matchAll: true}, headerFilterPlaceholder:"filter column...", cssClass:"no-right-border"},
            {formatter:copyIcon, width:40, hozAlign:"center", headerSort:false}, // copy icon that looks like it in the point name field
            {width:25, hozAlign:"center", field:"state", formatter:"traffic",  cssClass:"cursor-help", resizable:false,
                headerFilter: "select", 
                headerFilterParams: { 
                    values: { 
                        0: "<span style='color: green;'>Base</span>",
                        1: "<span style='color: gray;'>TBD</span>",
                        2: "<span style='color: red;'>Non-base</span>",
                    },
                    multiselect: true,
                },
                headerFilterFunc: (headerValue, rowValue, rowData, filterParams) => {
                    return headerValue == '' ? true : headerValue.includes(rowValue.toString())
                },
                formatterParams:{
                    min:0,
                    max:2,
                    color:["green", "gray", "red"],
                }
            },
            {title:"Description", field:"description", formatter:"textarea", width:550},
            {title:"Haystack Tags", field:"proto", minWidth:400, formatter:"textarea", headerFilter:"input", headerFilterFunc:"keywords", headerFilterFuncParams:{matchAll: true}, headerFilterPlaceholder:"filter column..."},
            {title:"Equipment", field:"equipment", visible:false},
            {title:"BACnet Object Types", field:"bacnet", minWidth:100, headerTooltip:true, headerFilter:"input", headerFilterFunc:"keywords", headerFilterFuncParams:{matchAll: true}, headerFilterPlaceholder:"filter column..."},
            {title:"Base Class", field:"base_brick_class", minWidth:100, headerTooltip:true,
                headerFilter: "select", 
                headerFilterParams: { 
                    values: true,
                    multiselect: true,
                },
                headerFilterFunc:"in",
                headerFilterPlaceholder:"select classes..."
            }
        ],
        // cellClick: function(e, cell){
        //     if(cell.getField() && !["pointName", "state"].includes(cell.getField())){
        //         const data = cell.getData()
        //         openModal(data)
        //     }
        // }
    });


    window.table = table

    //trigger an alert message when the row is clicked
    // table.on("rowClick", function(e, row){ 
    //     alert("Row " + row.getData().id + " Clicked!!!!");
    // });

    // tableRef.value = table
});


</script>

<style>
    @import "tabulator-tables";

    /* CUSTOM ICONS */
    .copy-icon {
        width: 15px;
        height: 15px;
        padding: 0;
        border: 0;
        background-size: contain;
        background-repeat: no-repeat;
        display: inline-block;
        filter: invert(0.7);
        background-image: url(
            data:image/png;base64,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
        );
    }
    .copy-icon:hover {
        filter: invert(0)
    }

    /* SPECIAL TABULATOR OVERRIDE CLASSES */
    /* TODO: Use the SASS variables instead. Figure out how to get them in here. */
    /* TODO: Choose a nice color palette */
    .tabulator {
        border-radius: 8px;
    }
    .tabulator-header-filter input {
        border-radius: 5px;
    }

    .tabulator-col[role="columnheader"] {
        background: #092841 !important;
        color: white;
    }
    .tabulator-header {
        background: #092841 !important;
        border-bottom: 0px !important;
    }

    /* Group toggle arrow color */
    .tabulator-row.tabulator-group.tabulator-group-visible .tabulator-arrow {
        border-top-color:white;
    }
    .tabulator-row.tabulator-group .tabulator-arrow {
        border-left-color: white;
    }

    .tabulator-row-even {
        background-color: #f5f3f3 !important;
    }

    .tabulator-row:hover {
        background-color: rgb(197, 212, 231) !important;
    }

    .tabulator-group-level-0 {
        /* background-color: #272838 !important; */
        background-color: #1A374D !important;
        color: white;
        font-size: large;
        padding-top: 10px !important;
        padding-bottom: 10px !important;
        border: none !important;
    }
    .tabulator-group-level-1 {
        /* background-color: #489FC7 !important; */
        background-color: #406882 !important;
        color: white;
        padding-top: 6px !important;
        padding-bottom: 6px !important;
        border: none !important;
    }
    .tabulator-group-level-2 {
        border: none !important;
        /* background-color: #c0deec !important; */
        background-color: #6998AB !important;
        color: white;

    }

    /* ADDITIONAL CLASSES FOR TABULATOR */
    /* .tabulator .no-right-border {
        border-right: none;
    } */

    .no-right-border {
        border-right: none !important;
    }

    .tabulator .dulled-text {
        color: lightgray;
    }
</style>
