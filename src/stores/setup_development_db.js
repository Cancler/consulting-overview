const {Topic, Setting, Audience, Age} = require("@/stores/db");

export const setup_db = () => {
    Age.destroy({
        where: {},
        truncate: true
    });
    Age.bulkCreate([
        {from: 6, to: 9},
        {from: 9, to: 12},
        {from: 12, to: 14},
        {from: 14, to: 16},
        {from: 16, to: 18},
        {from: 18, to: 25},
        {from: 6},
        {from: 7},
        {from: 8},
        {from: 9},
        {from: 10},
        {from: 11},
        {from: 12},
        {from: 13},
        {from: 14},
        {from: 15},
        {from: 16},
        {from: 17},
        {from: 18},
        {from: 19},
        {from: 20},
        {from: 21},
        {from: 22},
        {from: 23},
        {from: 24},
        {from: 25},
        {from: 26},
        {from: 27}
    ])

    Topic.destroy({
        where: {},
        truncate: true
    });
    Topic.bulkCreate([
        {name: "Arbeitslosigkeit"},
        {name: "Ausgrenzung"},
        {name: "Drogen"},
        {name: "Essstörung"},
        {name: "Extremismus"},
        {name: "familiäre Probleme"},
        {name: "Gender"},
        {name: "Geschlechterspezifisch"},
        {name: "Gewalt"},
        {name: "Interkultur"},
        {name: "Leistungsdruck"},
        {name: "Mobbing/Cybermobbing"},
        {name: "Onlinesexting"},
        {name: "persönliche Probleme"},
        {name: "physische Gewalt"},
        {name: "psychische Gewalt"},
        {name: "Religion"},
        {name: "Schulabstinenz"},
        {name: "Schulangst"},
        {name: "selbstverletzendes Verhalten"},
        {name: "Sexualität"},
        {name: "Sonstiges"},
        {name: "soziales Kompetenztraining"},
        {name: "soziales Verhalten"}
    ]);
    Setting.destroy({
        where: {},
        truncate: true
    });
    Setting.bulkCreate([
        {name: "Erziehungsberechtigte"},
        {name: "Familienberatung"},
        {name: "Gruppenberatung"},
        {name: "Hortler:innen"},
        {name: "Kind/ Jugendliche:r"},
        {name: "Kinder und Erziehungsberechtigte"},
        {name: "Lehrer:innen"},
        {name: "Lehrer:innen und Erziehungsberechtigte"},
        {name: "Lehrer:innen und Kind/ Jugendliche:r"}
    ])

    Audience.destroy({
        where: {},
        truncate: true
    });
    Audience.bulkCreate([
        {name: "Erziehungsberechtigte"},
        {name: "Familie"},
        {name: "Hortler:innen"},
        {name: "junge Erwachsene"},
        {name: "Kind und Erziehungsberechtigte"},
        {name: "Kinder und Jugendliche"},
        {name: "Lehrer:innen"}
    ])
};