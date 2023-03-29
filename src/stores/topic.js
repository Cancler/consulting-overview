import { defineStore } from 'pinia'
import { ref } from "vue";
import { Topic } from "@/stores/db";

export const useTopicStore = defineStore("topic", () => {
    const topics = ref([])

    async function loadTopics(){
        topics.value = await Topic.findAll()
    }
    async function addTopic(name){
        const topic = await Topic.create({
            name: name
        })
        console.log(topic)
        topics.value.push(topic);
    }
    async function deleteTopicById(id){
        await Topic.destroy({
            where: {
                id: id
            }
        })
        const topic_to_remove_index = topics.value.findIndex(topic => {
            return topic["id"] === id
        })
        topics.value.splice(topic_to_remove_index, 1)
    }
    async function getTopicById(id){
        return await Topic.findByPk(id)
    }
    async function updateTopicById(id, name){
        await Topic.update({name: name}, {
            where: {
                id: id
            }
        })
        const topic = topics.value.find(topic => {
            return topic["id"] === id
        })
        topic.name = name
    }

    return {
        topics,
        loadTopics,
        addTopic,
        deleteTopicById,
        getTopicById,
        updateTopicById
    }
})