import { Sequelize } from "sequelize";

const sequelize = new Sequelize('todoschema','root','Comarsa', {
    host: 'localhost',
    dialect: 'mysql',
})

export default sequelize;