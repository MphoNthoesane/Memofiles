/**
 * Captures and formats the current date in South Africa Standard Time (SAST).
 * @returns {string} The formatted date string (e.g., "12 November 2025" or "2025/11/12").
 */
function getSouthAfricanDate() {
    // 1. Create a new Date object for the current moment.
    const now = new Date();

    // 2. Define formatting options, specifying the SAST timezone.
    const options = {
        // Timezone setting is crucial to ensure the date is correct for SAST
        timeZone: 'Africa/Johannesburg', 
        
        // Date components only
        year: 'numeric',
        month: 'long', // Use '2-digit' for MM, or 'short' for Nov
        day: 'numeric' // Use '2-digit' for DD
    };

    // 3. Use toLocaleDateString to format the date based on the SA locale ('en-ZA').
    // The 'en-ZA' locale formats dates nicely as 'D Month YYYY'.
    const formattedDate = now.toLocaleDateString('en-ZA', options);

    return formattedDate;
}

// Example Usage:
const saDate = getSouthAfricanDate();
 
// Output will be similar to: "12 November 2025"

//Names


//Mahendra
document.getElementById("SUKDEVButton").onclick = function(){
    
    if(document.getElementById("SUKDEVPassword").value=="SUKDEV"){
        document.getElementById("SUKDEVDate").innerHTML = saDate
        document.getElementById("SUKDEVSign").innerHTML = `<img src="PICS/Sukdev.jpg" alt="" width="100px" height="50px">`
        document.getElementById("SUKDEVDone").innerHTML = "Saved and Signed"

    }
    else{
        document.getElementById("SUKDEVPassword").value=""
        alert("Incorrect password")
    }
   
}

//Macdon
document.getElementById("MOETIButton").onclick = function(){
    
    if(document.getElementById("MOETIPassword").value=="MOETI"){
        document.getElementById("MOETIDate").innerHTML = saDate
        document.getElementById("MOETISign").innerHTML = `<img src="PICS/MOETI.jpg" alt="" width="100px" height="50px">`
        document.getElementById("MOETIDone").innerHTML = "Saved and Signed"

    }
    else{
        alert("Incorrect password")
    }
   
}

//Bennie

document.getElementById("LETHOBAButton").onclick = function(){
    
    if(document.getElementById("LETHOBAPassword").value=="LETHOBA"){
        document.getElementById("LETHOBADate").innerHTML = saDate
        document.getElementById("LETHOBASign").innerHTML = `<img src="PICS/Lethoba Benedictor.jpg" alt="" width="100px" height="50px">`
        document.getElementById("LETHOBADone").innerHTML = "Saved and Signed"

    }
    else{
        document.getElementById("LETHOBAPassword").value=""
        alert("Incorrect password")
    }
   
}


//DISEMELO
document.getElementById("DISEMELOButton").onclick = function(){
    
    if(document.getElementById("DISEMELOPassword").value=="MOLUPE"){
        document.getElementById("DISEMELODate").innerHTML = saDate
        document.getElementById("DISEMELOSign").innerHTML = `<img src="PICS/Disemelo.jpg" alt="" width="100px" height="50px">`
        document.getElementById("DISEMELODone").innerHTML = "Saved and Signed"

    }
    else{
        document.getElementById("MOLUPEPassword").value=""
        alert("Incorrect password")
    }
   
}
//FAITH
document.getElementById("MASHEGOButton").onclick = function(){
    
    if(document.getElementById("MASHEGOPassword").value=="MASHEGO"){
        document.getElementById("MASHEGODate").innerHTML = saDate
        document.getElementById("MASHEGOSign").innerHTML = `<img src="PICS/Mashego.jpg" alt="" width="100px" height="50px">`
        document.getElementById("MASHEGODone").innerHTML = "Saved and Signed"

    }
    else{
        document.getElementById("MASHEGOPassword").value=""
        alert("Incorrect password")
    }
   
}
//ITUMELENG

document.getElementById("MATLHAKEButton").onclick = function(){
    
    if(document.getElementById("MATLHAKEPassword").value=="MATLHAKE"){
        document.getElementById("MATLHAKEDate").innerHTML = saDate
        document.getElementById("MATLHAKESign").innerHTML = `<img src="PICS/Matlhake.jpg" alt="" width="100px" height="50px">`
        document.getElementById("MATLHAKEDone").innerHTML = "Saved and Signed"

    }
    else{
        document.getElementById("MATLHAKEPassword").value=""
        alert("Incorrect password")
    }
   
}
//JABULILE

