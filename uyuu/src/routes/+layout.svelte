<script lang="ts">
	import type { Snippet } from 'svelte';
	import './layout.css';

	let { children }: { children: Snippet } = $props();
</script>

<svelte:head>
	<title>PDF 编辑器</title>
	<meta name="description" content="PDF 编辑器 · 浏览器本地 PDF 工具" />
</svelte:head>

<main class="min-h-screen">
	{@render children()}
</main>
