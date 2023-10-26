import { get } from "https://jscroot.github.io/api/croot.js";
import {setInner,addChild } from "https://jscroot.github.io/element/croot.js";

export let URLGeoJson = "./data.json";
export let tableTag="tr";
export let tableRowClass="content is-small";
export let tableTemplate=`
<td>#TIPE#</td>
<td>#NAMA#</td>
<td>#KORDINAT#</td>
`

export function responseData(results){
    console.log(results.features);
    results.features.forEach(isiRow);
}

export function isiRow(value){
    let content=tableTemplate.replace("#TIPE#",value.geometry.type).replace("#NAMA#",value.properties.name).replace("#KORDINAT#",value.geometry.coordinates);
    console.log(content);
    addChild("lokasi",tableTag,tableRowClass,content);
}

