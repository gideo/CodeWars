// 7kyu - Driving License
// In the United Kingdom, the driving licence is the official document which 
// authorises its holder to operate various types of motor vehicle on highways 
// and some other roads to which the public have access. In England, Scotland and 
// Wales they are administered by the Driver and Vehicle Licensing Agency (DVLA) 
// and in Northern Ireland by the Driver & Vehicle Agency (DVA). A driving 
// licence is required in the UK by any person driving a vehicle on any highway 
// or other road defined in s.192 Road Traffic Act 1988[1] irrespective of 
// ownership of the land over which the road passes, thus including many which 
// allow the public to pass over private land; similar requirements apply in 
// Northern Ireland under the Road Traffic (Northern Ireland) Order 1981. 
// (Source Wikipedia) 

function driver = ([first,mid,last,b,gender]) => {
  let sur = `${`${last.slice(0,5)}99999`.slice(0,5)}`.toUpperCase();
  let dec = b[b.length-2];
  let mon = `0${new Date(b).getMonth()+1 + (gender === 'F' ? 50 : 0)}`.slice(-2);
  let year = b[b.length-1], date = b.slice(0,2);
  let init = `${first[0]||''}${mid[0]||''}99`.slice(0,2);
  let arb = '9', check = 'AA';
  
  return `${sur}${dec}${mon}${date}${year}${init}${arb}${check}`;
}