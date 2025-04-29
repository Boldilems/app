<template>
    <div class="card border shadow-sm rounded bg-white text-dark w-100">
        <div class="card-header bg-primary text-white d-flex justify-content-between align-items-center">
            <span>Formato JSON</span>
            <button @click="copyToClipboard" class="btn btn-sm btn-light text-primary">Copiar</button>
        </div>
        <div class="card-body">
            <pre v-html="highlightedJson" class="mb-0 overflow-auto"></pre>
        </div>
    </div>
</template>

<script>
import { computed, defineProps } from 'vue'

function syntaxHighlight(json) {
    json = json
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')

    return json.replace(/("(\\u[\da-fA-F]{4}|\\[^u]|[^\\"])*"(?:\s*:)?|\b(true|false|null)\b|\b\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b)/g, match => {
        let cls = 'text-number'
        if (/^"/.test(match)) {
            cls = /:$/.test(match) ? 'text-key' : 'text-string'
        } else if (/true|false/.test(match)) {
            cls = 'text-boolean'
        } else if (/null/.test(match)) {
            cls = 'text-null'
        }
        return `<span class="${cls}">${match}</span>`
    })
}

export default {
    props: {
        jsonObject: {
            type: Object,
            required: true
        }
    },
    computed: {
        highlightedJson() {
            try {
                const pretty = JSON.stringify(this.jsonObject, null, 2)
                return syntaxHighlight(pretty)
            } catch {
                return '<span class="text-danger">❌ Objeto inválido</span>'
            }
        }
    },
    methods: {
        copyToClipboard() {
            try {
                const pretty = JSON.stringify(this.jsonObject, null, 2)
                navigator.clipboard.writeText(pretty)
                alert('Texto copiado al portapapeles')
            } catch (error) {
                alert('Error al copiar el texto')
            }
        }
    }
}
</script>

<style scoped>
pre {
    background-color: #f8f9fa;
    padding: 1rem;
    border-radius: 0.5rem;
    font-family: monospace;
    white-space: pre-wrap;
    word-wrap: break-word;
}

.text-key {
    color: #005cc5;
}

.text-string {
    color: #032f62;
}

.text-number {
    color: #005cc5;
}

.text-boolean {
    color: #d73a49;
}

.text-null {
    color: #6a737d;
}
</style>