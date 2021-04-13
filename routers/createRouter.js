const express       = require('express')
const EventEmitter  = require('events').EventEmitter

function createRouter(Router, Model, modelName, path) {

    Router.use('/:id', (req, res, next) => {
        const {id} = req.params
        Model.findById(id)
        .then( model => {
            // not found will return null
            if (!model) {
                res.status(404).send({status: 404, message: `${modelName} not found.`})
            } else if (model) {
                req[modelName] = model
                req.id = id
                next()
            } else {
                res.status(404).send({status: 404, message: `${modelName} not found.`})
            }
        })
    })

    Router.post('/', (req, res) => {
    console.log("MODEL >>> ", Model)

        Model.sync({force: false})
            .then(() => {
                return Model.create(req.body)
            })
            .then(model => addModelLinks([model], req)[0])
            .then(model => {
                    return model
                        ? res.status(201)
                            .json({
                                status: 201,
                                message: `${modelName} created.`,
                                data: model
                            })
                        : res.status(403)
                            .json({
                                status: 403,
                                message: `Could not create ${modelName}.`
                            })
                
            })
    })

    Router.get('/', (req, res) => {
        return Model
                .findAll()
                .then(model => addModelLinks(model, req))
                .then(model => {
                    res.json(model)
                })
    })

    Router.get('/:id', (req, res) => {
        
        res.status(200)
            .json({
                status: 200,
                message: `${modelName} found.`,
                data: req[modelName]
            })     
    })

    // with sequelize, put and patch are identical
    Router.put('/:id', (req, res) => {
        const {id}    = req
        
        req[modelName]
            .update(req.body)
            .then(model => {

                return model
                        ? res.json({
                            status: 200,
                            message: `${modelName} successfully updated.`,
                            data: model.dataValues
                        })
                        : res.json({
                            status: 403,
                            message: `${modelName} could not be updated.`,
                            data: { id }
                        })
            })
    })

    Router.patch('/:id', (req, res) => {
        const {id}   = req
        const fields = Object.keys(req.body)

        // update only the data sent
        const updates = fields.reduce((carry, field) => {
            carry[field] = req.body[field]
            return carry
        }, {})
        
        req[modelName]
            .update(updates)
            .then(model => addModelLinks([model], req)[0]) // only one model, so return first index in array
            .then(model => {
                return model
                        ? res.json({
                            status: 200,
                            message: `${modelName} successfully updated.`,
                            data: {
                                model: model.dataValues,
                                fieldsUpdated: fields
                            }
                        })
                        : res.json({
                            status: 403,
                            message: `{$modelName} could not be updated.`,
                            data: {id}
                        })
            })
    })

    Router.delete('/:id', (req, res) => {
        const {id} = req
        
        req[modelName]
            .destroy()
            .then(isDeleted => {
                return isDeleted
                        ? res.json({
                                status: 204,
                                message: `${modelName} successfully deleted.`,
                                data: { id }
                            })
                        : res.json({
                                status: 403,
                                message: `${modelName} could not be deleted.`,
                                data: { id }
                            })
            })
    })

    function addModelLinks(model, req) {
        return model.map(item => {
            item.dataValues.links = {} 
            item.dataValues.links.self = `http://${req.headers.host}/${path}/${item.id}`
            return item
        })
    }

    return Router

}

module.exports = createRouter