<script lang="ts">
	import * as Breadcrumb from '$lib/components/generic/ui/breadcrumb/index.js';

	export let path;
</script>

<Breadcrumb.Root>
	<Breadcrumb.List>
		<Breadcrumb.Item>
			<Breadcrumb.Link href="/">Planner</Breadcrumb.Link>
		</Breadcrumb.Item>
		<Breadcrumb.Separator />
		<Breadcrumb.Item>
			<Breadcrumb.Link href="/">Verdagraph</Breadcrumb.Link>
		</Breadcrumb.Item>
	</Breadcrumb.List>
</Breadcrumb.Root>
