# Codus.JS       

## Description             

Library to improve own experience working with JS.

Current version: **1.0.4**

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

--- **round** (*num* = 1e1, *residue* = 0) : rounding number and returns integer or rounded up to *residue* index (numbers of digits after a point).    

--- **percent** (*value* = 0, *total* = 1e1, *round* = 0) : return rounded number generated by % of *total*.             

--- **part** (*value* = 0, *total* = 1e1, *round* = 0) : return % number generated by value of *total*.  

--- **random** (*list* = [], *shift* = 0) : return randomly choosen value of *list* with slicing % of array's elements from left side by *shift* parameter. 

--- **card** (*text* = '', *isConvert* = true) : return text converted into card number or vice versa.    

--- **calories** (*weight* = 7e1, *distance* = 5e2, *pulse* = 11e1, *round* = 0) : return number of burned calories by running *distance* in km.        