document.getElementById("MLAKAButton").onclick = function(){
    
    if(document.getElementById("MLAKAPassword").value=="MLAKA"){
        document.getElementById("MLAKADate").innerHTML = saDate
        document.getElementById("MLAKASign").innerHTML = `<img src="PICS/Mlaka.jpg" alt="" width="100px" height="50px">`
        document.getElementById("MLAKADone").innerHTML = "Saved and Signed"

    }
    else{
        document.getElementById("MLAKAPassword").value=""
        alert("Incorrect password")
    }
   
}
//JABULANI
document.getElementById("MEKGWEButton").onclick = function(){
    
    if(document.getElementById("MEKGWEPassword").value=="MEKGWE"){
        document.getElementById("MEKGWEDate").innerHTML = saDate
        document.getElementById("MEKGWESign").innerHTML = `<img src="PICS/Mekgwe.jpg" alt="" width="100px" height="50px">`
        document.getElementById("MEKGWEDone").innerHTML = "Saved and Signed"

    }
    else{
        document.getElementById("MEKGWEPassword").value=""
        alert("Incorrect password")
    }
   
}
//JIM
document.getElementById("MABUSOButton").onclick = function(){
    
    if(document.getElementById("MABUSOPassword").value=="MABUSO"){
        document.getElementById("MABUSODate").innerHTML = saDate
        document.getElementById("MABUSOSign").innerHTML = `<img src="PICS/Mabuso.jpg" alt="" width="100px" height="50px">`
        document.getElementById("MABUSODone").innerHTML = "Saved and Signed"

    }
    else{
        document.getElementById("MABUSOPassword").value=""
        alert("Incorrect password")
    }
   
}

//KAMOGELO

document.getElementById("MABENAButton").onclick = function(){
    
    if(document.getElementById("MABENAPassword").value=="MABENA"){
        document.getElementById("MABENADate").innerHTML = saDate
        document.getElementById("MABENASign").innerHTML = `<img src="PICS/Mabena.jpg" alt="" width="100px" height="50px">`
        document.getElementById("MABENADone").innerHTML = "Saved and Signed"

    }
    else{
        document.getElementById("MABENAPassword").value=""
        alert("Incorrect password")
    }
   
}
//MAKGABO

document.getElementById("MATSHAButton").onclick = function(){
    
    if(document.getElementById("MATSHAPassword").value=="MATSHA"){
        document.getElementById("MATSHADate").innerHTML = saDate
        document.getElementById("MATSHASign").innerHTML = `<img src="PICS/Matsha.jpg" alt="" width="100px" height="50px">`
        document.getElementById("MATSHADone").innerHTML = "Saved and Signed"

    }
    else{
        document.getElementById("MATSHAPassword").value=""
        alert("Incorrect password")
    }
   
}
//MARITO
document.getElementById("NGOBENIButton").onclick = function(){
    
    if(document.getElementById("NGOBENIPassword").value=="NGOBENI"){
        document.getElementById("NGOBENIDate").innerHTML = saDate
        document.getElementById("NGOBENISign").innerHTML = `<img src="PICS/Ngobeni.jpg" alt="" width="100px" height="50px">`
        document.getElementById("NGOBENIDone").innerHTML = "Saved and Signed"

    }
    else{
        document.getElementById("NGOBENIPassword").value=""
        alert("Incorrect password")
    }
   
}
//MOKGADI

document.getElementById("MOTSEPEButton").onclick = function(){
    
    if(document.getElementById("MOTSEPEPassword").value=="MOTSEPE"){
        document.getElementById("MOTSEPEDate").innerHTML = saDate
        document.getElementById("MOTSEPESign").innerHTML = `<img src="PICS/Motsepe.jpg" alt="" width="100px" height="50px">`
        document.getElementById("MOTSEPEDone").innerHTML = "Saved and Signed"

    }
    else{
        document.getElementById("MOTSEPEPassword").value=""
        alert("Incorrect password")
    }
   
}

