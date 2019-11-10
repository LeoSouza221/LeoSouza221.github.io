<template lang="pug">
	.defaultHeader
		v-toolbar(
			:height="height"
			dark
			fixed
			:style=`{
				backgroundColor: color,
				backgroundImage: image,
				backgroundBlendMode: 'hue',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}`
		)
			slot(name="item-left")
			slot(name="item-center")
</template>

<script>
export default {
	props: ['height', 'color', 'image'],
	name: 'DefaulHeader',
}
</script>