<script setup>
// ############################################################################

import {defineProps, defineEmits} from 'vue';
import IconFolder from "@/components/IconFolder";
import IconFile from "@/components/IconFile";
import IconFolderOpen from "@/components/IconFolderOpen";

// ############################################################################

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  files: {type: Array, default: () => []}
});
const emit = defineEmits(['on_folder_click', 'back'])

// ############################################################################

const on_file_click = file => {
    if(file.directory){
        emit('on_folder_click', file);
    }
}

// ############################################################################
</script>

<template>
    <table class="table">
        <tbody>
            <tr class="clickable" @click="$emit('back')">
                <td class="icon-row">
                    <IconFolderOpen class="icon-folder"/>
                </td>
            </tr>
            <tr
                v-for="file in files"
                :key="file.name"
                :class="{clickable: file.directory}"
                @click="on_file_click(file)"
            >
                <td class="icon-row">
                    <IconFolder v-if="file.directory" class="icon-folder"/>
                    <IconFile v-else class="icon-file"/>
                </td>
                <td class="text-left">{{ file.name }}</td>
                <td>
                    <span class="float-end">{{ file.size }}</span>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style>
.clickable{
    cursor: pointer;
}
.text-left{
    text-align: left;
}
.icon-row {
  width: 2em;
}
.icon-folder {
  width: 1em;
}
.icon-file {
  width: 0.75em;
}
</style>