// M1 Ternory operator
function SeetAlarm(employed : boolean, vacation : boolean) : boolean{
    return employed == vacation ? false : employed == false && vacation == true ? false
    : employed == false && vacation == false ? false : true
  }


 
        // M2 if else conditions
    function SetAlarm(employed : boolean, vacation : boolean) : boolean{
        if(employed == true && vacation == true)
        return false
      else if(employed == false && vacation == true)
        return false
      else if (employed == false && vacation == false)
        return false
      else return true
      }
    