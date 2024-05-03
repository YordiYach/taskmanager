import { Sequelize } from "sequelize";

const sequelize = new Sequelize(process.env.MYSQL_URL||'mysql://root:khxTMGJmYrANwqDmXtdxWCSGhvpEOYai@roundhouse.proxy.rlwy.net:33406/railway');

export default sequelize;