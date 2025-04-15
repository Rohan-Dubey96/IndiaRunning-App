export default{
    searchEventBar     : '//*[contains(@name,"search")]',
    oneEventFound      : '//*[contains(@data-testid,"sort-by-button")]//span[contains(text(),"1")]',
    extractEventTitle  : '//*[contains(@data-testid,"sort-by-button")]//span[contains(text(),"1")]/../../..//div[contains(@class,"line-clamp-2")]',
    getEvent           : "(//*[contains(@class,'bg-header-pattern')])[1]//h1"


}
