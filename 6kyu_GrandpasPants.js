// 6 kyu - Grandpa's pants

// Description:

// In this Kata you have to sort through a pile of clothes and find your grandfathers 
// pants. You have to wash the ones that don't smell fresh and store the fresh ones in 
// the closet.

// Each piece of clothing will belong to a person. You have to call the wash() method on 
// all the dirty grandpa's pants and store() on the clean ones. Any smell other than 
// 'Fresh' will be considered to be dirty. Ignore any clothes that are not pants worn by 
// your grandpa. For example, don't touch your grandpa's socks, no matter if they are 
// clean or not.

// Note: wash() and store() methods modify the inStorage and inWashing properties of the 
// Clothes class. If you want, you can modify these directly.

function store(item) {
  item.inStorage = true;
  item.inWashing = false;
}

function wash(item) {
  item.inWashing = true;
  item.inStorage = false;
}

function doNothing(item) {
  item.inWashing = false;
  item.inStorage = false;
}

function sortTheLaundry(laundry)
{
  for(let i = 0; i < laundry.length; i++){
    if(laundry[i].owner === "Grandpa" && laundry[i].type === "Pants")
      (laundry[i].smell === "Fresh") ? store(laundry[i]) : wash(laundry[i]);
    else
      doNothing(laundry[i]);
  }
}