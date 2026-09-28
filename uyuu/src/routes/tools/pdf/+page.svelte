<script lang="ts">
	import { resolve } from '$app/paths';
	import * as Card from '$lib/components/ui/card';
	import {
		Merge,
		Scissors,
		FileDown,
		FileImage,
		PenLine,
		Layers
	} from '@lucide/svelte';

	const subTools = [
		{
			href: '/tools/pdf/merge' as const,
			label: '合并',
			description: '将多个PDF文件合并为一个',
			icon: Merge
		},
		{
			href: '/tools/pdf/split' as const,
			label: '分裂',
			description: '提取页面或拆分PDF',
			icon: Scissors
		},
		{
			href: '/tools/pdf/compress' as const,
			label: '压缩',
			description: '通过重新压缩减小文件大小',
			icon: FileDown
		},
		{
			href: '/tools/pdf/convert' as const,
			label: '转换',
			description: 'PDF与图片之间的转换',
			icon: FileImage
		},
		{
			href: '/tools/pdf/edit' as const,
			label: '编辑',
			description: '编辑PDF文本',
			icon: PenLine
		},
		{
			href: '/tools/pdf/pages' as const,
			label: '页面管理器',
			description: '旋转、删除和重新排序页面',
			icon: Layers
		}
	];
</script>

<svelte:head>
	<title>ANCDA - PDF 编辑器</title>
</svelte:head>

<section class="pdf-home">
	<div class="pdf-heading">
		<h1>ANCDA - PDF 编辑器</h1>
	</div>

	<div class="pdf-grid">
		{#each subTools as tool (tool.href)}
			{@const Icon = tool.icon}
			<a href={resolve(tool.href)} class="tool-link">
				<Card.Root class="tool-card">
					<Card.Header class="tool-card-header">
						<div class="tool-icon">
							<Icon class="size-6" />
						</div>
						<div class="tool-copy">
							<Card.Title class="tool-title">{tool.label}</Card.Title>
							<Card.Description class="tool-description">{tool.description}</Card.Description>
						</div>
					</Card.Header>
				</Card.Root>
			</a>
		{/each}
	</div>
</section>

<style>
	.pdf-home {
		min-height: 100vh;
		padding: 2rem 2rem 4rem;
	}

	.pdf-heading {
		max-width: 1100px;
		margin: 0 auto 2rem;
	}

	.pdf-heading h1 {
		margin: 0;
		font-size: clamp(2rem, 4vw, 3rem);
		line-height: 1.1;
		font-weight: 800;
		color: #111827;
		letter-spacing: -0.03em;
	}

	.pdf-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 1rem;
		max-width: 1100px;
		margin: 0 auto;
	}

	.tool-link {
		display: block;
		text-decoration: none;
		outline: none;
	}

	.tool-card {
		min-height: 118px;
		transition: transform 160ms ease, box-shadow 160ms ease;
	}

	.tool-link:hover .tool-card {
		transform: translateY(-2px);
		box-shadow: 0 10px 24px rgb(0 0 0 / 0.08);
	}

	.tool-card-header {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1.35rem;
		height: 100%;
	}

	.tool-icon {
		flex: 0 0 auto;
		display: grid;
		place-items: center;
		width: 52px;
		height: 52px;
		border-radius: 14px;
		color: #ff3344;
		background: #ffe7e9;
	}

	.tool-copy {
		min-width: 0;
	}

	.tool-title {
		font-size: 1.12rem;
		font-weight: 700;
	}

	.tool-description {
		margin-top: 0.25rem;
		font-size: 0.88rem;
		line-height: 1.45;
	}

	@media (max-width: 700px) {
		.pdf-grid {
			grid-template-columns: 1fr;
		}

		.pdf-home {
			padding: 1.5rem 1rem 3rem;
		}
	}
</style>
