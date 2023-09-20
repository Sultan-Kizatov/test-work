<script setup>
    import { ref, onMounted, onUnmounted } from 'vue';

    // для ползунка
    const sliderValue = ref(75); // начальное значение

    // для выбора типа системы
    const isActive = ref(false);
    const selectedOption = ref('Выберите тип системы');
    const options = ref(['Qiwi', 'Yandex Money', 'Web Money']);
    const selectContainer = ref(null);

    const toggleActive = () => {
        isActive.value = !isActive.value;
    };
    const selectOption = (option) => {
        selectedOption.value = option;
        isActive.value = false;
    };

    // Закрывать список при клике вне элемента
    const closeOnOutsideClick = (event) => {
        if (selectContainer.value && !selectContainer.value.contains(event.target)) {
            isActive.value = false;
        }
    };

    // Закрывать список при нажатии Esc
    const closeOnEsc = (event) => {
        if (event.key === 'Escape') {
            isActive.value = false;
        }
    };
    onMounted(() => {
        window.addEventListener('click', closeOnOutsideClick);
        window.addEventListener('keydown', closeOnEsc);
    });
    onUnmounted(() => {
        window.removeEventListener('click', closeOnOutsideClick);
        window.removeEventListener('keydown', closeOnEsc);
    });

    const fileInput = ref(null);
    const handleFileChange = () => {
    const selectedFile = fileInput.value.files[0];
    // Обработайте выбранный файл здесь
    console.log('Выбранный файл:', selectedFile);
    };
</script>

<template>
    <form action="#" class="placing-order-form">
        <div class="placing-order-form__wrap">
            <div class="placing-order-form__item placing-order-form__system" :class="{ 'is-active': isActive }" ref="selectContainer">
                <div class="selected-option" @click="toggleActive">{{ selectedOption }}</div>
                <div class="options" v-if="isActive">
                    <div class="option" v-for="option in options" :key="option" @click="selectOption(option)">{{ option }}</div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                    <path d="M14.9337 8.51079C14.9337 8.43936 14.898 8.359 14.8445 8.30543L14.398 7.859C14.3445 7.80543 14.2641 7.76971 14.1927 7.76971C14.1212 7.76971 14.0409 7.80543 13.9873 7.859L10.4784 11.3679L6.96946 7.859C6.91589 7.80543 6.83553 7.76971 6.7641 7.76971C6.68375 7.76971 6.61232 7.80543 6.55875 7.859L6.11232 8.30543C6.05875 8.359 6.02303 8.43936 6.02303 8.51079C6.02303 8.58221 6.05875 8.66257 6.11232 8.71614L10.273 12.8769C10.3266 12.9304 10.407 12.9661 10.4784 12.9661C10.5498 12.9661 10.6302 12.9304 10.6837 12.8769L14.8445 8.71614C14.898 8.66257 14.9337 8.58221 14.9337 8.51079Z"/>
                </svg>
            </div>
            <label class="placing-order-form__item">
                <input type="email" name="email" placeholder="Ваш e-mail">
            </label>
            <label class="placing-order-form__item">
                <input type="text" name="name" placeholder="Ваше имя">
            </label>
        </div>
        <div class="placing-order-form__range">
            <div class="range-container">
                <div class="range-container__wrap">
                    <div>Sed ut perspiciatis, unde omnis iste natus</div>
                    <div>{{ sliderValue }}%</div>
                </div>
                <input type="range" v-model="sliderValue" min="0" max="100" class="range">
            </div>
            <label class="range-container__file">
                <input type="file" class="hidden" ref="fileInput" @change="handleFileChange"/>
                <div class="range-container__file-wrap">
                    <svg id="file" width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="&#239;&#131;&#182;" d="M16.8125 4.60899L13.3304 1.12685C12.9174 0.713902 12.0915 0.36792 11.5 0.36792H1.50002C0.9085 0.36792 0.428589 0.847831 0.428589 1.43935V19.2965C0.428589 19.888 0.9085 20.3679 1.50002 20.3679H16.5C17.0915 20.3679 17.5714 19.888 17.5714 19.2965V6.43935C17.5714 5.84783 17.2255 5.02194 16.8125 4.60899ZM11.8572 1.88578C12.0469 1.95274 12.2366 2.05319 12.3148 2.13131L15.8081 5.62462C15.8862 5.70274 15.9866 5.89247 16.0536 6.08221H11.8572V1.88578ZM16.1429 18.9394H1.85716V1.79649H10.4286V6.43935C10.4286 7.03087 10.9085 7.51078 11.5 7.51078H16.1429V18.9394ZM4.7143 9.29649V10.0108C4.7143 10.2117 4.87055 10.3679 5.07145 10.3679H12.9286C13.1295 10.3679 13.2857 10.2117 13.2857 10.0108V9.29649C13.2857 9.0956 13.1295 8.93935 12.9286 8.93935H5.07145C4.87055 8.93935 4.7143 9.0956 4.7143 9.29649ZM12.9286 11.7965H5.07145C4.87055 11.7965 4.7143 11.9527 4.7143 12.1536V12.8679C4.7143 13.0688 4.87055 13.2251 5.07145 13.2251H12.9286C13.1295 13.2251 13.2857 13.0688 13.2857 12.8679V12.1536C13.2857 11.9527 13.1295 11.7965 12.9286 11.7965ZM12.9286 14.6536H5.07145C4.87055 14.6536 4.7143 14.8099 4.7143 15.0108V15.7251C4.7143 15.926 4.87055 16.0822 5.07145 16.0822H12.9286C13.1295 16.0822 13.2857 15.926 13.2857 15.7251V15.0108C13.2857 14.8099 13.1295 14.6536 12.9286 14.6536Z"/>
                    </svg>
                    Прикрепить файл
                </div>
            </label>
        </div>
        <button type="submit" class="placing-order-form__submit">Отправить</button>
    </form>
