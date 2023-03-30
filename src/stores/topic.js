import { defineStore } from 'pinia';
import { ref } from "vue";
import { Topic } from "@/stores/db";

export const useTopicStore = defineStore("topic", () => {
    const topics = ref([]);

    const loadTopics = async () => {
        topics.value = await Topic.findAll();
    };
    const addTopic = async (name) => {
        const topic = await Topic.create({
            name: name
        });
        topics.value.push(topic);
    };
    const deleteTopicById = async (id) => {
        await Topic.destroy({
            where: {
                id: id
            }
        });
        const topic_to_remove_index = topics.value.findIndex(topic => {
            return topic["id"] === id;
        });
        topics.value.splice(topic_to_remove_index, 1);
    };
    const getTopicById = async (id) => {
        return await Topic.findByPk(id);
    };
    const updateTopicById = async (id, name) => {
        await Topic.update({name: name}, {
            where: {
                id: id
            }
        });
        const topic = topics.value.find(topic => {
            return topic["id"] === id;
        });
        topic.name = name;
    };

    return {
        topics,
        loadTopics,
        addTopic,
        deleteTopicById,
        getTopicById,
        updateTopicById
    };
});