export function chooseOneAtRandom(items) {

  if (items instanceof Array) {

    return items[ Math.floor( Math.random() * items.length )];

  } else if (items instanceof Object) {

    var keys = Object.keys(items);
    return keys[ Math.floor( Math.random() * keys.length )];

  }

  return null;

}
