import React, { useState } from 'react'

function timeToShow (type, date){
    const year = date.slice(0,4)
    const month = date.slice(5,7)
    const day = date.slice(8,10)
    if (type == "input-date") {
        return `${year}-${day}-${month}`
    }
    console.log(date);

}

export default timeToShow