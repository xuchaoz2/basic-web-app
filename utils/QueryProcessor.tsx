export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("andrew id")) {
    return (
      "My Andrew ID is xuchaoz."
    );
  }
  if (query.toLowerCase().includes("your name")) {
    return (
      "My name is Xuchao Zhou."
    );
  }

  const addMatch = query.match(/What is (\d+) plus (\d+)/);
  if (addMatch) {
    const x: number = parseInt(addMatch[1]);
    const y: number = parseInt(addMatch[2]);
    return (x+y).toString();
  }

  const minusMatch = query.match(/What is (\d+) minus (\d+)/);
  if (minusMatch) {
    const x: number = parseInt(minusMatch[1]);
    const y: number = parseInt(minusMatch[2]);
    return (x-y).toString();
  }

  /**const findLargest = query.matchAll(/Which of the following numbers is the largest: ((\d+), )* (\d+) ?/); 
  if (findLargest) {
    var x: number = 0;
    for(var i: number = 0; i < parse(findLargest)
    return (x+y).toString();
  }**/

  const multMatch = query.match(/What is (\d+) multiplied by (\d+)/);
  if (multMatch) {
    const x: number = parseInt(multMatch[1]);
    const y: number = parseInt(multMatch[2]);
    return (x*y).toString();
  }

  const powerMatch = query.match(/What is (\d+) to the power of (\d+)/);
  if (powerMatch) {
    const x: number = parseInt(powerMatch[1]);
    const y: number = parseInt(powerMatch[2]);
    return (Math.pow(x, y)).toString();
  }
  
  return "";
}
