# Codus.JS       

## Description             

Library to improve own experience working with JS.

Current version: **1.0.2**

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