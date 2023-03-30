import { defineStore } from 'pinia';
import { ref } from "vue";
import { Age } from "@/stores/db";

export const useAgeStore = defineStore("age", () => {
    const ages = ref([]);

    const loadAges = async () => {
        ages.value = await Age.findAll();
    };
    const addAge = async (from, to) => {
        const age = await Age.create({
            from: from,
            to: to
        });
        ages.value.push(age);
    };
    const deleteAgeById = async (id) => {
        await Age.destroy({
            where: {
                id: id
            }
        });
        const age_to_remove_index = ages.value.findIndex(age => {
            return age["id"] === id;
        });
        ages.value.splice(age_to_remove_index, 1);
    };
    const getAgeById = async (id) => {
        return await Age.findByPk(id);
    };
    const updateAgeById = async (id, name, from, to) => {
        await Age.update({
            from: from,
            to: to
        }, {
            where: {
                id: id
            }
        });
        const age = ages.value.find(age => {
            return age["id"] === id;
        });
        age.from = from;
        age.to = to
    };

    return {
        ages,
        loadAges,
        addAge,
        deleteAgeById,
        getAgeById,
        updateAgeById
    };
});