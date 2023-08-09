<template>
    <baseEventArea :events="column.events" :eventBody="row" ></baseEventArea>
</template>

<script>
import baseTableColumnMixins from './baseTableColumnMixins';
export default {
    name: 'buttonsColumn',
    mixins: [baseTableColumnMixins]
}
</script>