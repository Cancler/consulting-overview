<template>
    <div>
<!--        <h3>Topic</h3>-->
<!--        <input v-model="topic_name">-->
<!--        <button @click="_addTopic">Add</button>-->
<!--        <div-->
<!--            v-for="topic in topics"-->
<!--            :key="topic.id"-->
<!--        >-->
<!--            {{ topic.name }}-->
<!--        </div>-->

<!--        <h3>Setting</h3>-->
<!--        <input v-model="setting_name">-->
<!--        <button @click="_addSetting">Add</button>-->
<!--        <div-->
<!--            v-for="setting in settings"-->
<!--            :key="setting.id"-->
<!--        >-->
<!--            {{ setting.name }}-->
<!--        </div>-->

<!--        <h3>Audience</h3>-->
<!--        <input v-model="audience_name">-->
<!--        <button @click="_addAudience">Add</button>-->
<!--        <div-->
<!--            v-for="audience in audiences"-->
<!--            :key="audience.id"-->
<!--        >-->
<!--            {{ audience.name }}-->
<!--        </div>-->

<!--        <h3>Age</h3>-->
<!--        <input type="number" v-model="age_from">-->
<!--        <input type="number" v-model="age_to">-->
<!--        <button @click="_addAge">Add</button>-->
<!--        <div-->
<!--            v-for="age in ages"-->
<!--            :key="age.id"-->
<!--        >-->
<!--            {{ age.from }} - {{ age.to }}-->
<!--        </div>-->

        <form>
            <h3>Consulting</h3>
            <div style="display: flex; flex-direction:column;">
                <div>
                    <label for="topic">Topic</label>
                    <select name="Topic" id="topic" v-model="topic">
                        <option></option>
                        <option
                            v-for="topic in topics"
                            :key="topic.id"
                            :label="topic.name"
                            :value="topic"
                        ></option>
                    </select>
                </div>
                <div>
                    <label for="setting">Setting</label>
                    <select name="Setting" id="setting" v-model="setting">
                        <option></option>
                        <option
                            v-for="setting in settings"
                            :key="setting.id"
                            :label="setting.name"
                            :value="setting"
                        ></option>
                    </select>
                </div>
                <div>
                    <label for="audience">Audience</label>
                    <select name="Audience" id="audience" v-model="audience">
                        <option></option>
                        <option
                            v-for="audience in audiences"
                            :key="audience.id"
                            :label="audience.name"
                            :value="audience"
                        ></option>
                    </select>
                </div>
                <div>
                    <label for="age">Age</label>
                    <select name="Age" id="age" v-model="age">
                        <option></option>
                        <option
                            v-for="age in ages"
                            :key="age.id"
                            :label="`${(age.to) ? age.from + ' - ' + age.to : age.from}`"
                            :value="age"
                        ></option>
                    </select>
                </div>
                <button type="submit" @click.prevent="_addConsulting">Add</button>
            </div>
        </form>

    </div>
</template>

<script setup>
import {computed, onMounted, ref} from "vue";
import {useTopicStore} from "@/stores/topic";
import {useSettingStore} from "@/stores/setting";
import {useAudienceStore} from "@/stores/audience";
import {useAgeStore} from "@/stores/age";
import {useConsultingStore} from "@/stores/consulting";

const topic_store = useTopicStore();
const setting_store = useSettingStore();
const audience_store = useAudienceStore();
const age_store = useAgeStore();
const consulting_store = useConsultingStore();

const {loadTopics} = topic_store;
const {loadSettings} = setting_store;
const {loadAudiences} = audience_store;
const {loadAges} = age_store;
const {addConsulting} = consulting_store;

// const topic_name = ref("");
// const setting_name = ref("");
// const audience_name = ref("");
// const age_from = ref(0);
// const age_to = ref(null);

const topic = ref();
const setting = ref();
const age = ref();
const audience = ref();

const topics = computed(() => {
    return topic_store.topics;
});
const settings = computed(() => {
    return setting_store.settings;
});
const audiences = computed(() => {
    return audience_store.audiences;
});
const ages = computed(() => {
   return age_store.ages;
});
//
// const _addTopic = async () => {
//     await addTopic(topic_name.value);
// };
// const _addSetting = async () => {
//     await addSetting(setting_name.value);
// }
// const _addAudience = async () => {
//     await addAudience(audience_name.value);
// };
// const _addAge = async () => {
//     await addAge(age_from.value, age_to.value);
// };

const _addConsulting = () => {
    addConsulting(topic.value.id, setting.value.id, audience.value.id, age.value.id)
};

onMounted(() => {
    loadTopics();
    loadSettings();
    loadAudiences();
    loadAges();
});

</script>

<style scoped>

</style>