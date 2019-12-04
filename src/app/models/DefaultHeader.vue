<template lang="pug">
	.defaultHeader
		v-toolbar(
			:height="height"
			:dark="dark"
			fixed
			:style=`{
				backgroundImage: image,
				backgroundColor: color,
				backgroundBlendMode: 'multiply',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				borderBottom: '1px solid rgb(170, 169, 169)',
			}`
			:flat="flat"
		)
			slot(name="item-left")
			slot(name="menu")
</template>

<script>
export default {
	props: ['height', 'color', 'image', 'flat', 'dark'],
	name: 'DefaulHeader',
}
</script>