//PRUDENCE
document.getElementById("MUVHALIButton").onclick = function(){
    
    if(document.getElementById("MUVHALIPassword").value=="MUVHALI"){
        document.getElementById("MUVHALIDate").innerHTML = saDate
        document.getElementById("MUVHALISign").innerHTML = `<img src="PICS/Muvhali.jpg" alt="" width="100px" height="50px">`
        document.getElementById("MUVHALIDone").innerHTML = "Saved and Signed"

    }
    else{
        document.getElementById("MUVHALIPassword").value=""
        alert("Incorrect password")
    }
   
}
//WESTLEY

document.getElementById("BURTONButton").onclick = function(){
    
    if(document.getElementById("BURTONPassword").value=="BURTON"){
        document.getElementById("BURTONDate").innerHTML = saDate
        document.getElementById("BURTONSign").innerHTML = `<img src="PICS/Burton Westley.jpg" alt="" width="100px" height="50px">`
        document.getElementById("BURTONDone").innerHTML = "Saved and Signed"

    }
    else{
        document.getElementById("BURTONPassword").value=""
        alert("Incorrect password")
    }
   
}

//YANGA

document.getElementById("NOFUMAButton").onclick = function(){
    
    if(document.getElementById("NOFUMAPassword").value=="NOFUMA"){
        document.getElementById("NOFUMADate").innerHTML = saDate
        document.getElementById("NOFUMASign").innerHTML = `<img src="PICS/Nofuma.jpg" alt="" width="100px" height="50px">`
        document.getElementById("NOFUMADone").innerHTML = "Saved and Signed"

    }
    else{
        document.getElementById("NOFUMAPassword").value=""
        alert("Incorrect password")
    }
   
}

//ZANDILE
document.getElementById("MHLONGOButton").onclick = function(){
    
    if(document.getElementById("MHLONGOPassword").value=="MHLONGO"){
        document.getElementById("MHLONGODate").innerHTML = saDate
        document.getElementById("MHLONGOSign").innerHTML = `<img src="PICS/Mhlongo.jpg" alt="" width="100px" height="50px">`
        document.getElementById("MHLONGODone").innerHTML = "Saved and Signed"

    }
    else{
        document.getElementById("MHLONGOPassword").value=""
        alert("Incorrect password")
    }
   
}

//CHULUMANCO
document.getElementById("DALIButton").onclick = function(){
    
    if(document.getElementById("DALIPassword").value=="DALI"){
        document.getElementById("DALIDate").innerHTML = saDate
        document.getElementById("DALISign").innerHTML = `<img src="PICS/Dali.jpg" alt="" width="100px" height="50px">`
        document.getElementById("DALIDone").innerHTML = "Saved and Signed"

    }
    else{
        document.getElementById("DALIPassword").value=""
        alert("Incorrect password")
    }
   
}

//CLYVE

document.getElementById("CHABAButton").onclick = function(){
    
    if(document.getElementById("CHABAPassword").value=="CHABA"){
        document.getElementById("CHABADate").innerHTML = saDate
        document.getElementById("CHABASign").innerHTML = `<img src="PICS/Chaba.jpg" alt="" width="100px" height="50px">`
        document.getElementById("CHABADone").innerHTML = "Saved and Signed"

    }
    else{
        document.getElementById("CHABAPassword").value=""
        alert("Incorrect password")
    }
   
}
//EDWIN
document.getElementById("NEVARIButton").onclick = function(){
    
    if(document.getElementById("NEVARIPassword").value=="NEVARI"){
        document.getElementById("NEVARIDate").innerHTML = saDate
        document.getElementById("NEVARISign").innerHTML = `<img src="PICS/Nevari.jpg" alt="" width="100px" height="50px">`
        document.getElementById("NEVARIDone").innerHTML = "Saved and Signed"

    }
    else{
        document.getElementById("NEVARIPassword").value=""
        alert("Incorrect password")
    }
   
}

//GEORGE

document.getElementById("HOWARTHButton").onclick = function(){
    
    if(document.getElementById("HOWARTHPassword").value=="HOWARTH"){
        document.getElementById("HOWARTHDate").innerHTML = saDate
        document.getElementById("HOWARTHSign").innerHTML = `<img src="PICS/Howarth George.jpg" alt="" width="100px" height="50px">`
        document.getElementById("HOWARTHDone").innerHTML = "Saved and Signed"

    }
    else{
        document.getElementById("HOWARTHPassword").value=""
        alert("Incorrect password")
    }
   
}

