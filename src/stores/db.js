// ############################################################################

import { remote } from "electron";
import path from 'path';
import {DataTypes, Model, Sequelize} from 'sequelize';
import * as Console from "console";

// ############################################################################

const db = path.join(remote.app.getPath("userData"), "database.db");

// ############################################################################

// set up the connection to make sure it works
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: db,
    logging: (process.env.NODE_ENV !== 'production'),
    define: {
        timestamps: false,
        underscored: true,
    },
});

// ############################################################################

class Topic extends Model {
    id
    name

    constructor(values, options) {
        super(values, options);

        this.id = this.getDataValue('id');
        this.name = this.getDataValue('name');
    }
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
});

// ############################################################################

class Setting extends  Model {
    id
    name

    constructor(values, options) {
        super(values, options);

        this.id = this.getDataValue("id");
        this.name = this.getDataValue("name");
    }
}
Setting.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    tableName: "setting",
    sequelize,
    timestamps: true,
    updatedAt: "updated_at",
    createdAt: "created_at"
});

// ############################################################################

class Age extends Model {
    id
    from
    to

    constructor(values, options) {
        super(values, options);

        this.id = this.getDataValue("id");
        this.from = this.getDataValue("from");
        this.to = this.getDataValue("to");
    }
}
Age.init({
    from: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    to: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true
    }
}, {
    tableName: "age",
    sequelize,
    timestamps: true,
    updatedAt: "updated_at",
    createdAt: "created_at"
});

// ############################################################################

class Audience extends Model {
    id
    name

    constructor(values, options) {
        super(values, options);

        this.id = this.getDataValue("id");
        this.name = this.getDataValue("name");
    }
}
Audience.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: "audience",
    sequelize,
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at"
});

// ############################################################################

class Appointment extends Model {
    id
    title

    constructor(values, options) {
        super(values, options);

        this.id = this.getDataValue("id");
        this.title = this.getDataValue("title");
    }
}
Appointment.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: "appointment",
    sequelize,
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at"
});

// ############################################################################

class Consulting extends Model {
    id
    topic_id
    setting_id
    audience_id
    age_id
    child_count
    parent_count
    teacher_count
    m_count
    w_count
    d_count
    note
    is_crisis

    constructor(values, options) {
        super(values, options);

        this.id = this.getDataValue("id");
        this.topic_id = this.getDataValue("topic_id");
        this.setting_id = this.getDataValue("setting_id");
        this.audience_id = this.getDataValue("audience_id");
        this.age_id = this.getDataValue("age_id");
        this.child_count = this.getDataValue("child_count");
        this.parent_count = this.getDataValue("parent_count");
        this.teacher_count = this.getDataValue("teacher_count");
        this.m_count = this.getDataValue("m_count");
        this.w_count = this.getDataValue("w_count");
        this.d_count = this.getDataValue("d_count");
        this.note = this.getDataValue("note");
        this.is_crisis = this.getDataValue("is_crisis");
    }
}
Consulting.init({
    child_count: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        defaultValue: 0
    },
    parent_count: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        defaultValue: 0
    },
    teacher_count: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        defaultValue: 0
    },
    m_count: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        defaultValue: 0
    },
    w_count: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        defaultValue: 0
    },
    d_count: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        defaultValue: 0
    },
    note: {
        type: DataTypes.STRING,
        allowNull: true
    },
    is_crisis: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}, {
    tableName: "consulting",
    sequelize,
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
})
Consulting.hasOne()

// ############################################################################

Topic.sync({alter: true})
Setting.sync({alter: true})
Age.sync({alter: true})
Audience.sync({alter: true})
Appointment.sync({alter: true})
Consulting.sync({alter: true})

// ############################################################################

export { sequelize, Topic, Setting, Age, Audience, Appointment };