require("dotenv").config()
const fetch = require("node-fetch")
//Каждые 100 миллисикунд отправляем рандомную сущность


setInterval(sendEntity, 100)

function generateRandomEntity(){
    const entity = {}
    for(let i = 0; i < 21; i++){
        if(i === 0) {
            entity.id = Math.floor(Math.random() * (20 - 1) + 1)
            continue
        }
        entity[`value${i}`] = Math.random() * (1 + 1) - 1
    }
    return entity
}

async function sendEntity() {
    const body = JSON.stringify(generateRandomEntity())
    try{
        await fetch(process.env.URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body
        })
    }
    catch(err){
        console.log(err)
    }

}


