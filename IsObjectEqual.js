const o1 = { question: null, answer: 42, };
const o2 = { answer: 42, question: null,  name:'Genry'};

function isEqual(o1, o2){
    let arr = []
    if(Object.keys(o1).length === Object.keys(o2).length){
        for(key in o1){
            if(o2.hasOwnProperty(key)){
                  if(o2[key] === o1[key]){
                   arr.push(key)
                }
            }
        }
    }
      return Object.keys(o1).length === arr.length?true: false
}
isEqual(o1, o2)
