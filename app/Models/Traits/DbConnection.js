
class DbConnection {
    register(Model) {
        // console.log(Model)

        Model.dbConnection = function (conn = 'pg') {

            console.log(conn)
            this.conn = conn
            return this
        }
    }
}

module.exports = DbConnection;
