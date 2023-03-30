import { defineStore } from 'pinia';
import { ref } from "vue";
import { Setting } from "@/stores/db";

export const useSettingStore = defineStore("setting", () => {
    const settings = ref([]);

    const loadSettings = async () => {
        settings.value = await Setting.findAll();
    };
    const addSetting = async (name) => {
        const setting = await Setting.create({
            name: name
        });
        settings.value.push(setting);
    };
    const deleteSettingById = async (id) => {
        await Setting.destroy({
            where: {
                id: id
            }
        });
        const setting_to_remove_index = settings.value.findIndex(setting => {
            return setting["id"] === id;
        });
        settings.value.splice(setting_to_remove_index, 1);
    };
    const getSettingById = async (id) => {
        return await Setting.findByPk(id);
    };
    const updateSettingById = async (id, name) => {
        await Setting.update({name: name}, {
            where: {
                id: id
            }
        });
        const setting = settings.value.find(setting => {
            return setting["id"] === id;
        });
        setting.name = name;
    };

    return {
        settings,
        loadSettings,
        addSetting,
        deleteSettingById,
        getSettingById,
        updateSettingById
    };
});