export default
{
    enterEmailField : "(//input[contains(@id,'email')])[1]",
    getOtpBtn       : "(//*[contains(text(),'Get OTP')])[1]",
    enterOtp        : "//*[contains(@type,'number')]",
    verifyOtpBtn    : "//*[contains(text(),'Verify OTP')]",
    createEvent     : "//*[contains(text(),'+ Create Event')]",
    signUPHeading   : "(//*[contains(text(),'Sign In/Sign Up')])[1]",

    // Creation of Events

     inputEventNameField        : "//*[contains(@name,'event_name')]",
     selectOnGroundEvent        : "input#On-Ground",
     selectVirtualEvent         : "input#Virtual",
     selectOnGroundVirtualEvent : "(//input[contains(@name,'event_type')])[3]",
     startDateEvent             : "input#event_start_date",
     endDateEvent               : "input#event_end_date",
     inputLocationField         : '//input[contains(@placeholder,"Search location here")]',
     clickOnLocationItem        : "(//*[contains(@class,'pac-item')])[1]",
     inputAddress               : "input#Address_text",
     inputArea                  : "input#Area_text",
     inputCity                  : "input#City_text",
     inputState                 : "input#State_text",
     inputPincode               : "input#PinCode",
     selectCountry              : "select#country",
     selectCountryItem          : "(//select[contains(@class,'relative')])[last()-1]//option",
     saveAndProceedBtn          : "//*[contains(text(),'Save and Proceed')]",
     runningActivityType        : "input#Running",
     selectDistance             : '//select[contains(@id,"tickets.0.distance")]',
     inputNameOfCategory        : '//input[contains(@name,"tickets.0.ticket_title")]',
     inputTicketPrice           : '//input[contains(@name,"tickets.0.price")]',
     minimumAgeLimit            : '//input[contains(@name,"tickets.0.min_age")]',
     maximumAgeLimit            : '//input[contains(@name,"tickets.0.max_age")]',
     addInclusives              : '//input[contains(@name,"search_name_input")]',
     NowBtn                        : '//span[contains(text(),"Now")]',
     createTicketBtn            : '//button[contains(text(),"Create Ticket")]',
     selectListingBtn           : "input#Listing",
     inputRegistration          : "//input[contains(@id,'Registration Website_text')]",
     publishNowBtn              : '//button[contains(text(),"Publish Now")]',
     yesConfirmBtn              : "//*[contains(text(),'Yes, confirm')]",
     fetchValidationMsg         : "(//*[contains(text(),'FieldName')])[1]/../..//p"
     

}