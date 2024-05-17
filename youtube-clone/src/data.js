export const API_KEY = 'AIzaSyCUMmRJXG3sg9lMS-ffjuGD7gNjoK-rU0c';

export const value_converter =(value)=>{
    if(value >=1000000){
        return Math.floor(value/1000000) + 'M';
    }else if(value >= 1000){
        return Math.floor(value/1000) + 'K';
    }else{
        return value;
    }
}