//MASERULE
document.getElementById("MORERWAButton").onclick = function(){
    
    if(document.getElementById("MORERWAPassword").value=="MORERWA"){
        document.getElementById("MORERWADate").innerHTML = saDate
        document.getElementById("MORERWASign").innerHTML = `<img src="PICS/Morerwa.jpg" alt="" width="100px" height="50px">`
        document.getElementById("MORERWADone").innerHTML = "Saved and Signed"

    }
    else{
        document.getElementById("MORERWAPassword").value=""
        alert("Incorrect password")
    }
   
}

//MURENDI

document.getElementById("MADZINGEButton").onclick = function(){
    
    if(document.getElementById("MADZINGEPassword").value=="MADZINGE"){
        document.getElementById("MADZINGEDate").innerHTML = saDate
        document.getElementById("MADZINGESign").innerHTML = `<img src="PICS/Madzinge.jpg" alt="" width="100px" height="50px">`
        document.getElementById("MADZINGEDone").innerHTML = "Saved and Signed"

    }
    else{
        document.getElementById("MADZINGEPassword").value=""
        alert("Incorrect password")
    }
   
}

//PHALATENA
document.getElementById("MADIHLABAButton").onclick = function(){
    
    if(document.getElementById("MADIHLABAPassword").value=="MADIHLABA"){
        document.getElementById("MADIHLABADate").innerHTML = saDate
        document.getElementById("MADIHLABASign").innerHTML = `<img src="PICS/Madihlaba.jpg" alt="" width="100px" height="50px">`
        document.getElementById("MADIHLABADone").innerHTML = "Saved and Signed"

    }
    else{
        document.getElementById("MADIHLABAPassword").value=""
        alert("Incorrect password")
    }
   
}


//THABISO

document.getElementById("MOTHIBEButton").onclick = function(){
    
    if(document.getElementById("MOTHIBEPassword").value=="MOTHIBE"){
        document.getElementById("MOTHIBEDate").innerHTML = saDate
        document.getElementById("MOTHIBESign").innerHTML = `<img src="PICS/Mothibe.jpg" alt="" width="100px" height="50px">`
        document.getElementById("MOTHIBEDone").innerHTML = "Saved and Signed"

    }
    else{
        document.getElementById("MOTHIBEPassword").value=""
        alert("Incorrect password")
    }
   
}

//EDITH

document.getElementById("EDITHButton").onclick = function(){
    
    if(document.getElementById("EDITHPassword").value=="EDITH"){
        document.getElementById("EDITHDate").innerHTML = saDate
        document.getElementById("EDITHSign").innerHTML = `<img src="PICS/Nkosi edith.jpg" alt="" width="100px" height="50px">`
        document.getElementById("EDITHDone").innerHTML = "Saved and Signed"

    }
    else{
        document.getElementById("EDITHPassword").value=""
        alert("Incorrect password")
    }
   
}
//NDIVHUWO

document.getElementById("MUHANELWAButton").onclick = function(){
    
    if(document.getElementById("MUHANELWAPassword").value=="MUHANELWA"){
        document.getElementById("MUHANELWADate").innerHTML = saDate
        document.getElementById("MUHANELWASign").innerHTML = `<img src="PICS/Muhanelwa.jpg" alt="" width="100px" height="50px">`
        document.getElementById("MUHANELWADone").innerHTML = "Saved and Signed"

    }
    else{
        document.getElementById("MUHANELWAPassword").value=""
        alert("Incorrect password")
    }
   
}
//NISHAAT
document.getElementById("KRUGERButton").onclick = function(){
    
    if(document.getElementById("KRUGERPassword").value=="KRUGER"){
        document.getElementById("KRUGERDate").innerHTML = saDate
        document.getElementById("KRUGERSign").innerHTML = `<img src="PICS/Kruger.jpg" alt="" width="100px" height="50px">`
        document.getElementById("KRUGERDone").innerHTML = "Saved and Signed"

    }
    else{
        document.getElementById("KRUGERPassword").value=""
        alert("Incorrect password")
    }
   
}

//TSHIKANI
document.getElementById("SHIBURIButton").onclick = function(){
    
    if(document.getElementById("SHIBURIPassword").value=="SHIBURI"){
        document.getElementById("SHIBURIDate").innerHTML = saDate
        document.getElementById("SHIBURISign").innerHTML = `<img src="PICS/Shiburi.jpg" alt="" width="100px" height="50px">`
        document.getElementById("SHIBURIDone").innerHTML = "Saved and Signed"

    }
    else{
        document.getElementById("SHIBURIPassword").value=""
        alert("Incorrect password")
    }
   
}


