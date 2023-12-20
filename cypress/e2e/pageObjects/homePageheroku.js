export class HomePageheroku{

    elements = {
        
        tableDataBtn : ()=>cy.get('summary'),       //this is button for table data 
        textBoxforJsonData : ()=>cy.get('#jsondata'),  //this is locator to enter the JSON data
        refreshTableBtn:  ()=>cy.get('#refreshtable')
    }


    clicktableDataBtn(){
        this.elements.tableDataBtn().click({force:true});
    }

    enterJSONData(jsonData){
        this.elements.textBoxforJsonData().invoke('val', jsonData).trigger('change');
    }

    clickRefreshTableBtn(){
        this.elements.refreshTableBtn().click();
    }
}

export const homePageheroku = new HomePageheroku();