</template>

<style lang="scss" scoped>
    .placing-order {
        &-form {
            margin-top: 80px;
            &__wrap {
                display: flex;
                justify-content: space-between;
            }
            &__item {
                position: relative;
                width: 32%;
                height: 48px;
                box-sizing: border-box;
                svg {
                    fill: black;
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    right: 10px;
                }
                input {
                    width: 100%;
                    height: 100%;
                    padding: 10px;
                    border-radius: 3px;
                    border: 1px solid #FFF;
                    background: rgba(255, 255, 255, 0.85);
                    font-size: 18px;
                    &::placeholder {
                        color: #272733;
                    }
                    &:focus {
                        background: rgba(61, 64, 80, 0.85);
                        color: var(--color-text);
                        border: none;
                        outline: none;
                        &::placeholder {
                            color: var(--color-text);
                        }
                    }
                }
            }
            &__system {
                position: relative;
                font-size: 18px;
                .selected-option {
                    height: 100%;
                    padding: 10px;
                    border: 1px solid #FFF;
                    background: rgba(255, 255, 255, 0.85);
                    border-radius: 3px;
                    color: #272733;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                }
                .options {
                    position: absolute;
                    top: 100%;
                    left: 0;
                    width: 100%;
                    border-bottom-left-radius: 3px;
                    border-bottom-right-radius: 3px;
                    border: 1px solid #3D4050;
                    background: rgba(39, 39, 51, 0.90);
                    display: none;
                    backdrop-filter: blur(3px);
                    z-index: 99;
                }
            }
            &__range {
                margin-top: 30px;
                display: flex;
                justify-content: space-between;
            }
            &__submit {
                display: block;
                margin: 0 auto;
                margin-top: 50px;
                max-width: 370px;
                padding: 15px 10px;
                box-sizing: border-box;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                background: var(--color-blue);
                border-radius: 4px;
                border: 1px solid #FFF;
                font-size: 15px;
                font-weight: 600;
                color: var(--color-text);
                text-transform: uppercase;
                transition: all 0.3s;
                cursor: pointer;
                &:hover {
                    background: #3793d1;
                    transition: all 0.3s;
                }
            }
        }
    }
    .is-active {
        .selected-option {
            background: rgba(61, 64, 80, 0.85);
            color: var(--color-text);
            border: none;
        }
        .options {
            display: block;
            .option {
                padding: 10px;
                cursor: pointer;
                &:hover {
                    color: #42A9ED;
                }
            }
        }
        svg {
            transform: translateY(-50%) rotate(180deg);
            fill: white;
        }
    }
    .range {
        width: 100%;
        height: 8px;
        border-radius: 10px;
        background-color: rgba(255, 255, 255, 0.70); /* Цвет полосы ползунка */
        border: 1px solid #FFF;
        outline: none; /* Убираем стандартные стили фокусировки при нажатии */
        -webkit-appearance: none; /* Убираем стандартные стили для Webkit (Safari, Chrome) */
        &-container {
            text-align: center;
            margin-top: 20px;
            width: 66%;
            &__wrap {
                display: flex;
                justify-content: space-between;
                margin-bottom: 10px;
                font-size: 18px;
                text-align: left;
            }
            &__file {
                width: 32%;
                border-radius: 3px;
                border: 2px solid #3E9CDC;
                background: #FFF;
                padding: 10px;
                box-sizing: border-box;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                &-wrap {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    color: #272733;
                    font-size: 15px;
                    font-weight: 600;
                    text-transform: uppercase;
                }
                svg {
                    fill: #272733;
                }
                &:hover {
                    background: rgba(61, 64, 80, 0.85);
                    border: 2px solid #FFF;
                }
                &:hover &-wrap {
                    color: #FFF;
                }
                &:hover svg {
                    fill: #FFF;
                }
            }
        }
        &::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 38px; /* Ширина ползунка */
            height: 38px; /* Высота ползунка */
            background-color: #42A9ED; /* Цвет ползунка */
            border-radius: 50%;
            box-sizing: border-box;
            border: 4px solid #286690;
            cursor: pointer; /* Изменяем курсор при наведении на ползунок */
        }
        &::-moz-range-thumb {
            width: 38px; /* Ширина ползунка */
            height: 38px; /* Высота ползунка */
            background-color: #42A9ED; /* Цвет ползунка */
            border-radius: 50%;
            box-sizing: border-box;
            border: 4px solid #286690;
            cursor: pointer; /* Изменяем курсор при наведении на ползунок */
        }
    }
    .hidden {
        display: none;
    }

    @media screen and (max-width: 768px) {
        .placing-order {
            &-form {
                margin-top: 60px;
                &__wrap {
                    flex-wrap: wrap;
                    gap: 20px;
                }
                &__item {
                    width: 100%;
                }
                &__range {
                    margin-top: 20px;
                    flex-wrap: wrap;
                }
                &__submit {
                    margin-top: 30px;
                }
            }
        }
        .range-container {
            width: 100%;
            &__file {
                width: 100%;
                max-width: 370px;
                margin: 0 auto;
                margin-top: 30px;
            }
        }
    }
</style>