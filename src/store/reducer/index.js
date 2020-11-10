import image_1 from '../../assets/image 1.jpg'  
import image3 from '../../assets/image3.jpg' 
import image2 from '../../assets/house1.jpg' 
import image4 from '../../assets/car1.jpg' 
import image5 from '../../assets/watch3.jpg' 
import image6 from '../../assets/5.jpg' 
import image7 from '../../assets/7.png' 
import image8 from '../../assets/sofa2.jpg' 
import image9 from '../../assets/bed1.jpg' 
import image10 from '../../assets/cat2.jpg' 
const INTIAL_STATE ={
 record:{
     A37 :{
        name: "Oppo A37",
        detail: "GooD condition , 2gb Ram , 16 Hard  and High Quailty Camera 13Mpx",
        img : image_1
    },
    
    "/2" : {
        name: "Oppo A97",
        detail: "GooD condition , 2gb Ram , 16 Hard  and High Quailty Camera 13Mpx",
        img : image3
    },
    "/3" : {
        name: "Oppo A971",
        detail: "GooD condition , 2gb Ram , 16 Hard  and High Quailty Camera 13Mpx",
        img : image2
    },
    "/4" : {
        name: "Oppo A972",
        detail: "GooD condition , 2gb Ram , 16 Hard  and High Quailty Camera 13Mpx",
        img : image4
    },
    "/5" :{
        name: "Oppo A37",
        detail: "GooD condition , 2gb Ram , 16 Hard  and High Quailty Camera 13Mpx",
        img : image5
    },
    
    6 : {
        name: "Oppo A97",
        detail: "GooD condition , 2gb Ram , 16 Hard  and High Quailty Camera 13Mpx",
        img : image6
    },
    7 : {
        name: "Oppo A97",
        detail: "GooD condition , 2gb Ram , 16 Hard  and High Quailty Camera 13Mpx",
        img : image7
    },
    8 : {
        name: "Oppo A97",
        detail: "GooD condition , 2gb Ram , 16 Hard  and High Quailty Camera 13Mpx",
        img : image8
    },
    9 :{
        name: "Oppo A37",
        detail: "GooD condition , 2gb Ram , 16 Hard  and High Quailty Camera 13Mpx",
        img : image9
    },
    
    "10" : {
        name: "Oppo A97",
        detail: "GooD condition , 2gb Ram , 16 Hard  and High Quailty Camera 13Mpx",
        img : image10
    },
    "11" : {
        name: "Oppo A97",
        detail: "GooD condition , 2gb Ram , 16 Hard  and High Quailty Camera 13Mpx",
        img : image3
    },
    "12" : {
        name: "Oppo A97",
        detail: "GooD condition , 2gb Ram , 16 Hard  and High Quailty Camera 13Mpx",
        img : image5
    },
   current_item : {}
 }

}

export default (state= INTIAL_STATE, Action)=> {
    switch(Action.type){
        case "SETITEM":
            return({
                ...state,
                current_item: Action.payload

            })
        }

    console.log("action ==>" + Action)
    return state;
}