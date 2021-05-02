
class DBAdapter {
    constructor() {
    }
    // For now is just allow for posts
    paginate(module, searchQuery, paginateQuery) {
        return new Promise((resolve, reject) => {
            module.paginate(searchQuery, paginateQuery, (err, document) => {
                if (err) reject(err);
                resolve(document);
            })
        });
    }

    find(module) {
        return new Promise((resolve, reject) => {
            module.find({}, (err, document) => {
                if (err) reject(err);
                resolve(document);
            })
        });
    }

    findById(module, elementId) {
        return new Promise((resolve, reject) => {
            module.findById(elementId, (err, document) => {
                if (err) reject(err);
                resolve(document);
            })
        });
    }

    findManyById(module, elementIds) {
        return new Promise((resolve, reject) => {
            module.find({_id: {$in: elementIds}}, (err, document) => {
                if (err) reject(err);
                resolve(document);
            })
        })
    }

    join(module, moduleField, childModuleName, childField) {
        return new Promise((resolve, reject) => {
            module.aggregate(
                [{
                    $lookup:
                        {
                            from: childModuleName,
                            localField: moduleField,
                            foreignField: childField,
                            as: `${childModuleName}`
                        }
                    }],
                (err, document) => {
                    if (err) reject(err);
                    resolve(document);
            }
            )
        })
    }

    save(module, element) {
        return new Promise((resolve, reject) => {
            const newPost = new module(element);
            newPost.save((err, document) => {
                if (err) reject(err);
                resolve(document);
            });
        });
    }

    updateOne(module, elementId, element) {
        return new Promise((resolve, reject) => {
            module.updateOne({'_id': elementId}, element, (err, document) => {
                if (err) reject(err);
                resolve(document);
            });
        });
    }

    deleteOne(module, elementId) {
        return new Promise(((resolve, reject) => {
            module.deleteOne({'_id': elementId}, (err, document) => {
                if (err) reject(err);
                resolve(document);
            })
        }))
    }
}

export default DBAdapter;