//WANDILE

document.getElementById("MABONAButton").onclick = function(){
    
    if(document.getElementById("MABONAPassword").value=="MABONA"){
        document.getElementById("MABONADate").innerHTML = saDate
        document.getElementById("MABONASign").innerHTML = `<img src="PICS/Mabona.jpg" alt="" width="100px" height="50px">`
        document.getElementById("MABONADone").innerHTML = "Saved and Signed"

    }
    else{
        document.getElementById("MABONAPassword").value=""
        alert("Incorrect password")
    }
   
}
//BABALWA

document.getElementById("SIKHUNYANAButton").onclick = function(){
    
    if(document.getElementById("SIKHUNYANAPassword").value=="SIKHUNYANA"){
        document.getElementById("SIKHUNYANADate").innerHTML = saDate
        document.getElementById("SIKHUNYANASign").innerHTML = `<img src="PICS/Sikhunyana.jpg" alt="" width="100px" height="50px">`
        document.getElementById("SIKHUNYANADone").innerHTML = "Saved and Signed"

    }
    else{
        document.getElementById("SIKHUNYANAPassword").value=""
        alert("Incorrect password")
    }
   
}

//BUSI

document.getElementById("SIBEKOButton").onclick = function(){
    
    if(document.getElementById("SIBEKOPassword").value=="SIBEKO"){
        document.getElementById("SIBEKODate").innerHTML = saDate
        document.getElementById("SIBEKOSign").innerHTML = `<img src="PICS/Sibeko.jpg" alt="" width="100px" height="50px">`
        document.getElementById("SIBEKODone").innerHTML = "Saved and Signed"

    }
    else{
        document.getElementById("SIBEKOPassword").value=""
        alert("Incorrect password")
    }
   
}

//CLEMENT

document.getElementById("RAGANYAButton").onclick = function(){
    
    if(document.getElementById("RAGANYAPassword").value=="RAGANYA"){
        document.getElementById("RAGANYADate").innerHTML = saDate
        document.getElementById("RAGANYASign").innerHTML = `<img src="PICS/Raganya.jpg" alt="" width="100px" height="50px">`
        document.getElementById("RAGANYADone").innerHTML = "Saved and Signed"

    }
    else{
        document.getElementById("RAGANYAPassword").value=""
        alert("Incorrect password")
    }
   
}


//ELIZABETH

document.getElementById("ADAMSButton").onclick = function(){
    
    if(document.getElementById("ADAMSPassword").value=="ADAMS"){
        document.getElementById("ADAMSDate").innerHTML = saDate
        document.getElementById("ADAMSSign").innerHTML = `<img src="PICS/ADAMS.jpg" alt="" width="100px" height="50px">`
        document.getElementById("ADAMSDone").innerHTML = "Saved and Signed"

    }
    else{
        document.getElementById("ADAMSPassword").value=""
        alert("Incorrect password")
    }
   
}
//KGOPOTSO
document.getElementById("MONAHENGButton").onclick = function(){
    
    if(document.getElementById("MONAHENGPassword").value=="MONAHENG"){
        document.getElementById("MONAHENGDate").innerHTML = saDate
        document.getElementById("MONAHENGSign").innerHTML = `<img src="PICS/Monaheng.jpg" alt="" width="100px" height="50px">`
        document.getElementById("MONAHENGDone").innerHTML = "Saved and Signed"

    }
    else{
        document.getElementById("MONAHENGPassword").value=""
        alert("Incorrect password")
    }
   
}

//LERATO
document.getElementById("SIBIYAButton").onclick = function(){
    
    if(document.getElementById("SIBIYAPassword").value=="SIBIYA"){
        document.getElementById("SIBIYADate").innerHTML = saDate
        document.getElementById("SIBIYASign").innerHTML = `<img src="PICS/Sibiya.jpg" alt="" width="100px" height="50px">`
        document.getElementById("SIBIYADone").innerHTML = "Saved and Signed"

    }
    else{
        document.getElementById("SIBIYAPassword").value=""
        alert("Incorrect password")
    }
   
}

