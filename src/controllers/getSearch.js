const { Sequelize } = require("sequelize")
const {Plan,User} = require("../db")

const getSearch= async (req,res)=>{
try {
    const {search}=req.query
    console.log(req.query)
    if(!search) return res.status(400).send('Falta Palabra busqueda')
    let p = await Plan.findAll({
        where: {
          [Sequelize.Op.or]: [
            { title: { [Sequelize.Op.iLike]: `%${search}%` } },
            {tags: { [Sequelize.Op.iLike]: `%${search}%`}
            }
          ]
        }
      });
    if(p.length===0) {
        return res.send([])
    }
    return res.json(p)
}
catch(error){
    return res.status(500).json(error.message)
}

}
module.exports=getSearch
