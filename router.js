let express = require('express');
let router = express.Router();

let conn = require('./db')

router.get('/api/get/hotgoods',(req,res)=>{
    let sqlStr = 'select * from hotgoods';
    conn.query(sqlStr,(err,results)=>{
        if(err){
            res.json({code:0,msg:'获取数据失败'})
        }else{
            res.json({code:1,hotgoods:results})
        }
    })
})

router.get('/api/get/goods',(req,res)=>{
    let pageIndex=req.query.pageIndex;
    let sqlStr
    if(pageIndex==1){
        sqlStr = 'select * from goods where pageIndex=1';
    }
    else if(pageIndex==2){
        sqlStr = 'select * from goods where pageIndex=2';
    }
    else if(pageIndex==3){
        sqlStr = 'select * from goods where pageIndex=3';
    }

    conn.query(sqlStr,(err,results)=>{
        if(err){
            res.json({code:0,msg:'获取数据失败'})
        }else{
            res.json({code:1,goods:results,total:18})
        }
    })
})

// router.get('/api/get/cateimage',(req,res)=>{
//     let url = document.URL
//     let num = url.match(/\d+/g);
//     console.log(str)
//     let sqlStr = 'select * from cateimage';
//     conn.query(sqlStr,(err,results)=>{
//         if(err){
//             res.json({code:0,msg:'获取数据失败'})
//         }else{
//             res.json({code:1,cateimage:results})
//         }
//     })
// })

router.get('/api/get/banner',(req,res)=>{
    let sqlStr = 'select * from banner';
    conn.query(sqlStr,(err,results)=>{
        if(err){
            res.json({code:0,msg:'获取数据失败'})
        }else{
            res.json({code:1,banner:results})
        }
    })
})

router.get('/api/get/picscate',(req,res)=>{
    let sqlStr = 'select * from picscate';
    conn.query(sqlStr,(err,results)=>{
        if(err){
            res.json({code:0,msg:'获取数据失败'})
        }else{
            res.json({code:1,picscate:results})
        }
    })
})

router.get('/api/get/newslist',(req,res)=>{
    let sqlStr = 'select * from newslist';
    conn.query(sqlStr,(err,results)=>{
        if(err){
            res.json({code:0,msg:'获取数据失败'})
        }else{
            res.json({code:1,newslist:results})
        }
    })
})











router.post('/api/insert',(req,res)=>{
    conn.query('insert into message set?',req.body,(err,results)=>{
        if(err){
            res.json({code:0,msg:'插入数据失败'})
        }else{
            res.json({code:1,msg:'插入成功'})
        }
    })
})

router.post('/api/del',(req,res)=>{
    conn.query('delete from message where id=?',[req.body,id],(err,result)=>{
        if(err){
            res.json({code:0,msg:'删除数据失败'})
        }else{
            res.json({code:1,msg:'删除成功'})
        }
    })
})

module.exports=router