import { remote } from "electron";
import path from 'path';
import { DataTypes, Model, Sequelize } from 'sequelize';


const univ_db = path.join(remote.app.getPath("userData"), "database.db")

// set up the connection to make sure it works
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: univ_db,
    logging: (process.env.NODE_ENV !== 'production'),
    define: {
        timestamps: false,
        underscored: true,
    },
});

// define models here, or use a separate file for defining
// models and import them here!!!
class Topic extends Model {
    id
    name
}
Topic.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: "topic",
    sequelize,
    timestamps: true,
    updatedAt: "updated_at",
    createdAt: "created_at"
})

sequelize.sync({alter: true})

export { sequelize, Topic };