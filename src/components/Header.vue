<script setup>
    import {RouterLink, RouterView} from 'vue-router'
    import { ref } from 'vue';

    const isMenuOpen = ref(false);

    const toggleMenu = () => {
        isMenuOpen.value = !isMenuOpen.value;
    };


    const navMenu = [
        {
            title: 'Бизнес',
            link: '/',
        },
        {
            title: 'О нас',
            link: 'about',
        },
        {
            title: 'Цены',
            link: 'prices',
        },
        {
            title: 'Оформить заказ',
            link: 'placing-order',
        }
    ]
</script>

<template>
    <header class="header">
        <div class="container">
            <nav class="menu">
                <RouterLink to="/">
                    <svg width="245" height="21" viewBox="0 0 245 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <use xlink:href="../assets/images/logo.svg#logo"></use>
                    </svg>
                </RouterLink>
                <div class="burger-menu" @click="toggleMenu" :class="{ 'open': isMenuOpen }">
                    <div class="bar bar1"></div>
                    <div class="bar bar2"></div>
                    <div class="bar bar3"></div>
                </div>
                <ul class="menu__list" :class="{ 'active': isMenuOpen }">
                    <li class="menu__item" v-for="item in navMenu" :key="item.title">
                        <RouterLink :to="item.link">{{ item.title }}</RouterLink>
                    </li>
                </ul>
            </nav>
            
        </div>
    </header>
</template>

<style lang="scss" scoped>
    .header {
        padding: 32px 0;
        background: var(--color-background);
        backdrop-filter: blur(3px);
        position: sticky;
        top: 0;
        z-index: 99;
    }
    .menu {
        display: flex;
        align-items: center;
        justify-content: space-between;
        svg {
            width: 200px;
        }
        &__list {
            display: flex;
            align-items: center;
            list-style-type: none;
            gap: 60px;
        }
        &__item {
            a {
                color: var(--color-text);
                text-decoration: none;
                text-transform: uppercase;
                font-weight: 600;
                &:hover {
                    color: #43ABF0;
                }
            }
            .router-link-active {
                color: #43ABF0;
            }
        }
    }
    .burger-menu {
        position: absolute;
        top: 28px;
        right: 40px;
        z-index: 99;
        display: none;
        flex-direction: column;
        cursor: pointer;
        transition: transform 0.3s ease-in-out;
        &.open {
            .bar1 {
                transform: translateY(8.5px) rotate(-45deg);
            }
            .bar2 {
                opacity: 0;
            }
            .bar3 {
                transform: translateY(-10px) rotate(45deg);
            }
        }
    }
    .bar {
        width: 30px;
        height: 3px;
        background-color: #FFF;
        margin: 3px 0;
        transition: transform 0.3s ease-in-out;
    }

    @media screen and (max-width: 1024px) {
        .menu {
            &__list {
                gap: 30px;
            }
        }
    }
    @media screen and (max-width: 768px) {
        .header {
            background: rgb(16, 16, 29);
        }
        .menu {
            &__list {
                background: rgb(16, 16, 29);
                display: flex;
                flex-direction: column;
                position: absolute;
                height: 100vh;
                width: 50%;
                top: -100vh;
                right: 0;
                padding: 10px;
                gap: 50px;
                justify-content: center;
                transition: all 0.5s;
                &.active {
                    top: 0;
                    transition: all 0.5s;
                }
            }
        }
        .burger-menu {
            display: flex;
        }
    }
    @media screen and (max-width: 575px) {
        .burger-menu {
            top: 33px;
            &.open .bar1 {
                transform: translateY(2px) rotate(-45deg);
            }
        }
        .bar {
            width: 20px;
            height: 2px;
            margin: 2px 0;
        }
    }
</style>