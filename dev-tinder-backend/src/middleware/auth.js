

const adminAuth = (req, res, next) => {
    const token = 'xyz';
    const isAuthorized = token === 'xyz';
    if (!isAuthorized)
        res.status(401).send("admin user is unathorised")
    else
        next()
}

const userAuth = (req, res , next) => {
    const token = 'xyz';
    const isAuthorized = token === 'xyz';
    if (!isAuthorized)
        res.status(401).send("admin user is unathorised")
    else
        next()
}

module.exports = {adminAuth, userAuth};