//MAMELLO
document.getElementById("MOEKETSIButton").onclick = function(){
    
    if(document.getElementById("MOEKETSIPassword").value=="MOEKETSI"){
        document.getElementById("MOEKETSIDate").innerHTML = saDate
        document.getElementById("MOEKETSISign").innerHTML = `<img src="PICS/Moeketsi.jpg" alt="" width="100px" height="50px">`
        document.getElementById("MOEKETSIDone").innerHTML = "Saved and Signed"

    }
    else{
        document.getElementById("MOEKETSIPassword").value=""
        alert("Incorrect password")
    }
   
}


//MICHELLE

document.getElementById("MAKOFANEButton").onclick = function(){
    
    if(document.getElementById("MAKOFANEPassword").value=="MAKOFANE"){
        document.getElementById("MAKOFANEDate").innerHTML = saDate
        document.getElementById("MAKOFANESign").innerHTML = `<img src="PICS/Makofane.jpg" alt="" width="100px" height="50px">`
        document.getElementById("MAKOFANEDone").innerHTML = "Saved and Signed"

    }
    else{
        document.getElementById("MAKOFANEPassword").value=""
        alert("Incorrect password")
    }
   
}
//MOGAU

document.getElementById("RAMAOTSWAButton").onclick = function(){
    
    if(document.getElementById("RAMAOTSWAPassword").value=="RAMAOTSWA"){
        document.getElementById("RAMAOTSWADate").innerHTML = saDate
        document.getElementById("RAMAOTSWASign").innerHTML = `<img src="PICS/Ramaotswa.jpg" alt="" width="100px" height="50px">`
        document.getElementById("RAMAOTSWADone").innerHTML = "Saved and Signed"

    }
    else{
        document.getElementById("RAMAOTSWAPassword").value=""
        alert("Incorrect password")
    }
   
}

//MPHO

document.getElementById("NTHOESANEButton").onclick = function(){
    
    if(document.getElementById("NTHOESANEPassword").value=="NTHOESANE"){
        document.getElementById("NTHOESANEDate").innerHTML = saDate
        document.getElementById("NTHOESANESign").innerHTML = `<img src="PICS/Nthoesane.jpg" alt="" width="100px" height="50px">`
        document.getElementById("NTHOESANEDone").innerHTML = "Saved and Signed"

    }
    else{
        document.getElementById("NTHOESANEPassword").value=""
        alert("Incorrect password")
    }
   
}

//NOLUTHANDO

document.getElementById("DLAMINIButton").onclick = function(){
    
    if(document.getElementById("DLAMINIPassword").value=="DLAMINI"){
        document.getElementById("DLAMINIDate").innerHTML = saDate
        document.getElementById("DLAMINISign").innerHTML = `<img src="PICS/Dlamini.jpg" alt="" width="100px" height="50px">`
        document.getElementById("DLAMINIDone").innerHTML = "Saved and Signed"

    }
    else{
        document.getElementById("DLAMINIPassword").value=""
        alert("Incorrect password")
    }
   
}

//NONTOKOZO
document.getElementById("MTHEMBUButton").onclick = function(){
    
    if(document.getElementById("MTHEMBUPassword").value=="MTHEMBU"){
        document.getElementById("MTHEMBUDate").innerHTML = saDate
        document.getElementById("MTHEMBUSign").innerHTML = `<img src="PICS/Mthembu.jpg" alt="" width="100px" height="50px">`
        document.getElementById("MTHEMBUDone").innerHTML = "Saved and Signed"

    }
    else{
        document.getElementById("MTHEMBUPassword").value=""
        alert("Incorrect password")
    }
   
}

//NTHABISENG

document.getElementById("RALEPHENYAButton").onclick = function(){
    
    if(document.getElementById("RALEPHENYAPassword").value=="RALEPHENYA"){
        document.getElementById("RALEPHENYADate").innerHTML = saDate
        document.getElementById("RALEPHENYASign").innerHTML = `<img src="PICS/Ralephenya.jpg" alt="" width="100px" height="50px">`
        document.getElementById("RALEPHENYADone").innerHTML = "Saved and Signed"

    }
    else{
        document.getElementById("RALEPHENYAPassword").value=""
        alert("Incorrect password")
    }
   
}
//PHEELLO

