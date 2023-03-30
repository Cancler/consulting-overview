import { defineStore } from 'pinia';
import { ref } from "vue";
import { Audience } from "@/stores/db";

export const useAudienceStore = defineStore("audience", () => {
    const audiences = ref([]);

    const loadAudiences = async () => {
        audiences.value = await Audience.findAll();
    };
    const addAudience = async (name) => {
        const audience = await Audience.create({
            name: name
        });
        audiences.value.push(audience);
    };
    const deleteAudienceById = async (id) => {
        await Audience.destroy({
            where: {
                id: id
            }
        });
        const audience_to_remove_index = audiences.value.findIndex(audience => {
            return audience["id"] === id;
        });
        audiences.value.splice(audience_to_remove_index, 1);
    };
    const getAudienceById = async (id) => {
        return await Audience.findByPk(id);
    };
    const updateAudienceById = async (id, name) => {
        await Audience.update({name: name}, {
            where: {
                id: id
            }
        });
        const audience = audiences.value.find(audience => {
            return audience["id"] === id;
        });
        audience.name = name;
    };

    return {
        audiences,
        loadAudiences,
        addAudience,
        deleteAudienceById,
        getAudienceById,
        updateAudienceById
    };
});