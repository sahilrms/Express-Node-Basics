const http=require('http')
const PORT=3000;
const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        res.statusCode=200;
        res.setHeader("content-type","text/html");
        res.write("Welcome to the men and women dummy data");
        res.end();
    }
    else if(req.url==="/men"){
        res.statusCode=200;
        res.setHeader("content-type","application/json");
        res.write(JSON.stringify([{"item_code":1,"name":"shirt","size":"m","price":250},{"item_code":2,"name":"Jeans pant","size":"xl","price":500}]));
        res.end();
    }
    else if(req.url==="/women"){
        const women=[{"item_code":1,"name":"top","size":"m","price":250},{"item_code":2,"name":"skirt","size":"xl","price":500}]
        res.statusCode=200;
        res.setHeader("content-type","application/json");
        res.write(JSON.stringify(women));
        res.end();
    }
    else if(req.url==="/other"){
        res.statusCode=200;
        const other=[{"item_code":1,"name":"kids shirt","size":"m","price":250},{"item_code":2,"name":"kids Jeans pant","size":"xl","price":500}]
        res.setHeader("content-type","application/json");
        res.write(JSON.stringify(other));
        res.end();
    }
    else{
        res.statusCode=200;
        res.setHeader("content-type","text/html");
        res.write("wrong path");
        res.end();
    }
    
    
});

server.listen(PORT,() => {
    console.log(`Server running at http://localhost:${PORT}/`);
  });


