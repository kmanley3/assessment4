// let classes = ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Sorcerer", "Warlock", "Wizard"]
let classes = require('./database.json')
let globalID = 13

module.exports = {
    getClasses: (req, res) => {
        res.status(200).send(classes)
    },
    deleteClass: (req, res) => {
        let index = classes.findIndex(elem => elem.id === +req.params.id)
        classes.splice(index, 1)
        res.status(200).send(movies)
    },
    createClass: (req, res) => {
        const {name, magic} = req.body
        let newClass = {
            id: globalID,
            name,
            magic
        }
        classes.unshift(newClass)
        globalID++
        res.status(200).send(classes)
    },
    editClass: (req, res) => {
        const {id} = req.params
        const {type} = req.body
        let index = classes.findIndex(elem => elem.id === +req.params.id)
        console.log(type);
        if(type === 'arcane'){
            classes[index].magic = 'Arcane'
            res.status(200).send(classes)
        } else if (type === 'holy') {
            classes[index].magic = 'Holy'
            res.status(200).send(classes)
        } else if (type === 'nature'){
            classes[index].magic = 'Nature'
            res.status(200).send(classes)
        } else if (type === 'none') {
            classes[index].magic = 'none'
            res.status(200).send(classes)
        } else {
            res.status(400).send("Aw crap! Something went wrong! :(")
        }
    }
}