<template>
    <Badge :dot="getDot(row)" >
        <a   @click="column.event(row)" :eventBody="row" :title="row[column.key]" :class="row.class||'td-btn-text-primary'">{{row[column.key]}}</a>
    </Badge>
</template>

<script>
import baseTableColumnMixins from './baseTableColumnMixins';
export default {
    name: 'nameColumn',
    mixins: [baseTableColumnMixins]
}
</script>