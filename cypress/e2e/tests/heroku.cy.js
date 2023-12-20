/// <reference types="cypress" /> 
const { homePageheroku} = require("../pageObjects/homePageheroku")

describe("This Dynamic data in Table assertion", ()=>{
    let json;
    before("To get the fixtures", ()=>{
        cy.fixture('jsonData').then((data)=>{
            json = data;
        })
    })
    beforeEach("Visit the URL", ()=>{
        cy.visit('https://testpages.herokuapp.com/styled/tag/dynamic-table.html');
    })

    it.only("Dynamic data assertion",()=>{
        const jsonData = JSON.stringify(json);

        homePageheroku.clicktableDataBtn(); 
        homePageheroku.enterJSONData(jsonData);
        homePageheroku.clickRefreshTableBtn();

        cy.get('tr').each(($row) => {
            const name = $row.find('td').eq(0).text(); 
            let age = $row.find('td').eq(1).text();
            age = parseInt(age)
            const gender = $row.find('td').eq(2).text();
            for(const item of json){
                if(item.name == name ){
                    expect(item.name).to.equals(name)
                    expect(item.age).to.equals(age)
                    expect(item.gender).to.equals(gender)
                    break;
                }
            }
        });
    })

})