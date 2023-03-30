// ############################################################################

import { remote } from "electron";
import path from 'path';
import {DataTypes, Model, Sequelize} from 'sequelize';

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
    age_id
    topic_id
    setting_id
    audience_id
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
        this.age_id = this.getDataValue("age_id");
        this.topic_id = this.getDataValue("topic_id");
        this.setting_id = this.getDataValue("setting_id");
        this.audience_id = this.getDataValue("audience_id");
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

// ############################################################################

Age.hasMany(Consulting, {
    foreignKey: {
        allowNull: false,
        name: "age_id"
    }
});
Consulting.belongsTo(Age);

Topic.hasMany(Consulting, {
    foreignKey: {
        allowNull: false,
        name: "topic_id"
    }
});
Consulting.belongsTo(Topic);

Setting.hasMany(Consulting, {
    foreignKey: {
        allowNull: false,
        name: "setting_id"
    }
});
Consulting.belongsTo(Setting);

Audience.hasMany(Consulting, {
    foreignKey: {
        allowNull: false,
        name: "audience_id"
    }
})
Consulting.belongsTo(Audience);

// ############################################################################

Topic.sync({alter: true})
Setting.sync({alter: true})
Age.sync({alter: true})
Audience.sync({alter: true})
Appointment.sync({alter: true})
Consulting.sync({alter: true})

// const setup_db = async () => {
//     // await Age.destroy({
//     //     where: {},
//     //     truncate: true
//     // });
//     await Age.bulkCreate([
//         {from: 6, to: 9},
//         {from: 9, to: 12},
//         {from: 12, to: 14},
//         {from: 14, to: 16},
//         {from: 16, to: 18},
//         {from: 18, to: 25},
//         {from: 6},
//         {from: 7},
//         {from: 8},
//         {from: 9},
//         {from: 10},
//         {from: 11},
//         {from: 12},
//         {from: 13},
//         {from: 14},
//         {from: 15},
//         {from: 16},
//         {from: 17},
//         {from: 18},
//         {from: 19},
//         {from: 20},
//         {from: 21},
//         {from: 22},
//         {from: 23},
//         {from: 24},
//         {from: 25},
//         {from: 26},
//         {from: 27}
//     ])
//
//     // await Topic.destroy({
//     //     where: {},
//     //     truncate: true
//     // });
//     await Topic.bulkCreate([
//         {name: "Arbeitslosigkeit"},
//         {name: "Ausgrenzung"},
//         {name: "Drogen"},
//         {name: "Essstörung"},
//         {name: "Extremismus"},
//         {name: "familiäre Probleme"},
//         {name: "Gender"},
//         {name: "Geschlechterspezifisch"},
//         {name: "Gewalt"},
//         {name: "Interkultur"},
//         {name: "Leistungsdruck"},
//         {name: "Mobbing/Cybermobbing"},
//         {name: "Onlinesexting"},
//         {name: "persönliche Probleme"},
//         {name: "physische Gewalt"},
//         {name: "psychische Gewalt"},
//         {name: "Religion"},
//         {name: "Schulabstinenz"},
//         {name: "Schulangst"},
//         {name: "selbstverletzendes Verhalten"},
//         {name: "Sexualität"},
//         {name: "Sonstiges"},
//         {name: "soziales Kompetenztraining"},
//         {name: "soziales Verhalten"}
//     ]);
//     // await Audience.destroy({
//     //     where: {},
//     //     truncate: true
//     // });
//     await Audience.bulkCreate([
//         {name: "Erziehungsberechtigte"},
//         {name: "Familie"},
//         {name: "Hortler:innen"},
//         {name: "junge Erwachsene"},
//         {name: "Kind und Erziehungsberechtigte"},
//         {name: "Kinder und Jugendliche"},
//         {name: "Lehrer:innen"}
//     ])
//     // await Setting.destroy({
//     //     where: {},
//     //     truncate: true
//     // });
//     await Setting.bulkCreate([
//         {name: "Erziehungsberechtigte"},
//         {name: "Familienberatung"},
//         {name: "Gruppenberatung"},
//         {name: "Hortler:innen"},
//         {name: "Kind/ Jugendliche:r"},
//         {name: "Kinder und Erziehungsberechtigte"},
//         {name: "Lehrer:innen"},
//         {name: "Lehrer:innen und Erziehungsberechtigte"},
//         {name: "Lehrer:innen und Kind/ Jugendliche:r"}
//     ])
//
//
// };
// setup_db()

// ############################################################################

export { sequelize, Topic, Setting, Age, Audience, Appointment, Consulting };