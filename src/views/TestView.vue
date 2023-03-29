<template>
    <div>
        <input v-model="name">
        <button @click="add">Add</button>
        <button @click="remove">Remove</button>
        <div
            v-for="topic in topics"
            :key="topic.id"
        >
            {{topic.name}}

        </div>
    </div>
</template>

<script setup>
import {computed, onMounted, ref} from "vue";
import {useTopicStore} from "@/stores/topic";
const topic_store = useTopicStore()
const { addTopic, loadTopics, deleteTopicById } = topic_store

const name = ref("");
const topics = computed(() => {
    return topic_store.topics
})

const add = async () => {
    await addTopic(name.value)
}
const remove = async () => {
    const id = topics.value[0].id
    console.log(topics.value)
    console.log(id)
    await deleteTopicById(id)
}
onMounted(() => {
    loadTopics()
})

</script>

<style scoped>

</style>