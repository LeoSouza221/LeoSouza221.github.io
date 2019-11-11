<template lang="pug">
	.defaultHeader
		v-toolbar(
			:height="height"
			dark
			fixed
			:style=`{
				backgroundImage: image,
				backgroundColor: color,
				backgroundBlendMode: 'multiply',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}`
			:flat="flat"
		)
			slot(name="item-left")
			slot(name="menu")
</template>

<script>
export default {
	props: ['height', 'color', 'image', 'flat'],
	name: 'DefaulHeader',
}
</script>