document.getElementById("LEHOLAButton").onclick = function(){
    
    if(document.getElementById("LEHOLAPassword").value=="LEHOLA"){
        document.getElementById("LEHOLADate").innerHTML = saDate
        document.getElementById("LEHOLASign").innerHTML = `<img src="PICS/Lehola.jpg" alt="" width="100px" height="50px">`
        document.getElementById("LEHOLADone").innerHTML = "Saved and Signed"

    }
    else{
        document.getElementById("LEHOLAPassword").value=""
        alert("Incorrect password")
    }
   
}
//SHAZNAY

document.getElementById("THOMPSONButton").onclick = function(){
    
    if(document.getElementById("THOMPSONPassword").value=="THOMPSON"){
        document.getElementById("THOMPSONDate").innerHTML = saDate
        document.getElementById("THOMPSONSign").innerHTML = `<img src="PICS/Thompson.jpg" alt="" width="100px" height="50px">`
        document.getElementById("THOMPSONDone").innerHTML = "Saved and Signed"

    }
    else{
        document.getElementById("THOMPSONPassword").value=""
        alert("Incorrect password")
    }
   
}

//SIPHESIHLE

document.getElementById("SIPHESIHLEButton").onclick = function(){
    
    if(document.getElementById("SIPHESIHLEPassword").value=="SIPHESIHLE"){
        document.getElementById("SIPHESIHLEDate").innerHTML = saDate
        document.getElementById("SIPHESIHLESign").innerHTML = `<img src="PICS/SIPHESIHLE.jpg" alt="" width="100px" height="50px">`
        document.getElementById("SIPHESIHLEDone").innerHTML = "Saved and Signed"

    }
    else{
        document.getElementById("SIPHESIHLEPassword").value=""
        alert("Incorrect password")
    }
   
}
//SITHEMBISO

document.getElementById("GOQOButton").onclick = function(){
    
    if(document.getElementById("GOQOPassword").value=="GOQO"){
        document.getElementById("GOQODate").innerHTML = saDate
        document.getElementById("GOQOSign").innerHTML = `<img src="PICS/Goqo.jpg" alt="" width="100px" height="50px">`
        document.getElementById("GOQODone").innerHTML = "Saved and Signed"

    }
    else{
        document.getElementById("GOQOPassword").value=""
        alert("Incorrect password")
    }
   
}

//TENDANI

document.getElementById("NETSHILEMAButton").onclick = function(){
    
    if(document.getElementById("NETSHILEMAPassword").value=="NETSHILEMA"){
        document.getElementById("NETSHILEMADate").innerHTML = saDate
        document.getElementById("NETSHILEMASign").innerHTML = `<img src="PICS/NETSHILEMA.jpg" alt="" width="100px" height="50px">`
        document.getElementById("NETSHILEMADone").innerHTML = "Saved and Signed"

    }
    else{
        document.getElementById("NETSHILEMAPassword").value=""
        alert("Incorrect password")
    }
   
}

//THABELO
document.getElementById("MUNYAIButton").onclick = function(){
    
    if(document.getElementById("MUNYAIPassword").value=="MUNYAI"){
        document.getElementById("MUNYAIDate").innerHTML = saDate
        document.getElementById("MUNYAISign").innerHTML = `<img src="PICS/Munyai.jpg" alt="" width="100px" height="50px">`
        document.getElementById("MUNYAIDone").innerHTML = "Saved and Signed"

    }
    else{
        document.getElementById("MUNYAIPassword").value=""
        alert("Incorrect password")
    }
   
}



//THABO
document.getElementById("MABOITSHEGEButton").onclick = function(){
    
    if(document.getElementById("MABOITSHEGEPassword").value=="MABOITSHEGE"){
        document.getElementById("MABOITSHEGEDate").innerHTML = saDate
        document.getElementById("MABOITSHEGESign").innerHTML = `<img src="PICS/Maboitshege.jpg" alt="" width="100px" height="50px">`
        document.getElementById("MABOITSHEGEDone").innerHTML = "Saved and Signed"

    }
    else{
        document.getElementById("MABOITSHEGEPassword").value=""
        alert("Incorrect password")
    }
   
}

//VINCENT

