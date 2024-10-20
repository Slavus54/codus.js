# Codus.JS       

## Description             

Library to improve own experience working with JS.

Current version: **1.1.0**

## Links

To download - *https://www.npmjs.com/package/codus.js* 

To look code - *https://github.com/Slavus54/codus.js* 

## History


## Getting Started         

~~~
import {Codus} from 'codus.js'     

const codus = new Codus()   
~~~

## Examples



## Methods     

--- **haversine** (*lat1*, *long1*, *lat2*, *long2*) : calculates distance beetween 2 dots on Earth and returns result in km.         

--- **cords** (*e*) : makes easier working with MapboxGL API by return an object with coordinates.      

--- **search** (*original* = '', *toCompare* = '', *percent* = 5e1, *startFromBeginning* = false) : searching text by comparing string with substring by filters (% and position to start of comparing).     

--- **short** (*text* = '', *words* = 3) : slices text with size by *words* and returns it.  

--- **round** (*num* = 1, *digit* = 0) : rounding number and returns integer or float rounded by *digit*   

--- **percent** (*value* = 0, *total* = 1e1, *round* = 0) : return rounded number generated by % of *total*.             

--- **part** (*value* = 0, *total* = 1e1, *round* = 0) : return % number generated by value of *total*.  

--- **random** (*list* = [], *shift* = 0) : return randomly choosen value of *list* with slicing % of array's elements from left side by *shift* parameter. 

--- **card** (*text* = '', *isConvert* = true) : return text converted into card number or vice versa.    

--- **calories** (*weight* = 7e1, *distance* = 5e2, *pulse* = 11e1, *round* = 0) : return number of burned calories by running *distance* in km.    

--- **debounce** (*func*, *timestamp* = 5e2) : return function with an interval.

--- **go** (*url* = '') : open browser's folder with source by *url*.   

--- **copy** (*text* = '') : copy message by *text* and save it in clipboard. 

--- **cash** (*change* = 1e3, *coins* = []) : counts number of different coins to pay *change* and return an object with residue and number of coins {change, values}.    

--- **mutateObject** (*object* = {}, *properties* = [], *values* = []) : change values of object's properties with an array and return updated object.    

--- **splice** (*list* = [], *borders* = [], *values* = [], *check* = null) : update elements of array inside index *borders* with *values* if *check* expression is valid.  

--- **is** (*obj1* = {}, *obj2* = {}, *round* = 0) : return % of objects similarity.            

--- **depth** (*list* = [], *position* = 1) : return level of array's depth.            

--- **objectFilter** (*obj* = {}, *type* = 'string') : return object only with *type* of property's value.      

--- **filterArrayByDigit** (*list* = [], *index* = 1, *value* = 1) : validate each array number by check *value* equal to digit of number by *index* and return list of numbers.        

--- **reverseObject** (*obj* = {}) : exchange key and value in each property of object and return object.      

--- **textSubstring** (*text* = '', *substring* = '') : counts number of word includes *substring* and return it.   

--- **binary** (*num* = null, *isConvert* = true) : convert decimal number to binary (by default) or binary to number.  

--- **getObjectProperty** (*obj* = {}, *properties* = []) : get object's property by array of keys. 

--- **sum** (*list* = [], *isEven* = null, *min* = 0, *max* = 1e6) : return sum of elements after filtering by *isEven* and borders.    

--- **wordEnd** (*num* = 1, *base* = 'поезд', *isLessHalf*= 'а', *isMoreHalf* = 'ов') : set right ending of noun word with its numeral in slavic languages. 

--- **countSpacesByWordsLength** (*text* = '', *min* = 1, *max* = 1e1) : return num of spaces which near words have length inside borders.  

--- **filterObjectProperties** (*obj* = {}, *text* = '') : filter properties of object by including *text* and returns cut off object.  

--- **findUppercasePart** (*text* = '', *round* = 0) : return rounded % of uppercase words in text.  