<template>
    <div class="nav">
        <h1 class="nav-title" @click="menuIsVisible = !menuIsVisible">Menu</h1>
        <div :class="{ visible: menuIsVisible }" class="nav-menu">
            <a slot="brand" class="nav-logo" href="#"
                ><h1 class="nav-heading nav-heading--main">
                    Lois Notebaart
                </h1></a
            >

            <h2 class="nav-heading">Comissioned</h2>
            <ul class="nav-list">
                <li class="nav-item active">
                    <NuxtLink to="/artist">1. Artist</NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink to="/newspapers">2. Newspapers</NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink to="/magazines">3. Magazines</NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink to="/design">4. Designs</NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink to="/campaigns">5. Campaigns</NuxtLink>
                </li>
            </ul>

            <h2 class="nav-heading">Concept development</h2>
            <ul class="nav-list">
                <li class="nav-item active">
                    <NuxtLink to="/haarlem-overdrijft"
                        >1. Haarlem Overdijft</NuxtLink
                    >
                </li>
                <li class="nav-item">
                    <NuxtLink to="/kaapkoffie">2. Kaap Koffie</NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink to="/contrast">3. Contrast</NuxtLink>
                </li>
            </ul>

            <h2 class="nav-heading">Personal work</h2>
            <ul class="nav-list">
                <li class="nav-item">
                    <NuxtLink to="/photography">1. Photography</NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink to="/artworks-and-projects"
                        >2. Artworks & Projects</NuxtLink
                    >
                </li>
                <li class="nav-item">
                    <NuxtLink to="/exhibitions">3. Exhibitions</NuxtLink>
                </li>
            </ul>

            <span class="nav-divider"
                >-------------------------------------------</span
            >

            <ul class="nav-list">
                <li class="nav-item">
                    <NuxtLink to="/works-for-sale">1. Works for sale</NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink to="/merchandise">2. Merchandise</NuxtLink>
                </li>
            </ul>

            <ul class="nav-list nav-list--social">
                <li class="nav-item">
                    <NuxtLink to="/contact">Contact</NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink to="/about">About</NuxtLink>
                </li>
                <br />
                <br />
                <li class="nav-item">
                    <a href="mailto:loisnotebaart@gmail.com" target="_blank"
                        >Email</a
                    >
                </li>
                <li class="nav-item">
                    <a href="https://www.instagram.com/nootlois/">Instagram</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: "Vue 2 with Dynamic Data",
            menuIsVisible: false,
            items: [], // Dynamic data will be stored here
        };
    },
    mounted() {},
    methods: {},
};
</script>
