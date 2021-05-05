


const labelMap = {
    1:{name:'T-shirt', color:'red'},
    2:{name:'Shirt', color:'yellow'},
    3:{name:'Pants', color:'lime'},
    4:{name:'Short', color:'blue'},
    5:{name:'Jackets', color:'green'},
}


export const drawRect = (boxes, classes, scores, threshold, imgWidth, imgHeight, ctx)=>{
    for(let i=0; i<=boxes.length; i++){
        if(boxes[i] && classes[i] && scores[i]>threshold){
            
            const [y,x,height,width] = boxes[i]
            const text = classes[i]
            
            if(text==5){
                console.log("jacket")
                
            } else if (text==4){
                console.log("short")
            } else if (text==3){
                console.log("pants")
            } else if (text==2){
                console.log("shirt")
            } else if (text==1){
                console.log("t-shirt")
            }
              if(scores >= 0.4 && text==5)
              {
                
                    
                     console.log("1")
              }
            

           
            ctx.strokeStyle = labelMap[text]['color']
            ctx.lineWidth = 10
            ctx.fillStyle = 'white'
            ctx.font = '30px Arial'         
            
           
            ctx.beginPath()
            ctx.fillText(labelMap[text]['name'] + ' - ' + Math.round(scores[i]*100)/100, x*imgWidth, y*imgHeight-10)
            ctx.rect(x*imgWidth, y*imgHeight, width*imgWidth*2/3, height*imgHeight*2/3);
            ctx.stroke()
        }
    }
}