import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform { 
   
  transform(value: any, filterName: string ): any {
     
     if(value.length===0){
         return value;
     }
     const foodItems=[];
     for(const item of value){
       if(item['name'].toLowerCase().startsWith(filterName.toLowerCase())){
         foodItems.push(item);
       }
     } 
     return foodItems;
  }

}
