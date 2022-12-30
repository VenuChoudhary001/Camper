const data={
    "campgrounds":[
        {
            "_id":"X1nW12ce2",
            "name":"Carisbad State Beach",
            "city":"California",
            "city_symbol":"CA"
        },
        {
            "_id":"Z1nW12ce111",
            "name":"Leo Carrilla",
            "city":"California",
            "city_symbol":"CA"
        },
        {
            "_id":"01nW12ce111",
            "name":"San Clemente",
            "city":"California",
            "city_symbol":"CA"
        },
        {
            "_id":"A1nW12ce111",
            "name":"Dohney State Beach",
            "city":"California",
            "city_symbol":"CA"
        },
        {
            "_id":"N1nW12ce111",
            "name":"Doolittle Campground",
            "city":"Los Angeles",
            "city_symbol":"LA"
        },
        {
            "_id":"P1nW12ce111",
            "name":"Dove Campground and Park",
            "city":"New York",
            "city_symbol":"NYC"
        }
    ]
}


export default function(req,res){
    try {
        if(req.method=='GET'){
            let {slug,city}=req.query;
            console.log(slug)
            let nearBy=data.campgrounds.filter(item=>item.city==city && item._id!=slug);
            return res.status(200).json({data:nearBy})
        }
    } catch (error) {
        
    }
    
}   