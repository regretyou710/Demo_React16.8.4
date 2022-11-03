const express = require('express')
const app = express()

app.use((request,response,next)=>{
	console.log('有人請求服務器2了');
	next()
})

app.get('/cars',(request,response)=>{
	const cars = [
		{id:'001',name:'奔馳',price:199},
		{id:'002',name:'馬自達',price:109},
		{id:'003',name:'捷達',price:120},
	]
	response.send(cars)
})

app.listen(5001,(err)=>{
	if(!err) console.log('服務器2啟動成功了,請求汽車信息地址為：http://localhost:5001/cars');
})
