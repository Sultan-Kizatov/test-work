<script setup>
    import {RouterLink, RouterView} from 'vue-router'
    import Form from '../components/form.vue'

    const promoList = [
        'Totam rem aperiam eaque ipsa',
        'Sit voluptatem accusantium doloremque laudantium',
        'Sed ut perspiciatis, unde omnis iste natus error'
    ];
    
    const placingOrder = [
        {
            icon: `<svg id="order_1" width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="&#239;&#128;&#130;" d="M33.9286 24.9286C33.9286 29.8906 29.8906 33.9286 24.9286 33.9286C19.9665 33.9286 15.9286 29.8906 15.9286 24.9286C15.9286 19.9665 19.9665 15.9286 24.9286 15.9286C29.8906 15.9286 33.9286 19.9665 33.9286 24.9286ZM44.2143 41.6429C44.2143 40.9598 43.933 40.2969 43.471 39.8348L36.5803 32.9442C38.2076 30.5937 39.0714 27.7812 39.0714 24.9286C39.0714 17.1138 32.7433 10.7857 24.9286 10.7857C17.1138 10.7857 10.7857 17.1138 10.7857 24.9286C10.7857 32.7433 17.1138 39.0714 24.9286 39.0714C27.7812 39.0714 30.5937 38.2076 32.9442 36.5803L39.8348 43.4509C40.2969 43.933 40.9598 44.2143 41.6429 44.2143C43.0491 44.2143 44.2143 43.0491 44.2143 41.6429Z" fill="white"/>
            </svg>`,
            title: 'Lorem ipsum dolorsit amet'
        },
        {
            icon: `<svg id="order_2" width="55" height="56" viewBox="0 0 55 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="&#239;&#138;&#149;" d="M37.7857 35.9643C37.7857 37.3705 36.6205 38.5357 35.2143 38.5357C33.808 38.5357 32.6429 37.3705 32.6429 35.9643C32.6429 34.558 33.808 33.3928 35.2143 33.3928C36.6205 33.3928 37.7857 34.558 37.7857 35.9643ZM22.3571 20.5357C22.3571 21.9419 21.192 23.1071 19.7857 23.1071C18.3795 23.1071 17.2143 21.9419 17.2143 20.5357C17.2143 19.1294 18.3795 17.9643 19.7857 17.9643C21.192 17.9643 22.3571 19.1294 22.3571 20.5357ZM42.9286 35.9643C42.9286 31.7053 39.4732 28.25 35.2143 28.25C30.9554 28.25 27.5 31.7053 27.5 35.9643C27.5 40.2232 30.9554 43.6786 35.2143 43.6786C39.4732 43.6786 42.9286 40.2232 42.9286 35.9643ZM41 14.1071C41 13.404 40.4174 12.8214 39.7143 12.8214H36.5C36.0982 12.8214 35.7165 13.0223 35.4754 13.3437L14.2612 41.6294C14.1004 41.8504 14 42.1116 14 42.3928C14 43.096 14.5826 43.6786 15.2857 43.6786H18.5C18.9018 43.6786 19.2835 43.4777 19.5246 43.1562L40.7388 14.8705C40.8996 14.6495 41 14.3884 41 14.1071ZM27.5 20.5357C27.5 16.2768 24.0446 12.8214 19.7857 12.8214C15.5268 12.8214 12.0714 16.2768 12.0714 20.5357C12.0714 24.7946 15.5268 28.25 19.7857 28.25C24.0446 28.25 27.5 24.7946 27.5 20.5357Z" fill="white"/>
            </svg>`,
            title: 'Сonsecteturadipiscing elit'
        },
        {
            icon: `<svg id="order_3" width="55" height="56" viewBox="0 0 55 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.9932 29.3724V28.0867C23.9932 27.7251 24.2745 27.4439 24.6361 27.4439H38.7789C39.1405 27.4439 39.4218 27.7251 39.4218 28.0867V29.3724C39.4218 29.734 39.1405 30.0153 38.7789 30.0153H24.6361C24.2745 30.0153 23.9932 29.734 23.9932 29.3724Z" fill="white"/>
            <path d="M24.6361 32.5867H38.7789C39.1405 32.5867 39.4218 32.868 39.4218 33.2296V34.5153C39.4218 34.8769 39.1405 35.1581 38.7789 35.1581H24.6361C24.2745 35.1581 23.9932 34.8769 23.9932 34.5153V33.2296C23.9932 32.868 24.2745 32.5867 24.6361 32.5867Z" fill="white"/>
            <path d="M24.6361 37.7296H38.7789C39.1405 37.7296 39.4218 38.0108 39.4218 38.3724V39.6581C39.4218 40.0198 39.1405 40.301 38.7789 40.301H24.6361C24.2745 40.301 23.9932 40.0198 23.9932 39.6581V38.3724C23.9932 38.0108 24.2745 37.7296 24.6361 37.7296Z" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2789 21.3148C12.1837 21.3148 8.86392 17.995 8.86392 13.8998C8.86392 9.80461 12.1837 6.4848 16.2789 6.4848C19.7229 6.4848 22.6185 8.83277 23.4523 12.0153H36.2075C37.2722 12.0153 38.7588 12.6381 39.5021 13.3814L45.77 19.6492C46.5133 20.3925 47.1361 21.8791 47.1361 22.9439V46.0867C47.1361 47.1515 46.2722 48.0153 45.2075 48.0153H18.2075C17.1428 48.0153 16.2789 47.1515 16.2789 46.0867L16.2789 21.3148ZM18.8504 20.8568C21.4729 19.8871 23.397 17.477 23.6625 14.5867H34.2789V22.9439C34.2789 24.0086 35.1428 24.8724 36.2075 24.8724H44.5646V45.4439H18.8504V20.8568ZM37.674 15.1894C37.5334 15.0488 37.1919 14.868 36.8504 14.7474V22.301H44.4039C44.2834 21.9595 44.1026 21.618 43.962 21.4773L37.674 15.1894ZM17.2789 14.8998H21.2789V12.8998H17.2789V8.89984H15.2789V12.8998H11.2789V14.8998H15.2789V18.8998H17.2789V14.8998Z" fill="white"/>
            </svg>`,
            title: 'Sed do eiusmod tempor'
        },
        {
            icon: `<svg id="order_4" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="&#239;&#128;&#131;" d="M44.7952 39.1071C44.7952 39.4487 44.4938 39.75 44.1523 39.75H14.5809C14.2393 39.75 13.938 39.4487 13.938 39.1071V23.6786C14.3599 24.1607 14.8219 24.6027 15.3242 25.0045C18.1969 27.2143 21.0898 29.4643 23.8822 31.7946C25.3889 33.0603 27.2572 34.6071 29.3465 34.6071H29.3666H29.3867C31.476 34.6071 33.3443 33.0603 34.851 31.7946C37.6434 29.4643 40.5362 27.2143 43.409 25.0045C43.9112 24.6027 44.3733 24.1607 44.7952 23.6786V39.1071ZM44.7952 17.9933C44.7952 19.7009 43.1478 21.9308 41.842 22.9553C39.1501 25.0647 36.4581 27.1942 33.7862 29.3237C32.7215 30.1875 30.7929 32.0357 29.3867 32.0357H29.3666H29.3465C27.9402 32.0357 26.0117 30.1875 24.9469 29.3237C22.2751 27.1942 19.5831 25.0647 16.8911 22.9553C15.0831 21.529 13.938 19.5402 13.938 17.25C13.938 16.9085 14.2393 16.6071 14.5809 16.6071H44.1523C44.9157 16.6071 44.7952 17.4911 44.7952 17.9933ZM47.3666 17.25C47.3666 15.4821 45.9202 14.0357 44.1523 14.0357H14.5809C12.813 14.0357 11.3666 15.4821 11.3666 17.25V39.1071C11.3666 40.875 12.813 42.3214 14.5809 42.3214H44.1523C45.9202 42.3214 47.3666 40.875 47.3666 39.1071V17.25Z" fill="white"/>
            </svg>
            `,
            title: 'Esse cillum dolore eu fugiat'
        },
        {
            icon: `<svg id="order_5" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="&#239;&#131;&#150;" d="M24.7287 32.5357V30.6071H27.3002V24.8214H27.26C26.9386 25.3237 26.6372 25.5446 26.1551 25.9665L24.6082 24.3594L27.5814 21.6071H29.8716V30.6071H32.443V32.5357H24.7287ZM35.0145 27.3928C35.0145 23.7366 32.8046 19.0357 28.5859 19.0357C24.3671 19.0357 22.1573 23.7366 22.1573 27.3928C22.1573 31.0491 24.3671 35.75 28.5859 35.75C32.8046 35.75 35.0145 31.0491 35.0145 27.3928ZM45.3002 32.5357C42.4676 32.5357 40.1573 34.846 40.1573 37.6786H17.0145C17.0145 34.846 14.7042 32.5357 11.8716 32.5357V22.25C14.7042 22.25 17.0145 19.9397 17.0145 17.1071H40.1573C40.1573 19.9397 42.4676 22.25 45.3002 22.25V32.5357ZM47.8716 15.8214C47.8716 15.1183 47.289 14.5357 46.5859 14.5357H10.5859C9.88276 14.5357 9.30017 15.1183 9.30017 15.8214V38.9643C9.30017 39.6674 9.88276 40.25 10.5859 40.25H46.5859C47.289 40.25 47.8716 39.6674 47.8716 38.9643V15.8214Z" fill="white"/>
            </svg>
            `,
            title: 'Excepteur sint occaecat cupidatat non proident'
        }
    ];