document.getElementById("MONYANEButton").onclick = function(){
    
    if(document.getElementById("MONYANEPassword").value=="MONYANE"){
        document.getElementById("MONYANEDate").innerHTML = saDate
        document.getElementById("MONYANESign").innerHTML = `<img src="PICS/Monyane.jpg" alt="" width="100px" height="50px">`
        document.getElementById("MONYANEDone").innerHTML = "Saved and Signed"

    }
    else{
        document.getElementById("MONYANEPassword").value=""
        alert("Incorrect password")
    }
   
}
//AMOHELANG
document.getElementById("MAHLOPHEButton").onclick = function(){
    
    if(document.getElementById("MAHLOPHEPassword").value=="MAHLOPHE"){
        document.getElementById("MAHLOPHEDate").innerHTML = saDate
        document.getElementById("MAHLOPHESign").innerHTML = `<img src="PICS/Mahlophe.jpg" alt="" width="100px" height="50px">`
        document.getElementById("MAHLOPHEDone").innerHTML = "Saved and Signed"

    }
    else{
        document.getElementById("MAHLOPHEPassword").value=""
        alert("Incorrect password")
    }
   
}

//THILIVHALI
document.getElementById("MAMIDZAButton").onclick = function(){
    
    if(document.getElementById("MAMIDZAPassword").value=="MAMIDZA"){
        document.getElementById("MAMIDZADate").innerHTML = saDate
        document.getElementById("MAMIDZASign").innerHTML = `<img src="PICS/Mamidza.jpg" alt="" width="100px" height="50px">`
        document.getElementById("MAMIDZADone").innerHTML = "Saved and Signed"

    }
    else{
        document.getElementById("MAMIDZAPassword").value=""
        alert("Incorrect password")
    }
   
}


//SANELE
document.getElementById("SANELEButton").onclick = function(){
    
    if(document.getElementById("SANELEPassword").value=="SANELE"){
        document.getElementById("SANELEDate").innerHTML = saDate
        document.getElementById("SANELESign").innerHTML = `<img src="PICS/Nkosi Sanele.jpg" alt="" width="100px" height="50px">`
        document.getElementById("SANELEDone").innerHTML = "Saved and Signed"

    }
    else{
        document.getElementById("SANELEPassword").value=""
        alert("Incorrect password")
    }
   
}

//METSING

document.getElementById("METSINGButton").onclick = function(){
    
    if(document.getElementById("METSINGPassword").value=="METSING"){
        document.getElementById("METSINGDate").innerHTML = saDate
        document.getElementById("METSINGSign").innerHTML = `<img src="PICS/Metsing.jpg" alt="" width="100px" height="50px">`
        document.getElementById("METSINGDone").innerHTML = "Saved and Signed"

    }
    else{
        document.getElementById("METSINGPassword").value=""
        alert("Incorrect password")
    }
   
}

//SIBONELO
document.getElementById("SIBONELOButton").onclick = function(){
    
    if(document.getElementById("SIBONELOPassword").value=="SIBONELO"){
        document.getElementById("SIBONELODate").innerHTML = saDate
        document.getElementById("SIBONELOSign").innerHTML = `<img src="PICS/Zondi Sibonelo.jpg" alt="" width="100px" height="50px">`
        document.getElementById("SIBONELODone").innerHTML = "Saved and Signed"

    }
    else{
        document.getElementById("SIBONELOPassword").value=""
        alert("Incorrect password")
    }
   
}


//KAMOGELO

document.getElementById("VILAKAZIButton").onclick = function(){
    
    if(document.getElementById("VILAKAZIPassword").value=="VILAKAZI"){
        document.getElementById("VILAKAZIDate").innerHTML = saDate
        document.getElementById("VILAKAZISign").innerHTML = `<img src="PICS/Vilakazi.jpg" alt="" width="100px" height="50px">`
        document.getElementById("VILAKAZIDone").innerHTML = "Saved and Signed"

    }
    else{
        document.getElementById("VILAKAZIPassword").value=""
        alert("Incorrect password")
    }
   
}



//BRADLEY
document.getElementById("BALOYIButton").onclick = function(){
    
    if(document.getElementById("BALOYIPassword").value=="BALOYI"){
        document.getElementById("BALOYIDate").innerHTML = saDate
        document.getElementById("BALOYISign").innerHTML = `<img src="PICS/Baloyi.jpg" alt="" width="100px" height="50px">`
        document.getElementById("BALOYIDone").innerHTML = "Saved and Signed"

    }
    else{
        document.getElementById("BALOYIPassword").value=""
        alert("Incorrect password")
    }
   
}








