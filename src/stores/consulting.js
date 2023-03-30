import { defineStore } from 'pinia';
import { ref } from "vue";
import { Consulting } from "@/stores/db";

export const useConsultingStore = defineStore("consulting", () => {
    const consultings = ref([]);

    const loadConsultings = async () => {
        consultings.value = await Consulting.findAll();
    };
    const addConsulting = async (topic_id, setting_id, audience_id, age_id,
                                 child_count, parent_count, teacher_count,
                                 m_count, w_count, d_count, note, is_crisis) => {
        const consulting = await Consulting.create({
            topic_id: topic_id,
            setting_id: setting_id,
            audience_id: audience_id,
            age_id: age_id,
            child_count: child_count,
            parent_count: parent_count,
            teacher_count: teacher_count,
            m_count: m_count,
            w_count: w_count,
            d_count: d_count,
            note: note,
            is_crisis: is_crisis
        });
        consultings.value.push(consulting);
    };
    const deleteConsultingById = async (id) => {
        await Consulting.destroy({
            where: {
                id: id
            }
        });
        const consulting_to_remove_index = consultings.value.findIndex(consulting => {
            return consulting["id"] === id;
        });
        consultings.value.splice(consulting_to_remove_index, 1);
    };
    const getConsultingById = async (id) => {
        return await Consulting.findByPk(id);
    };
    const updateConsultingById = async (id, name, from, to) => {
        await Consulting.update({
            from: from,
            to: to
        }, {
            where: {
                id: id
            }
        });
        const consulting = consultings.value.find(consulting => {
            return consulting["id"] === id;
        });
        consulting.from = from;
        consulting.to = to
    };

    return {
        consultings,
        loadConsultings,
        addConsulting,
        deleteConsultingById,
        getConsultingById,
        updateConsultingById
    };
});