</script>

<template>
    <main class="main">
        <section class="promo">
            <div class="container">
                <h1 class="promo__title">
                    <span>Lorem ipsum</span> dolor sit <br>
                    ametconsectetur <span>adipiscing</span>
                </h1>
                <div class="promo__descr">
                    At vero eos et accusamus et iusto odio dignissimos ducimus!
                </div>
                <ul class="promo__list">
                    <li class="promo__item" v-for="item in promoList">{{ item }}</li>
                </ul>
                <div class="promo__btns">
                    <RouterLink class="promo__btn promo__btns-order" to="#">заказать</RouterLink>
                    <RouterLink class="promo__btn promo__btns-more" to="#">подробнее</RouterLink>
                </div>
            </div>
        </section>

        <section class="placing-order">
            <div class="container">
                <h2 class="placing-order__title">
                    Оформление <span>Заказа</span>
                </h2>
                <div class="placing-order__descr">
                    Перед заполнением формы ознакомьтесь с нашей схемой работы!
                </div>
                <div class="placing-order__wrap">
                    <div class="placing-order__item" v-for="item in placingOrder">
                        <div>
                            <div class="placing-order__icon" v-html="item.icon"></div>
                            <div class="placing-order__subtitle">{{ item.title }}</div>
                        </div>
                        <svg class="placing-order__chain" xmlns="http://www.w3.org/2000/svg" width="110" height="6" viewBox="0 0 110 6" fill="none">
                            <circle cx="81" cy="3" r="3" fill="#C4C4C4"/>
                            <circle cx="107" cy="3" r="3" fill="#C4C4C4"/>
                            <circle cx="55" cy="3" r="3" fill="#C4C4C4"/>
                            <circle cx="29" cy="3" r="3" fill="#C4C4C4"/>
                            <circle cx="3" cy="3" r="3" fill="#C4C4C4"/>
                        </svg>
                    </div>
                </div>

                <Form></Form>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
    .promo {
        background: url('../assets/images/promo-bg.jpg') center center/cover no-repeat;
        padding: 100px 0 200px;
        &__title {
            color: var(--color-black);
            font-size: 48px;
            font-weight: 700;
            text-transform: uppercase;
            span {
                font-weight: 700;
                color: var(--color-blue);
            }
        }
        &__descr {
            margin-top: 80px;
            margin-bottom: 10px;
            color: var(--color-black);
            font-size: 20px;
            font-weight: 700;
        }
        &__list {
            list-style-type: none;
        }
        &__item {
            position: relative;
            margin-top: 5px;
            padding-left: 25px;
            color: var(--color-black);
            font-size: 20px;
            &::before {
                content: '';
                position: absolute;
                width: 5px;
                height: 1.5px;
                top: 50%;
                left: 10px;
                transform: translateY(-50%);
                background: var(--color-black);
            }
        }
        &__btns {
            margin-top: 80px;
            display: flex;
            justify-content: space-between;
            gap: 30px;
            max-width: 400px;
            &-order {
                border: 1px solid #FFF;
                background: var(--color-blue);
                color: var(--color-text);
                transition: all 0.3s;
                &:hover {
                    background: #3793d1;
                    transition: all 0.3s;
                }
            }
            &-more {
                border: 1px solid #6F6D7B;
                background: #FFF;
                color: #2A2B30;
                transition: all 0.3s;
                &:hover {
                    background: #fafafa;
                    transition: all 0.3s;
                }
            }
        }
        &__btn {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 50%;
            padding: 15px 10px;
            box-sizing: border-box;
            border-radius: 4px;
            text-decoration: none;
            text-transform: uppercase;
        }
    }

    .placing-order {
        padding: 120px 0 150px;
        &__title {
            font-size: 36px;
            font-weight: 800;
            text-transform: uppercase;
            text-align: center;
            span {
                font-weight: 800;
                color: var(--color-blue);;
            }
        }
        &__descr {
            margin-top: 30px;
            color: #BBB;
            font-size: 18px;
            font-weight: 400;
            text-align: center;
        }
        &__wrap {
            margin-top: 80px;
            display: flex;
            justify-content: space-between;
            gap: 30px;
        }
        &__item {
            position: relative;
            width: 20%;
            &:last-child .placing-order__chain {
                display: none;
            }
        }
        &__icon {
            position: relative;
            z-index: 10;
            margin: 0 auto;
            width: 100px;
            height: 100px;
            box-sizing: border-box;
            background: var(--color-blue);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            border: 5px solid #286690;
        }
        &__subtitle {
            margin-top: 20px;
            text-align: center;
            font-size: 16px;
        }
        &__chain {
            position: absolute;
            top: 50px;
            right: -70px;
        }
    }
    @media screen and (max-width: 1024px) {
        .placing-order {
            &__chain {
                display: none;
            }
            &__wrap {
                flex-wrap: wrap;
            }
            &__item {
                width: 25%;
                margin: 0 auto;
            }
        }
    }
    @media screen and (max-width: 768px) {
        .promo {
            padding: 60px 0 100px;
            &__title {
                font-size: 36px;
                br {
                    display: none;
                }
            }
            &__descr {
                margin-top: 40px;
            }
            &__btns {
                margin-top: 40px;
            }
        }
        .placing-order {
            padding: 80px 0 100px;
            &__title {
                font-size: 28px;
            }
            &__wrap {
                margin-top: 40px;
            }
        }
    }
    @media screen and (max-width: 576px) {
        .promo {
            &__title {
                font-size: 28px;
            }
        }
        .placing-order {
            &__item {
                width: 100%;
            }
        }
    }
</style>