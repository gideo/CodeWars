// 7kyu - Day of The Week

// Oh no! I need to find out what day it is on a few particular dates. Help me 
// figure it out. Return either Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, 
// or Saturday.

// Dates may be passed in as strings or as Objects.

let getDayOfTheWeek = date => ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][new Date(date).getDay()];